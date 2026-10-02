from rembg import remove, new_session
from PIL import Image

im = Image.open('/app/.work/new.png')
for name in ['isnet-general-use', 'u2net', 'birefnet-portrait']:
    try:
        s = new_session(name)
        out = remove(im, session=s)
        bbox = out.getchannel('A').point(lambda p: 255 if p > 12 else 0).getbbox()
        c = out.crop(bbox)
        bg = Image.new('RGB', c.size, (244, 248, 255))
        bg.paste(c, (0, 0), c)
        bg.save(f'/app/.work/p_{name}.jpg', quality=70)
        c.save(f'/app/.work/c_{name}.png')
        print(name, 'ok', c.size)
    except Exception as e:
        print(name, 'ERR', e)
