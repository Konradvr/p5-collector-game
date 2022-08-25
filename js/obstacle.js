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
        // get the middle of the player 
        const playerX = playerInfo.x + playerInfo.width / 2 
        const playerY = playerInfo.y + playerInfo.height / 2 
        // get the middle of obstacle 
        const obstacleX = this.x + this.width / 2 
        const obstacleY = this.y + this.height / 2
        // measure the distance between obstacle and player
        if(dist(obstacleX, obstacleY, playerX, playerY) > 25){
            // this is not a collision 
            return false 
        } else {
            // this is a collision 
            game.player1.score += 1
            return true 
        }
    }

    draw() {
        this.y ++
        image(this.image, this.x, this.y, this.width, this.height)
    }

}