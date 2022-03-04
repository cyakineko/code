input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    led.unplot(0, Y)
    Y += -3
    basic.pause(200)
    basic.pause(200)
    led.unplot(0, Y)
    Y += 1
    basic.pause(200)
    basic.pause(100)
    led.unplot(0, Y)
    Y += 1
    basic.pause(200)
    led.unplot(0, Y)
    Y += 1
})
let 障害物: game.LedSprite = null
let スプライト: game.LedSprite = null
let Y = 0
images.createBigImage(`
    . # # # # . . . . .
    . # . . # . . . . .
    # # . . # # . . . .
    . # # # # . . . . .
    # # # # # # . . . .
    `).scrollImage(1, 200)
let NOy = 0
NOy = 0
Y = 3
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        `)
})
basic.forever(function () {
    led.plot(0, Y)
})
basic.forever(function () {
    スプライト = game.createSprite(0, Y)
    障害物 = game.createSprite(4, 3)
    障害物.change(LedSpriteProperty.X, -1)
    if (スプライト.isTouching(障害物)) {
        control.waitMicros(6000)
    }
})
