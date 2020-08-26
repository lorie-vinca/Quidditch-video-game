class Treasure {

    constructor(img) {
        this.height = 100;
        this.width = 100;
        this.x = 400;
        this.y = height - this.height;
        this.image = img;
        this.speed = 10
        this.speedX = 6
    }

    //define the Snitch collision function
    collisionSnitch(playerInfo) {
        let treasureX = this.x + this.width / 2;
        let treasureY = this.y + this.height / 2;
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        //console.log(treasureX, treasureY, playerX, playerY);

        if (dist(treasureX, treasureY, playerX, playerY) < 50) {
            console.log("I caught the snicth!")

            return true;

        }
    }


    drawTreasure() {

        if (frameCount >= 360) {
            //console.log("help", this.image)
            image(this.image, this.x, this.y, this.width, this.height);
            //     // Jiggling randomly on the horizontal axis
            this.x += this.speedX
            //     // Moving up at a constant speed
            this.y -= this.speed;

            if (this.y <= 0 || this.y >= height - this.height) {
                this.speed *= -1;
            }
            //  ​

            if (this.x <= 400 || this.x >= width - this.width) {
                this.speedX *= -1
            }


            //     // don't leave the screen right side

            // Reset to the bottom
            // if (this.y < 0) {
            //     this.y = height;
            // }
        }

    }


}