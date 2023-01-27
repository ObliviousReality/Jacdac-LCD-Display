let picture = image.create(screen.width, screen.height) // Creates an editable bitmap image the size of the screen.

/**
 * Sets all pixels to black on the screen
 */
function clear() {
    for (let x = 0; x < screen.width; x++) {
        for (let y = 0; y < screen.height; y++) {
            picture.setPixel(x, y, 0);
        }
    }
}
/**
 * Creates a sprite from the image. This is necessary to actually show the image produced. This only has to be done once; further additions to the image will be seen, any changes before this is called however cannot be seen on the display.
 */
function draw() {
    let test = sprites.create(picture);
}

picture.fillRect(0, 0, 100, 100, 2) // Fileld rectangle.
picture.setPixel(50, 50, 1) // Sets the value of a single pixel.
picture.drawCircle(50, 50, 10, 5) // Empty circle
draw();

// Press A to clear the screen.
controller.A.onEvent(ControllerButtonEvent.Pressed, () => { clear(); })

// Press B to draw a filled red rectangle.
controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.fillRect(0, 0, 100, 100, 2);
})

// Press UP to generate a random empty rectangle.
controller.up.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.drawRect(randint(0, 100), randint(0, 100), randint(0, 100), randint(0, 100), randint(0, 16));
});

// Press DOWN to generate a random empty circle.
controller.down.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.drawCircle(randint(0, screen.width), randint(0, screen.height), randint(0, 50), randint(0, 16));
});

//Press LEFT to generate a random line.
controller.left.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.drawLine(randint(0, screen.width), randint(0, screen.height), randint(0, screen.width), randint(0, screen.height), randint(0, 16));
});

// Press RIGHT to generate a random pixel.
controller.right.onEvent(ControllerButtonEvent.Pressed, () => {
    picture.setPixel(randint(0, screen.width), randint(0, screen.height), randint(0, 16));
});

