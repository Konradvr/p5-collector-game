class Game {
    setup() {
        this.player1 = new Player1() 
        this.player2 = new Player2()
        this.background = new Background() 
    }

    constructor() {
        this.backgroundImages 
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
        this.playerTwoImage = loadImage("..//assents/player/FallChicken.png")
    }

    draw() {
        clear()
        this.background.draw() 
        this.player1.draw()
        this.player2.draw()
    }

}