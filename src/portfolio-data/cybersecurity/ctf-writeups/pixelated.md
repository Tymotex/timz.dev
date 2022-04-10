I initially tried to find a visual cryptography tool that would merge two images
together, however unfortunately I wasn't able to find such a tool. I then turned
to Python's power image manipulation library [Pillow](https://pillow.readthedocs.io/)
which I intended to use to loop through the data bytes of both of the given
files and then merge them with some bitwise or arithmetic operation and then
dump the resulting bytes to a new PNG file, which Pillow lets you do.

```python
from PIL import Image

with Image.open("scrambled1.png") as scrambled_1:
    with Image.open("scrambled2.png") as scrambled_2:
        # Sanity check that both png files have the same dimensions.
        width_px = scrambled_1.size[0]
        height_px = scrambled_1.size[1]
        assert(width_px == scrambled_2.size[0])
        assert(height_px == scrambled_2.size[1])

        # Extract the data (pixel) bytes for both png files.
        pixels_1 = scrambled_1.load()
        pixels_2 = scrambled_2.load()

        # Iterate through both pixel 'arrays' and add their values, then save
        # it into a resultant array of pixels.
        constructed_img = Image.new("RGB", (width_px, height_px))
        constructed_pixels = constructed_img.load()
        for x in range(width_px):
            for y in range(height_px):
                rgb_values = [-1, -1, -1]
                # Red channel.
                rgb_values[0] = (pixels_1[x, y][0] + pixels_2[x, y][0]) % 256
                # Green channel.
                rgb_values[1] = (pixels_1[x, y][1] + pixels_2[x, y][1]) % 256
                # Blue channel.
                rgb_values[2] = (pixels_1[x, y][2] + pixels_2[x, y][2]) % 256

                constructed_pixels[x, y] = tuple(rgb_values)
    
                # Note: apply mod 256 to handle overflowing past 255.

        constructed_img.save("constructed.png")
```

How did I know that the add operation would work? I didn't but I assumed that
this was the only way you could 'stack' values in the provided hint to 
'think of different ways you can "stack" images'.
