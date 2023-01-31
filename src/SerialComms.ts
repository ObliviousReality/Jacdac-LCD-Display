controller.A.onEvent(ControllerButtonEvent.Pressed, () => {
    serial.writeLine("Hello")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, () => {
    serial.writeLine("There")
})
basic.forever(function () {
    textSprite.setText(serial.readString());
})
serial.writeLine("There")
let textSprite = textsprite.create("Hello", 0, 1)
textSprite.setPosition(50, 50)
//This doesn't work; Serial communications doesn't do anything.
