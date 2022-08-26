const game = new Game(); 
let backgroundMusicMP;
let jumpSound;
let winSound; 
let winSoundTwo; 
let p1Win; 
function preload() {
    game.preload();
    backgroundMusicMP = loadSound("..//assents/music/BackgroundMusic.mp3")
    jumpSound = loadSound("..//assents/music/Jump.mp3")
    winSound = loadSound("..//assents/music/win.mp3")
    winSoundTwo = loadSound("..//assents/music/win.mp3")
    p1Win = loadImage("..//assents/PlayerWinPicture/P1.png")
}
function setup() {
    createCanvas(1000, 450)
    game.setup()
    // backgroundMusicMP.setVolumen(0.1)
    backgroundMusicMP.play()
}
function draw() {
    game.draw() 
    if(game.player1.score === 10){
        clear()
        text("Player ONE Won the Collecting Race!", width / 2, height / 2)
        textAlign(CENTER)
        textSize(50)
        fill("blue");
        backgroundMusicMP.stop()
        jumpSound.stop()
        game.drinkingSound.stop()
        // winSound.play()
        // noLoop()
        // image()
    } else if (game.player2.score === 10){
        // clear()
        text("Player TWO Won the Collecting Race!", width / 2, height / 2)
        textAlign(CENTER)
        textSize(50)
        fill("red")
        backgroundMusicMP.stop()
        jumpSound.stop()
        game.drinkingSound.stop()
        // winSoundTwo.play()
    }
}
function keyPressed() {
    if(keyCode === 87){ 
        // console.log("jump!")
        jumpSound.play();
        game.player1.jump()
    }; 
    if(keyCode === 65){
        // console.log("move left")
        game.player1.moveLeft() 
    };
    if(keyCode === 68){
        // console.log("move right")
        game.player1.moveRight() 
    };
    if(keyCode === 38){ 
        // console.log("jump!")
        game.player2.jump() 
        jumpSound.play()
    }; 
    if(keyCode === 37){
        // console.log("move left")
        game.player2.moveLeft()
    }
    if(keyCode === 39){
        // console.log("move right")
        game.player2.moveRight() 
    }
    // if(keyCode === 32){
    //     console.log("Restart.")
    //     game.restart
    // }
}

