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
    if(keyCode === 38){ 
        // mkae the player jump 
        game.player2.jump() 
    }
}