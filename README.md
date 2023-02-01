# Microbit Arcade Programming using MKC

## Requirements

- Node.js

## Installation

To install MKC:

`npm init -g makecode`

## Setup

In an empty folder, run

`mkc init arcade`

There are other template options, notably `microbit` for standard Microbit programming, or `maker-jacdac-brain-rp2040` for the Jacdac RP2040 module. A full list of templates can be generated with the command `mkc help init`.

This command creates the files for programming the microbit in the current directory.

The file `main.ts` can be used to write code for the Microbit.

## Build

To build the code, run

`mkc`

in the root directory. This creates a .hex file within the `built` folder. In my case MKC automatically chose the n3 build variant, which was exactly what I needed. This can be edited in the file `mkc.json`, by adding the line:

`"hwVariant": "[variant]]"`

A list of variants can be generated with the command `mkc --hw help`.

If the Microbit is currently connected via USB, the command

`mkc -d`

can be ran, which automatically flashes the .hex file to the Microbit after build.

## Dependencies

Extra dependencies can be added using the command

`mkc add [...]`

The dependencies can either be GitHub links or, in the case of Jacdac, just the name of the module required.

To add Jacdac support:

`mkc add jacdac`

Adds the Jacdac MakeCode extension; necessary for all Jacdac modules.

To add a Jacdac module:

`mkc add jacdac-button`

OR

`mkc add https://github.com/microsoft/pxt-jacdac/button`

## See Also

[MKC Documentation](https://www.npmjs.com/package/makecode)

[MKC GitHub](https://github.com/microsoft/pxt-mkc)
