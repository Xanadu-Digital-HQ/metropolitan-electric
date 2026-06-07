"""Remove the background from one representative image per vehicle and save the
cut-out (transparent PNG) into public/showcase.

One-off utility used to generate the showcase assets. Run with: python scripts/remove_bg_showcase.py
"""
from pathlib import Path

from rembg import remove, new_session
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "vehicles"
OUT = ROOT / "public" / "showcase"
OUT.mkdir(parents=True, exist_ok=True)

# One chosen image per vehicle -> (output filename, model).
# u2net handles the clean studio car shots well; the bus front photo has other
# buses crowding it, so isnet-general-use gives a far cleaner full-body mask.
PICKS = {
    "Bus1.png": ("Bus1.png", "isnet-general-use"),                  # E-Bus
    "hongqi2.png": ("hongqi2.png", "u2net"),                       # Hongqi E-QM5
    "xiaomi_su7_2.png": ("xiaomi_su7_2.png", "u2net"),            # Xiaomi SU7
    "leanmotors_b01_1.png": ("leanmotors_b01_1.png", "u2net"),    # Leapmotor B01
    "leapmotor_c16_1.png": ("leapmotor_c16_1.png", "u2net"),      # Leapmotor C16
    "leapmotor_c10_1.png": ("leapmotor_c10_1.png", "u2net"),      # Leapmotor C10
    "wuling_starlight _s_1.png": ("wuling_starlight _s_1.png", "u2net"),  # Wuling Starlight S (SUV)
    "wuling_starlight_sedan_1.png": ("wuling_starlight_sedan_1.png", "u2net"),  # Wuling Starlight (Sedan)
}

# Alpha matting cleans up soft/glassy edges but needs the optional pymatting
# package, so fall back to a plain cut if it is missing.
try:
    import pymatting  # noqa: F401
    USE_MATTING = True
except ImportError:
    USE_MATTING = False
    print("pymatting not available -> running without alpha matting")

sessions: dict[str, object] = {}
for src_name, (out_name, model) in PICKS.items():
    session = sessions.setdefault(model, new_session(model))
    img = Image.open(SRC / src_name).convert("RGBA")
    if USE_MATTING:
        result = remove(
            img,
            session=session,
            alpha_matting=True,
            alpha_matting_foreground_threshold=240,
            alpha_matting_background_threshold=10,
            alpha_matting_erode_size=10,
        )
    else:
        result = remove(img, session=session)
    result.save(OUT / out_name)
    print(f"  {src_name}  ->  showcase/{out_name}  ({result.size[0]}x{result.size[1]})  [{model}]")

print("done")
