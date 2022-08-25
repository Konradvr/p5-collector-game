class Obstacle {
    constructor(image) {
        this.image = image 
        this.x = 600
        this.y = (Math.random() * height) 
        this.width = 25
        this.height = 25
    }

    draw() {
        this.x --
        image(this.image, this.x, this.y, this.width, this.height)
    }

}