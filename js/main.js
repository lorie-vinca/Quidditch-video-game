const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(900, 500);
  game.setupGame();
}

function draw() {
  game.drawGame();
}

// Have to add others keys (go up and go down)
function keyPressed() {

  if (keyCode === 32) {
    game.player.jump();
  }

  if (keyCode === 39) {
    game.player.goForward();
  }

  if (keyCode === 37) {
    game.player.goBack();
  }

  if (keyCode === 13 && game.gameLevel === 0) {
    game.gameLevel = 1;
  }

  if (keyCode === 13 && game.gameLevel == 2) {
    game.player.health = 4
    game.gameLevel = 1;


    if (keyCode === 13 && game.gameLevel == 3) {
      game.player.health = 4
      game.gameLevel = 1;

  }

 

}
}