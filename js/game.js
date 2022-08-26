class Game {
    setup() {
        this.player1 = new Player1() 
        this.player2 = new Player2()
        this.background = new Background() 
        this.coins = []
        this.coinsTwo = []
    }
    constructor() {
        this.backgroundImages 
        this.coinImage 
        this.hello = 0
        this.coinTwoImage 

    }
    preload() {
        this.backgroundImages = [
            {src: loadImage("assents/background/Layer0.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer1.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer2.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer3.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer4.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer5.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer6.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer7.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer8.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer9.png"), x: 0, speed: 2},
            {src: loadImage("assents/background/Layer10.png"),x: 0, speed: 2}
        ],
        this.playerOneImage = loadImage("assents/player/JumpChicken.png"),
        this.playerTwoImage = loadImage("assents/player/FallChicken.png"),
        this.coinImage = loadImage("assents/coins/Beer.png"), 
        this.coinTwoImage = loadImage("assents/coins/Whiskey.png"),
        this.drinkingSound = loadSound("assents/music/Drinking.mp3")
    }
    draw() {
        // clear()
        this.background.draw() 
        this.player1.draw()
        this.player2.draw()
        if (frameCount % 60 === 0) {
            this.coins.push(new Coin(this.coinImage))
            console.log(this.coins)
        }
         this.coins.forEach(function(coin){
             coin.draw() 
        })
        this.coins = this.coins.filter(coin => {
            if (coin.collisionOne(this.player1)) {
                this.drinkingSound.play()
            } else if (coin.y > 380){
                return false 
            } else{
                return true
            }
        })
        this.coins = this.coins.filter(coin => {
            if (coin.collisionTwo(this.player2)) {
                this.drinkingSound.play()
            } else if (coin.y > 380){
                return false 
            } else{
                return true
            }
        })

        if (frameCount % 120 === 0) {
            this.coinsTwo.push(new CoinTwo(this.coinTwoImage))
            console.log(this.coinsTwo)
        }
         this.coinsTwo.forEach(function(coinTwo){
             coinTwo.draw() 
        })
        this.coinsTwo = this.coinsTwo.filter(coinTwo => {
            if (coinTwo.collisionOne(this.player1)) {
                this.drinkingSound.play()
            } else if (coinTwo.y > 380){
                return false 
            } else{
                return true
            }
        })
        this.coinsTwo = this.coinsTwo.filter(coinTwo => {
            if (coinTwo.collisionTwo(this.player2)) {
                this.drinkingSound.play()
            } else if (coinTwo.y > 380){
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
