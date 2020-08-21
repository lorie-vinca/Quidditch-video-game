class Player {
  constructor() {
    // set the height, the initial location + the jump controls for the player
    this.height = 100;
    this.width = 100;
    this.x = 0;
    this.y = height - this.height;
    this.gravity = 0.4;
    this.velocity = 0;

    this.image;
  }

  drawPlayer() {
    // draw the player + jump logic with velocity

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }

    image(this.image, this.x, this.y, this.height, this.width);
  }

  // add a jump function
  jump() {
    console.log("this will be the jump");
    if (this.y === height - this.height) {
      this.velocity = -10;
    }
  }
}
