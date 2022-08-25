class Player2 {
    constructor() {
        this.score = 0 
        this.velocity = 0
        this.gravity = 0.5
        this.width = 50
        this.height = 50
        this.x = 500
        this.y = 350
        this.y = height - this.height;
    }
    draw() {
        this.velocity += this.gravity
        this.y += this.velocity 
        if(this.y >= height - this.height){
        this.y = height - this.height;
        }
        this.y = constrain(this.y, 0, 400)
        this.x = constrain(this.x, 0, 950)
        image(game.playerTwoImage, this.x, this.y, this.width, this.height ) 
    }
    jump() {
        this.velocity = -7
    }
    moveLeft() {
        this.x -= 45
    }
    moveRight() {
        this.x += 45
    }
}