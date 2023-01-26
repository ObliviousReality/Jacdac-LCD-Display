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

picture.fillRect(0, 0, 100, 100, 2)
picture.setPixel(50, 50, 1)
picture.drawCircle(50, 50, 10, 5)


draw();
controller.A.onEvent(ControllerButtonEvent.Pressed, () => { clear(); })
controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.fillRect(0, 0, 100, 100, 2);
})

controller.up.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.drawRect(randint(0, 100), randint(0, 100), randint(0, 100), randint(0, 100), randint(0, 16));
});

controller.down.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.drawCircle(randint(0, screen.width), randint(0, screen.height), randint(0, 50), randint(0, 16));
});

controller.left.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.drawLine(randint(0, screen.width), randint(0, screen.height), randint(0, screen.width), randint(0, screen.height), randint(0, 16));
});

controller.right.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.setPixel(randint(0, screen.width), randint(0, screen.height), randint(0, 16));
});

