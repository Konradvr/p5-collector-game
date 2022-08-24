class Background{
    draw() {
        //image(game.backgroundImages[0].src, 0, 0, width, height)
        game.backgroundImages.forEach(function(img){
            img.x -= img.speed 
            // if loop damit es immer schneller wird je mehr coins du collectest hast 
            image(img.src, img.x, 0, width, height)
            image(img.src, img.x + width, 0, width, height) 
            if(img.x <= - width){
                img.x = 0
            } 
        })

    }
}