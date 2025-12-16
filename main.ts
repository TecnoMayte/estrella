let pixel = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    pixel = 0
    for (let index = 0; index < 8; index++) {
        strip.setPixelColor(pixel, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        pixel += 1
        basic.pause(1000)
    }
    strip.clear()
    strip.show()
    basic.pause(500)
    for (let index = 0; index < 9; index++) {
        strip.setPixelColor(pixel, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        pixel += -1
        basic.pause(1000)
    }
    strip.clear()
    strip.show()
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    strip.clear()
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(1000)
})
