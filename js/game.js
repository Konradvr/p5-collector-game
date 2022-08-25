class Game {
    setup() {
        this.player1 = new Player1() 
        this.player2 = new Player2()
        this.background = new Background() 
        this.obstacles = []
        this.music = new Music() 
    }

    constructor() {
        this.backgroundImages 
        this.coinImage 
        this.backgroundMusic
    }
    
    preload() {
        this.backgroundImages = [
            {src: loadImage("..//assents/background/Layer0.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer1.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer2.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer3.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer4.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer5.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer6.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer7.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer8.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer9.png"), x: 0, speed: 2},
            {src: loadImage("..//assents/background/Layer10.png"),x: 0, speed: 2}
        ],
        this.playerOneImage = loadImage("..//assents/player/JumpChicken.png"),
        this.playerTwoImage = loadImage("..//assents/player/FallChicken.png"),
        this.coinImage = loadImage("..//assents/coins/Beer.png"),
        this.backgroundMusic = loadSound("")

    }

    draw() {
        clear()
        this.background.draw() 
        this.player1.draw()
        
        this.player2.draw()

        // here we add coins to the obstacle array 
        // frameCount - this is provides by p5
        if (frameCount % 150 === 0) {
            this.obstacles.push(new Obstacle(this.coinImage))
            // creating new obsticale and pushing it in the array 
            //  console.log("new Coin")
            console.log(this.obstacles)
        }
        // iterate over the obstales array and call the draw function for every obstacle inside 
        // loop 
         this.obstacles.forEach(function(obstacle){
             obstacle.draw() 
        })
        
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player1) || obstacle.collision(this.player2)) {
                return false 
            } else {
                return true 
            }
        })
    }

}