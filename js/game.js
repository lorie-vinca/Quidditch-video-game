class Game {
  constructor() {
    // define the empty array for the coins here
    this.obstacles = [];
  }
  preloadGame() {
    this.backgroundImgs = [
      {
        src: loadImage("../assets/background/plx-1.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("../assets/background/plx-2.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("../assets/background/plx-3.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("../assets/background/plx-4.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("../assets/background/plx-5.png"),
        x: 0,
        speed: 4,
      },
    ];
    this.playerImg = loadImage("./assets/player/bb8.gif");
    // load in images/gifs here
    this.coinImg = loadImage("./assets/coins/tile000.png");
  }
  setupGame() {
    // this.obstacle = new Obstacle();
    // this.obstacle.image = this.coinImg;
    this.background = new Background();
    this.background.images = this.backgroundImgs;
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    this.player = new Player();
    this.player.image = this.playerImg;
  }

  drawGame() {
    clear();
    this.background.drawBackground();
    this.player.drawPlayer();

    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacle(this.coinImg));
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
    });
    // this.obstacle.drawObstacle();
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player)) {
        return false;
      } else {
        return true;
      }
    });
  }
}
