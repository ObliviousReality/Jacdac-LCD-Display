let picture = image.create(160, 120)

function clear() {
    for (let x = 0; x < 160; x++) {
        for (let y = 0; y < 120; y++) {
            picture.setPixel(x, y, 0);
        }
    }
}

function draw() {
    let test = sprites.create(picture);
}


function noise() {
    for (let i = 0; i < 160; i++) {
        for (let j = 0; j < 120; j++) {
            picture.setPixel(i, j, randint(0, 16));
        }
    }
}
noise();
picture.fillRect(0, 0, 100, 100, 2)
picture.setPixel(50, 50, 1)
picture.drawCircle(50, 50, 10, 5)

draw();
controller.A.onEvent(ControllerButtonEvent.Pressed, () => { clear(); })
controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.fillRect(0, 0, 100, 100, 2);
})

