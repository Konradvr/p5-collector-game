class CoinTwo {
    constructor(image) {
        this.image = image 
        this.x = (Math.random() * width) 
        this.y = 0
        this.width = 30
        this.height = 30
    }
    collisionOne(playerInfo) {
        // console.log("collisionOne", playerInfo)
        const playerX = playerInfo.x + playerInfo.width / 2 
        const playerY = playerInfo.y + playerInfo.height / 2 
        const coinX = this.x + this.width / 2 
        const coinY = this.y + this.height / 2
        if(dist(coinX, coinY, playerX, playerY) > 25){
            return false 
        } else {
            game.player1.score -= 1 
            // beide spieler eigene collision noch machen.. sonst ist der score bei beiden der selbe 
            return true 
        }
    }
    collisionTwo(playerInfo) {
        // console.log("collisionTwo", playerInfo)
        const playerX = playerInfo.x + playerInfo.width / 2 
        const playerY = playerInfo.y + playerInfo.height / 2 
        const coinX = this.x + this.width / 2 
        const coinY = this.y + this.height / 2
        if(dist(coinX, coinY, playerX, playerY) > 25){
            return false 
        } else {
            game.player2.score -= 1 
            // beide spieler eigene collision noch machen.. sonst ist der score bei beiden der selbe 
            return true 
        }
    }
    draw() {
        this.y ++
        image(this.image, this.x, this.y, this.width, this.height)
    }
}
