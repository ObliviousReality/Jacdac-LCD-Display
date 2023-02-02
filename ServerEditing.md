# Server Editing

## Setup

1. Go to [MakeCode](https://makecode.microbit.org/).
2. Click `import`, then `import URL`.
3. Paste the link https://github.com/microsoft/pxt-jacdac/devices/microbit into the box, and click `Go Ahead!`.

## Use

Files can be found in the bottom left.

To use the different servers, they need to be enabled first.
In `main.ts` there is a list of the servers in a series of if statements. To enable a server, remove the `if (options.XXX)` section.

To edit the different servers, the code can be found in the various `microbit[Server]` files.

Code can be compiled to a `.hex` file the same as usual with MakeCode, and loaded to the Microbit in the standard fashion. The file is larger than the average MakeCode program so the upload may take some time; one time I got an upload error from the Microbit during this but simply reuploading the file fixed that.

## Recreate what I did

I enabled the Screen server in `main.ts`, and then edited the function `handlePacket` in `microbitScreen.ts`. I changed

```Typescript
let x = 0,
y = 0
for (let i = 0; i < 25; i++) {
    const byte = Math.floor(i / 5)
    const bit = 1 << (i - byte * 5)
    if (packet.data[byte] & bit) led.plot(y, x)
    else led.unplot(y, x)
    x++
    if (x == 5) {
        x = 0
        y++
    }
}
```

to

```Typescript
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        led.unplot(i, j);
    }
}
led.plot(1, 1);
led.plot(3, 1);
led.plot(0, 3);
led.plot(1, 4);
led.plot(2, 4);
led.plot(3, 4);
led.plot(4, 3);
```

Now whenever a pixel is set in the Jacdac dashboard, the Microbit will just display the set image. The dashboard does not fully understand what is happening however; it will display the image after the first click but subsequent clicks will act like expected behaviour on the dashboard twin but the Microbit will retain the image.
