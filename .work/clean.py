import numpy as np
from PIL import Image
from scipy import ndimage

im = Image.open('/app/.work/c_isnet-general-use.png').convert('RGBA')
a = np.array(im)
al = a[..., 3].astype(np.float32)

# hard threshold then keep largest connected blob (drops ghosted railing)
mask = (al > 160)
lab, n = ndimage.label(mask)
if n:
    sizes = ndimage.sum(mask, lab, range(1, n + 1))
    keep = (np.argmax(sizes) + 1)
    mask = lab == keep

mask = ndimage.binary_closing(mask, np.ones((5, 5)))
mask = ndimage.binary_fill_holes(mask)
soft = ndimage.gaussian_filter(mask.astype(np.float32), 1.2)
a[..., 3] = np.clip(soft * 255, 0, 255).astype(np.uint8)

out = Image.fromarray(a)
bbox = out.getchannel('A').point(lambda p: 255 if p > 20 else 0).getbbox()
out = out.crop(bbox)
out.save('/app/.work/clean.png')
bg = Image.new('RGB', out.size, (244, 248, 255))
bg.paste(out, (0, 0), out)
bg.save('/app/.work/clean_prev.jpg', quality=72)
print('clean', out.size)
