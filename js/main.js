const game = new Game(); 
function preload() {
    game.preload()
}

function setup() {
    createCanvas(600, 400)
    game.setup()
}

function draw() {
    game.draw() 
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