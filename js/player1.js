class Player1 {
    constructor() {
        this.score = 0; 
        this.velocity = 0
        this.gravity = 0.3
        this.width = 50
        this.height = 50
        this.x = 100
        this.y = 340
        this.y = height - this.height;
        
    }

    draw() {
        // this pushes the plyer down
        this.velocity += this.gravity
        this.y += this.velocity 
        // if bb8 moves lower than the bottom of the canvas we need to correct his position 
        if(this.y >= height - this.height){
        // reset to his starting position 
        this.y = height - this.height 
        }
        // reset to his starting position 
        this.y = constrain(this.y, 0, 400)
        this.x = constrain(this.x, 0, 550)
        

        image(game.playerOneImage, this.x, this.y, this.width, this.height ) 
    }
    
        jump(){
            // console.log("jump :P")
            // how can he jump ? need to change the y 
            this.velocity = -10
            // -> use velorcity now 
            // -10 weil es ja im negative bereich auf der y und x achse ist !! hab das letztes mal nicht bemerkt 
            // so how can he get on the ground again? 
        }

        moveLeft() {
            this.x -= 30
        }

        moveRight() 
        {
            this.x += 30
        }
    
}