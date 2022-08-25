class Obstacle {
    constructor(image) {
        this.image = image 
        this.x = (Math.random() * width) 
        this.y = 0
        this.width = 30
        this.height = 30
    }

    collision(playerInfo) {
        console.log("collision", playerInfo)
        const playerX = playerInfo.x + playerInfo.width / 2 
        const playerY = playerInfo.y + playerInfo.height / 2 
        const obstacleX = this.x + this.width / 2 
        const obstacleY = this.y + this.height / 2
        if(dist(obstacleX, obstacleY, playerX, playerY) > 25){
            return false 
        } else {
            game.player1.score += 1
            return true 
        }
    }
    draw() {
        this.y ++
        image(this.image, this.x, this.y, this.width, this.height)
    }
}