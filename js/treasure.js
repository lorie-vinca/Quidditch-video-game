class Treasure {
    constructor(img) {
        this.height = 100;
        this.width = 100;
        this.x = 200;
        this.y = height;
        this.image = img;
    }

    //   define the collision function
    // collision(playerInfo) {
    //   let obstacleX = this.x + this.width / 2;
    //   let obstacleY = this.y + this.height / 2;
    //   let playerX = playerInfo.x + playerInfo.width / 2;
    //   let playerY = playerInfo.y + playerInfo.height / 2;
    //   console.log(obstacleX, obstacleY, playerX, playerY);

    //   if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
    //     return true;


    drawTreasure() {
        //console.log(this.image)
        image(this.image, this.x, this.y, this.width, this.height);

        // Jiggling randomly on the horizontal axis
        this.x = this.x + random(-1, 1);
        // Moving up at a constant speed
        this.y = this.y - 1 + random(-1, 1);


        //don't leave the screen up
        if (this.y <= 0) {
            this.y = 0;
        }

        // Reset to the bottom
       // if (this.y < 0) {
          //  this.y = height;
       // }
    }
}