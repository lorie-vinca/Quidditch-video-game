class Game {
  constructor() {
    // define the empty array for the bludgers here
    this.obstacles = [];
    this.gameLevel = 0;
  }
  preloadGame() {
    this.backgroundImgs = [{
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
      {
        src: loadImage("../assets/background/plx-6.png"),
        x: 0,
        speed: 4,
      },

      {
        src: loadImage("../assets/background/plx-7.png"),
        x: 0,
        speed: 4,
      }

    ];
    this.playerImg = loadImage("/assets/player/Harry_Potter_Quidditch-removebg-preview.png");
    // load in images/gifs here
    this.bludgerImg = loadImage("/assets/bludger/bludger.png");
    this.startImg = loadImage("/assets/Levels/startingpagenew.png")
    this.treasureImg = loadImage("/assets/treasure/snitch.png");
    this.gameOverImg = loadImage("/assets/Levels/Gameover.png");
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
    this.player.gameOverImg = this.gameOverImg
    this.player.startImg = this.startImg
    this.treasure = new Treasure(this.treasureImg);
  }

  drawGame() {

    // if (this.player.health > 0) {

    //   image(this.gameOverImg, 100, 100, 100, 100)
    //   this.gameLevel == 2
    //   console.log("game over", this.gameLevel);
    // }
    if (this.gameLevel === 0) {
      // game start

      clear();

      lifeCounter.parentNode.style.visibility = "hidden"
      image(this.startImg, 0, 0, width, height);

      //image(this.startImg, 180, 250);

    } else if (this.gameLevel === 1) {

      lifeCounter.parentNode.style.visibility = "visible"

      clear();
      //  call the draw functions for the player + the background
      this.background.drawBackground();
      this.player.drawPlayer();

      if (frameCount % 70 === 0) {
        this.obstacles.push(new Obstacle(this.bludgerImg));
      }

      // this.obstacle.drawObstacle();
      // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it

      this.obstacles.forEach((obstacle) => {
        obstacle.drawObstacle();
      });



      this.obstacles = this.obstacles.filter((obstacle) => {
        if (obstacle.collision(this.player)) {
          return false;
        } else {
          return true;
        }
      });

      this.treasure.drawTreasure();


      if (this.treasure.collisionSnitch(this.player)) {
        return false;
      } else {
        return true;

      }



    } else if (this.gameLevel == 2) {
      clear()
      lifeCounter.parentNode.style.visibility = "hidden"
      image(this.gameOverImg, 0, 0, width, height);
      frameRate(0)
    }

  }
  isGameFinished() {
    if (game.player.health <= 0) {
      this.gameLevel = 2;
    }

  }
}