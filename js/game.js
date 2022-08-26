class Game {
    setup() {
        this.player1 = new Player1() 
        this.player2 = new Player2()
        this.background = new Background() 
        this.obstacles = []
    }
    constructor() {
        this.backgroundImages 
        this.coinImage 
        this.hello = 0

    }
    preload() {
        this.backgroundImages = [
            {src: loadImage("assents/background/Layer0.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer1.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer2.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer3.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer4.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer5.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer6.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer7.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer8.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer9.png"), x: 0, speed: 2},
            {src: loadImage("/assents/background/Layer10.png"),x: 0, speed: 2}
        ],
        this.playerOneImage = loadImage("..//assents/player/JumpChicken.png"),
        this.playerTwoImage = loadImage("..//assents/player/FallChicken.png"),
        this.coinImage = loadImage("..//assents/coins/Beer.png"), 
        this.drinkingSound = loadSound("..//assents/music/Drinking.mp3")
    }
    draw() {
        // clear()
        this.background.draw() 
        this.player1.draw()
        this.player2.draw()
        if (frameCount % 60 === 0) {
            this.obstacles.push(new Obstacle(this.coinImage))
            console.log(this.obstacles)
        }
         this.obstacles.forEach(function(obstacle){
             obstacle.draw() 
        })
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collisionOne(this.player1)) {
                this.drinkingSound.play()
            } else if (obstacle.y > 380){
                return false 
            } else{
                return true
            }
        })
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collisionTwo(this.player2)) {
                this.drinkingSound.play()
            } else if (obstacle.y > 380){
                return false 
            } else{
                return true
            }
        })

        // if(this.player1.score === 2){
        //     clear()
        //     text("Player ONE Won the Collecting Race!", width / 2, height / 2)
        //     textAlign(CENTER)
        //     textSize(20)
        // } else if (this.player2.score === 2){
        //     clear()
        //     text("Player TWO Won the Collecting Race!", width / 2, height / 2)
        //     textAlign(CENTER)
        //     textSize(20)
        // }

        // if(this.hello){
        //     main.reset()
        // }
    }
}
