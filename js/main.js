const game = new Game(); 
let backgroundMusicMP;
let jumpSound;
function preload() {
    game.preload();
    backgroundMusicMP = loadSound("..//assents/music/BackgroundMusic.mp3")
    jumpSound = loadSound("..//assents/music/Jump.mp3")
}
function setup() {
    createCanvas(1000, 450)
    game.setup()
    // backgroundMusicMP.setVolumen(0.1)
    backgroundMusicMP.play()
}
function draw() {
    game.draw() 
}
function keyPressed() {
    if(keyCode === 87){ 
        jumpSound.play();
        game.player1.jump()
    }; 
    if(keyCode === 65){
        console.log("move left")
        game.player1.moveLeft() 
    };
    if(keyCode === 68){
        console.log("move right")
        game.player1.moveRight() 
    };
    if(keyCode === 38){ 
        game.player2.jump() 
        jumpSound.play()
    }; 
    if(keyCode === 37){
        console.log("move left")
        game.player2.moveLeft()
    }
    if(keyCode === 39){
        console.log("move right")
        game.player2.moveRight() 
    }
}

