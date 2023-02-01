// Service LCD constants
export const SRV_LCD = 0x1b7567b4
export enum LCDReg {
    /**
     * Read-write ratio u0.8 (uint8_t). Sets the brightness of the display.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    Brightness = 0x1,

    /**
     * Read-only ratio u0.8 (uint8_t). Actual brightness of the display; varies from `brightness` if limited by the power.
     *
     * ```
     * const [actualBrightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    ActualBrightness = 0x180,

    /**
     * Read-write # uint16_t. Width of the display, in pixels.
     *
     * ```
     * const [width] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    Width = 0x80,

    /**
     * Read-write # uint16_t. Width of the display, in pixels.
     *
     * ```
     * const [height] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    Height = 0x81,

    /**
     * Read-write mA uint16_t. Limits the power drawn by the display.
     *
     * ```
     * const [maxPower] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    MaxPower = 0x7,
}

    export namespace LCDRegPack {
    /**
     * Pack format for 'brightness' Reg data.
     */
    export const Brightness = "u0.8"

    /**
     * Pack format for 'actual_brightness' Reg data.
     */
    export const ActualBrightness = "u0.8"

    /**
     * Pack format for 'width' Reg data.
     */
    export const Width = "u16"

    /**
     * Pack format for 'height' Reg data.
     */
    export const Height = "u16"

    /**
     * Pack format for 'max_power' Reg data.
     */
    export const MaxPower = "u16"
}

export enum LCDCmd {
    /**
     * Argument: command bytes. Runs the specified command.
     *
     * ```
     * const [command] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    Run = 0x81,
}

    export namespace LCDCmdPack {
    /**
     * Pack format for 'run' Cmd data.
     */
    export const Run = "b"
}

