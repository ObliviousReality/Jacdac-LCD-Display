# LCD

    identifier: 0x1b7567b4
    camel: lcd
    tags: C

Controller for a variable-size Liquid Crystal Display

## Registers

    rw brightness = 0.05: u0.8 / @ intensity

Sets the brightness of the display.

    ro width: u16 # @ 0x180

Width of the display, in pixels.

    ro height: u16 # @ 0x181

Height of the display, in pixels.

## Commands

    unique command run @ 0x81 {
            command: bytes
    }

Runs the specified command.
