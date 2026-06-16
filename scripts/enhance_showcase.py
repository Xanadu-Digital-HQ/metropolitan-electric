"""Clean up and re-gloss the showcase cut-outs.

Goal: make each background-removed vehicle PNG look newer / glossier while
keeping the silhouette (the "structure") and the transparent background intact.
Only the RGB channels are processed; alpha is carried through (optionally eroded
a hair to kill a light cut-out fringe).

Reproducible by design: each image is read from its pristine backup in
scripts/_showcase_backup/ and written to public/showcase/, so re-running always
starts from the original cut-out instead of compounding over an enhanced one.

Per-image params let us tune individual cars:
  shadow_lift  gamma lift of shadows/midtones (rescues near-black paint)
  saturation   paint richness
  gloss        strength of the specular highlight lift
  clarity      large-radius local contrast (lower => fewer edge halos)
  defringe     px of alpha erosion (removes a white cut-out outline)

Run with: python scripts/enhance_showcase.py
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SHOWCASE = ROOT / "public" / "showcase"
BACKUP = ROOT / "scripts" / "_showcase_backup"

DEFAULTS = dict(
    denoise=0.35,
    shadow_lift=0.0,
    clarity=70,
    clarity_radius=14,
    contrast=1.09,
    saturation=1.16,
    gloss=0.28,
    crisp=55,
    defringe=0,
    hi_lo=0.62,
    hi_hi=0.97,
)

# name -> (source filename in backup, param overrides). Anything not overridden
# uses DEFAULTS. The four un-flagged cars keep the default look.
JOBS = {
    # White bus: source is the de-papered copy. Soft clarity so the inpainted
    # windshield isn't re-sharpened into a smudge; gentle gloss.
    "Bus1.png": ("Bus1_clean.png", dict(clarity=30, clarity_radius=10, gloss=0.16, crisp=35, defringe=1)),
    # Black sedan looked like a blob: lift shadows, ease off contrast + gloss.
    "hongqi2.png": ("hongqi2.png", dict(shadow_lift=0.30, contrast=1.0, saturation=1.14, gloss=0.13, clarity=42)),
    # Grey/gunmetal SUV: push paint hard so the metallic colour actually reads.
    "leapmotor_c16_1.png": ("leapmotor_c16_1.png", dict(saturation=1.55, contrast=1.13, gloss=0.24, shadow_lift=0.06)),
    # Green SUV: kill the white outline (erode alpha), drop clarity halos + gloss.
    "leapmotor_c10_1.png": ("leapmotor_c10_1.png", dict(clarity=22, clarity_radius=10, gloss=0.10, contrast=1.06, saturation=1.2, crisp=28, defringe=2)),
    "xiaomi_su7_2.png": ("xiaomi_su7_2.png", {}),
    "leanmotors_b01_1.png": ("leanmotors_b01_1.png", {}),
    "wuling_starlight _s_1.png": ("wuling_starlight _s_1.png", {}),
    "wuling_starlight_sedan_1.png": ("wuling_starlight_sedan_1.png", {}),
}


def smoothstep(x, lo, hi):
    t = np.clip((x - lo) / (hi - lo), 0.0, 1.0)
    return t * t * (3.0 - 2.0 * t)


def gloss_highlights(rgb, alpha, p):
    arr = np.asarray(rgb, dtype=np.float32) / 255.0
    lum = 0.299 * arr[..., 0] + 0.587 * arr[..., 1] + 0.114 * arr[..., 2]
    mask = smoothstep(lum, p["hi_lo"], p["hi_hi"]) * (alpha / 255.0)
    mask = mask[..., None] * p["gloss"]
    out = 1.0 - (1.0 - arr) * (1.0 - mask)
    return Image.fromarray(np.clip(out * 255.0, 0, 255).astype(np.uint8), "RGB")


def enhance(src: Path, dst: Path, overrides: dict) -> None:
    p = {**DEFAULTS, **overrides}
    img = Image.open(src).convert("RGBA")
    r, g, b, a = img.split()
    alpha = np.asarray(a, dtype=np.float32)
    rgb = Image.merge("RGB", (r, g, b))

    # 1. denoise
    rgb = Image.blend(rgb, rgb.filter(ImageFilter.GaussianBlur(1.1)), p["denoise"])

    # 2. shadow lift (gamma < 1 brightens shadows/midtones)
    if p["shadow_lift"] > 0:
        arr = (np.asarray(rgb, np.float32) / 255.0) ** (1.0 / (1.0 + p["shadow_lift"]))
        rgb = Image.fromarray(np.clip(arr * 255.0, 0, 255).astype(np.uint8), "RGB")

    # 3. clarity / local contrast
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=p["clarity_radius"], percent=p["clarity"], threshold=2))

    # 4. richer paint
    rgb = ImageEnhance.Contrast(rgb).enhance(p["contrast"])
    rgb = ImageEnhance.Color(rgb).enhance(p["saturation"])

    # 5. glossy specular lift (alpha-aware)
    rgb = gloss_highlights(rgb, alpha, p)

    # 6. final crisp-up
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=2, percent=p["crisp"], threshold=1))

    # 7. defringe: shrink the silhouette a hair to drop a light cut-out outline
    if p["defringe"] > 0:
        for _ in range(p["defringe"]):
            a = a.filter(ImageFilter.MinFilter(3))

    r2, g2, b2 = rgb.split()
    Image.merge("RGBA", (r2, g2, b2, a)).save(dst)
    print(f"  enhanced  showcase/{dst.name}")


def main() -> None:
    for out_name, (src_name, overrides) in JOBS.items():
        src = BACKUP / src_name
        if not src.exists():
            print(f"  SKIP (no backup)  {src_name}")
            continue
        enhance(src, SHOWCASE / out_name, overrides)
    print("done")


if __name__ == "__main__":
    main()
