class Game {
  constructor() {
    // define the empty array for the bludgers here
    this.obstacles = [];
    this.gameLevel = 0;
    this.gameWin = false
  }
  preloadGame() {
    this.backgroundImgs = [{
        src: loadImage("assets/background/plx-1.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("assets/background/plx-2.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("assets/background/plx-3.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("assets/background/plx-4.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("assets/background/plx-5.png"),
        x: 0,
        speed: 4,
      },
      {
        src: loadImage("assets/background/plx-6.png"),
        x: 0,
        speed: 4,
      },

      {
        src: loadImage("assets/background/plx-7.png"),
        x: 0,
        speed: 4,
      }

    ];
    this.playerImg = loadImage("assets/player/Harry_Potter_Quidditch-removebg-preview.png");
    // load in images/gifs here
    this.bludgerImg = loadImage("assets/bludger/bludger.png");
    this.startImg = loadImage("assets/Levels/New-Project-2.png")
    this.treasureImg = loadImage("assets/treasure/new-snitch.png");
    this.gameOverImg = loadImage("assets/Levels/Gameover.png");
    this.gameWiningImg = loadImage("assets/Levels/You-win-harry.png")
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
    this.player.gameOverImg = this.gameOverImg;
    this.player.startImg = this.startImg;
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
      lifeCounter.innerText = this.player.health
      clear();
      this.player.health == 2
      lifeCounter.parentNode.style.visibility = "hidden"
      image(this.startImg, 0, 0, width, height);

      //image(this.startImg, 180, 250);

    }

    if (this.gameLevel === 1) {
      lifeCounter.innerText = this.player.health
      lifeCounter.parentNode.style.visibility = "visible"
      lifeCounter.parentNode.style.visibility = "visible"

      clear();
      //  call the draw functions for the player + the background
      this.background.drawBackground();
      this.player.drawPlayer();

      if (frameCount % 50 === 0) {
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


      // this is checking if you win (catching the snitch)




    }

    if (this.gameLevel == 2) {
      lifeCounter.innerText = this.player.health
      clear()
      lifeCounter.parentNode.style.visibility = "hidden"
      this.player.health = 2;
      image(this.gameOverImg, 0, 0, width, height);
      this.player.x = 0;
      this.player.y = height - this.player.height;

    }

    if (this.treasure.collisionSnitch(this.player)) {
      game.gameLevel = 3;
    }

    if (this.gameLevel == 3) {
      clear()
      lifeCounter.parentNode.style.visibility = "hidden"
      image(this.gameWiningImg, 0, 0, width, height);
      this.player.x = 0;
      this.player.y = height - this.player.height;
      this.player.health = 2;
    }

  }
  isGameFinished() {
    if (game.player.health <= 0) {
      this.gameLevel = 2;
    }

  }
}