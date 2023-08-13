let radlice = 0
let y = 0
let x = 0
radio.setGroup(1)
basic.forever(function () {
    x = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.X), 0, 1023, -100, 100)
    y = Math.map(joystickbit.getRockerValue(joystickbit.rockerType.Y), 0, 1023, -100, 100)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    if (input.buttonIsPressed(Button.A)) {
        radlice = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
        radio.sendValue("radlice", radlice)
    } else {
        radio.sendValue("radlice", 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        radlice = -1
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        radio.sendValue("radlice", radlice)
    } else {
        if (!(input.buttonIsPressed(Button.A))) {
            radio.sendValue("radlice", 0)
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
        }
    }
})
