// Service LCD constants
export const SRV_LCD = 0x1b7567b4
export enum LcdReg {
    /**
     * Read-write ratio u0.8 (uint8_t). Sets the brightness of the display.
     *
     * ```
     * const [brightness] = jdunpack<[number]>(buf, "u0.8")
     * ```
     */
    Brightness = 0x1,

    /**
     * Read-only # uint16_t. Width of the display, in pixels.
     *
     * ```
     * const [width] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    Width = 0x180,

    /**
     * Read-only # uint16_t. Height of the display, in pixels.
     *
     * ```
     * const [height] = jdunpack<[number]>(buf, "u16")
     * ```
     */
    Height = 0x181,
}

    export namespace LcdRegPack {
    /**
     * Pack format for 'brightness' Reg data.
     */
    export const Brightness = "u0.8"

    /**
     * Pack format for 'width' Reg data.
     */
    export const Width = "u16"

    /**
     * Pack format for 'height' Reg data.
     */
    export const Height = "u16"
}

export enum LcdCmd {
    /**
     * Argument: command bytes. Runs the specified command.
     *
     * ```
     * const [command] = jdunpack<[Uint8Array]>(buf, "b")
     * ```
     */
    Run = 0x81,
}

    export namespace LcdCmdPack {
    /**
     * Pack format for 'run' Cmd data.
     */
    export const Run = "b"
}

