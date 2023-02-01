# LCD

    identifier: 0x1b7567b4
    camel: LCD
    tags: C

Controller for a variable-size Liquid Crystal Display

## Registers

    rw brightness = 0.05: u0.8 / @ intensity

Sets the brightness of the display.

    ro actual_brightness: u0.8 / @ 0x180

Actual brightness of the display; varies from `brightness` if limited by the power.

    rw width: u16 # @ 0x80

Width of the display, in pixels.

    rw height: u16 # @ 0x81

Width of the display, in pixels.

    rw max_power = 200: u16 mA @ max_power

Limits the power drawn by the display.

## Commands

    unique command run @ 0x81 {
            command: bytes
    }

Runs the specified command.
