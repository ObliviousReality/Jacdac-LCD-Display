let picture = image.create(screen.width, screen.height) // Creates an editable bitmap image the size of the screen.


function draw(): void {
    let test = sprites.create(picture);
}

function clear(): void {
    for (let x = 0; x < screen.width; x++) {
        for (let y = 0; y < screen.height; y++) {
            setPixel(x, y, 0);
        }
    }
}

function setPixel(x: number, y: number, c: number): void {
    picture.setPixel(x, y, c);
}

// Bresenham's algorithm
function drawCircle(x: number, y: number, r: number, c: number): void {
    for (let i: number = -r; i < r; i += 0.01) {
        let t: number = Math.sqrt(Math.abs(Math.pow(r, 2) - Math.pow(i, 2)));
        setPixel(x + i, y + t, c);
        setPixel(x + i, y - t, c);
    }
}

function drawLine(x1: number, y1: number, x2: number, y2: number, c: number): void {

    const dx = x2 - x1;
    const dy = y2 - y1;
    const absdx = Math.abs(dx);
    const absdy = Math.abs(dy);

    let x = x1;
    let y = y1;
    setPixel(x, y, c);

    // slope < 1
    if (absdx > absdy) {

        let d = 2 * absdy - absdx;

        for (let i = 0; i < absdx; i++) {
            x = dx < 0 ? x - 1 : x + 1;
            if (d < 0) {
                d = d + 2 * absdy
            } else {
                y = dy < 0 ? y - 1 : y + 1;
                d = d + (2 * absdy - 2 * absdx);
            }
            setPixel(x, y, c);
        }
    } else { // case when slope is greater than or equals to 1
        let d = 2 * absdx - absdy;

        for (let i = 0; i < absdy; i++) {
            y = dy < 0 ? y - 1 : y + 1;
            if (d < 0)
                d = d + 2 * absdx;
            else {
                x = dx < 0 ? x - 1 : x + 1;
                d = d + (2 * absdx) - (2 * absdy);
            }
            setPixel(x, y, c);
        }
    }
}

// drawCircle(50, 50, 10, 3);
// picture.drawCircle(50, 50, 20, 5);
// drawCircle(50, 50, 30, 6);


drawLine(10, 30, screen.width - 10, 10, 4);
drawLine(10, 10, screen.width - 10, 30, 4); // yes
drawLine(10, 10, 50, 30, 7); // yes
drawLine(80, 80, 50, 50, 9);
drawLine(screen.width / 2, 0, screen.width / 2, screen.height, 13);
drawLine(0, screen.height / 2, screen.width, screen.height / 2, 13);

draw();



controller.A.onEvent(ControllerButtonEvent.Pressed, () => { clear(); })
controller.down.onEvent(ControllerButtonEvent.Pressed, () => { drawLine(randint(0, screen.width), randint(0, screen.height), randint(0, screen.width), randint(0, screen.height), randint(0, 16)) })
