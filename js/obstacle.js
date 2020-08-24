class Obstacle {
  constructor(img) {
    this.height = 40;
    this.width = 40;
    this.x = width;
    this.y = (Math.random() * height);
    this.image = img;
    this.health = 4;
  }

  receiveDamage() {
    this.health -= 1;
    console.log(this.health);
    return this.health;
  }

  //   define the collision function
  collision(playerInfo) {
    let obstacleX = this.x + this.width / 2;
    let obstacleY = this.y + this.height / 2;
    let playerX = playerInfo.x + playerInfo.width / 2;
    let playerY = playerInfo.y + playerInfo.height / 2;
    // console.log(obstacleX, obstacleY, playerX, playerY);

    if (dist(obstacleX, obstacleY, playerX, playerY) < 50) {
      this.receiveDamage()
      return true;
    }
  }

  drawObstacle() {
    this.x -= 6;
    // console.log("these are the obstacles");
    image(this.image, this.x, this.y, this.width, this.height);
  }
}