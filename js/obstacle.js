class Obstacle {
  constructor(img) {
    this.height = 50;
    this.width = 50;
    this.x = width;
    this.y = (Math.random() * height) / 1.5;
    this.image = img;
  }

  //   define the collision function
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;
    console.log(obstacleX, obstacleY, playerX, playerY);

    if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
      return true;
    }
  }

  drawObstacle() {
    this.x -= 4;
    console.log("working?");
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
