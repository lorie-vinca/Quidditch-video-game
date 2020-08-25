class Player {
  constructor() {
    // set the height, the initial location + the jump controls for the player
    this.height = 200;
    this.width = 200;
    this.x = 0;
    this.y = 150;
    this.gravity = 0.4;
    this.velocity = 0;
    this.health = 4;  

    this.image;
  }

  drawPlayer() {
    // draw the player + jump logic with velocity

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y >= height - this.height) {
      this.y = height - this.height;
    }

    if (this.y <= 0) {
      this.y = 0;
     }


      if (this.x >= width-this.width) {
        this.x = width - this.width;

      }

        if (this.x <= 0) {
          this.x = 0;
        
      }
    

    image(this.image, this.x, this.y, this.height, this.width);
  
}

  // Move functions for player

  jump() {
    console.log("this will be the jump");
    this.velocity = -10;
    //  // if (this.y === height - this.height) {(keep it on the ground)
    //     
    //   }
  }

  goForward() {
    console.log("this will be going forward");
    this.x += 100;

   
    //  // if (this.y === height - this.height) {(keep it on the ground)
    //     
    //   }
  }


  goBack() {
    console.log("this will be going forward");
    this.x -= 100;
    //  // if (this.y === height - this.height) {(keep it on the ground)
    //     
    //   }
  }



  receiveDamage() {
    this.health -= 1;
    console.log(this.health);
    return this.health;
  }

  catchTreasure() {

  }

}