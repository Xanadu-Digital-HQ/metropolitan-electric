"""Remove the windshield QR/document papers from the bus cut-out so only the
'Metro Electric' badge remains. Harmonic (diffusion) inpaint over the smooth
glass reads naturally. Writes the cleaned cut-out back to the backup copy so the
main enhance pass can gloss it afterwards.
"""
import numpy as np
from PIL import Image
from scipy import ndimage

SRC = "scripts/_showcase_backup/Bus1.png"
OUT = "scripts/_showcase_backup/Bus1_clean.png"

img = Image.open(SRC).convert("RGBA")
a = np.asarray(img).astype(np.float32)
rgb = a[..., :3].copy()
alpha = a[..., 3]
h, w = rgb.shape[:2]

lum = 0.299 * rgb[..., 0] + 0.587 * rgb[..., 1] + 0.114 * rgb[..., 2]
mx = rgb.max(2); mn = rgb.min(2)
sat = (mx - mn) / (mx + 1e-3)

box = np.zeros((h, w), bool)
box[90:162, 150:302] = True
bright = (lum > 150) & (sat < 0.22) & box & (alpha > 200)

# Solidify into full paper rectangles: close gaps, fill the QR's dark holes,
# then dilate to swallow the paper edges and their thin shadows.
mask = ndimage.binary_closing(bright, structure=np.ones((7, 7)))
mask = ndimage.binary_fill_holes(mask)
mask = ndimage.binary_dilation(mask, structure=np.ones((3, 3)), iterations=3)
mask &= alpha > 200  # never invent colour outside the silhouette

# Seed the masked area with the mean of its surrounding ring, then relax toward
# a harmonic fill (each masked pixel -> average of 4 neighbours).
ring = ndimage.binary_dilation(mask, iterations=4) & ~mask
seed = rgb[ring].mean(0)
out = rgb.copy()
out[mask] = seed
m = mask.copy()
for _ in range(900):
    nb = np.zeros_like(out)
    nb[1:, :] += out[:-1, :]
    nb[:-1, :] += out[1:, :]
    nb[:, 1:] += out[:, :-1]
    nb[:, :-1] += out[:, 1:]
    nb /= 4.0
    out[m] = nb[m]

# Tiny blur only inside the fill to kill relaxation banding.
filled = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))
from PIL import ImageFilter
blur = np.asarray(filled.filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32)
soft = ndimage.binary_erosion(mask, iterations=2)
out[soft] = blur[soft]

res = np.dstack([np.clip(out, 0, 255), alpha]).astype(np.uint8)
Image.fromarray(res, "RGBA").save(OUT)
# preview
Image.fromarray(res[:, :, :3]).crop((140, 80, 310, 175)).resize((680, 380)).save(
    "scripts/_bus_clean_preview.png"
)
print("saved", OUT)
