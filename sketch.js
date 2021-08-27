let player;
let obstacles = [];
let playerimg;
let obsimg;
let bg;
let wordClassifier;
let obs3;

function preload() {
  playerimg = loadImage("player.png");
  bg = loadImage("background.jpg");
  obsimg = loadImage("obstacle.png");
  obs3 = loadImage("obs2.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}
function setup() {
  createCanvas(800, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
function draw() {
  background(bg);
  player.show();
  player.move();
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("GAME OVER");
      noLoop();
      fill("yellow");
      stroke(10);
      textSize(30);
      text("GAME OVER score is " + frameCount, height / 2, width / 2 - 200);
    }
  }
}
