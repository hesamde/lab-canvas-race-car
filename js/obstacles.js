//step 1
class obstacle {
    constructor(ctx, posX, randomW, carSpecs) {
        this.ctx = ctx
        this.posX = posX
        this.randomW = randomW
        this.carSpecs = carSpecs
        this.speed = 10
        this.obstaclesSpecs = {
            pos: { x: posX, y: 100 },
            size: { w: this.randomW, h: 50 }
        }
        this.init()
    }
//step 2
    init() {
        this.drawObstacle()
    }
//step 3
    drawObstacle() {
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
        this.obstaclesSpecs.pos.x,
        this.obstaclesSpecs.pos.y,
        this.obstaclesSpecs.size.w,
        this.obstaclesSpecs.size.h)
    }
//step 4
    move() {
        this.obstaclesSpecs.pos.y += this.speed
        if (
            this.carSpecs.pos.x < this.obstaclesSpecs.pos.x + this.obstaclesSpecs.size.w &&
            this.carSpecs.pos.x + this.carSpecs.size.w > this.obstaclesSpecs.pos.x &&
            this.carSpecs.pos.y < this.obstaclesSpecs.pos.y + this.obstaclesSpecs.size.h &&
            this.carSpecs.size.h + this.carSpecs.pos.y > this.obstaclesSpecs.pos.y
        ) {
//step 5
            alert("COLLISION");
        }
    }
}
