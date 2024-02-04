input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Bird: game.LedSprite = null
let ticks = 0
let Obstacle: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
let EmptyObstacleY = randint(0, 4)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let list: boolean[] = []
    while (Obstacle.length > 0 && list[0] == (Obstacle[0].get(LedSpriteProperty.X) == 0)) {
        Obstacle.removeAt(0).delete()
    }
    for (let Obstacle2 of Obstacle) {
        Obstacle2.change(LedSpriteProperty.X, 1)
    }
    EmptyObstacleY = randint(0, 4)
    if (ticks % 3 == 0) {
        for (let Index = 0; Index <= 4; Index++) {
            if (Index != EmptyObstacleY) {
                Obstacle.push(game.createSprite(4, Index))
            }
        }
    }
    for (let Obstacle3 of Obstacle) {
        if (Obstacle3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
