input.onButtonPressed(Button.A, function () {
    X += -1
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(X, Y)
    Y += -3
    basic.pause(100)
    led.unplot(X, Y)
    Y += 1
    basic.pause(100)
    led.unplot(X, Y)
    Y += 1
    basic.pause(100)
    led.unplot(X, Y)
    Y += 1
})
input.onButtonPressed(Button.B, function () {
    X += 1
})
let Y = 0
let X = 0
images.createBigImage(`
    . # # # # . . . . .
    . # . . # . . . . .
    # # . . # # . . . .
    . # # # # . . . . .
    # # # # # # . . . .
    `).scrollImage(1, 200)
let NOy = 0
NOy = 0
X = 0
Y = 3
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    led.plot(X, Y)
    led.unplot(X + 1, 3)
    led.unplot(X - 1, 3)
    led.unplot(X - 1, 3)
    led.unplot(0, 0)
    if (X < 0) {
        X = 0
    }
    if (X > 4) {
        X = 4
    }
})
