let picture = image.create(160, 120)
picture.fillRect(0, 0, 100, 100, 2)
picture.setPixel(50, 50, 1)
let test: Sprite = sprites.create(picture)
