const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(1100, 700);
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
}
