const game = new Game(); 

let song; 
function preload() {
    game.preload()
    // song = loadSound('..//assents/music/BackgroundMusic.mp3')
    // song = loadSound("..//assents/music/BackgroundMusic.mp3")
}

function setup() {
    createCanvas(600, 400)
    game.setup()
    // song.loop()
}

function draw() {
    game.draw() 
}
function music() {
    game.music()
}

function keyPressed() {
    if(keyCode === 87){ 
        // mkae the player jump 
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
        // mkae the player jump 
        game.player2.jump() 
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
/*
function mousePressed() {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.pause(); // .play() will resume from .pause() position
      background(255, 0, 0);
    } else {
      song.play();
      background(0, 255, 0);
    }
  }
  */