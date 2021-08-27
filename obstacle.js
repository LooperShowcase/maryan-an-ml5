class Obstacle {
  constructor() {
    this.size = 100;
    this.x = width;
    this.y = height - this.size / 1.5;
    //this.option = random(1);
  }
  show() {
    //if (this.option > 0.5) {
    image(obsimg, this.x, this.y, this.size, this.size);
    //} else {
    // image(obs3, this.x, this.y, this.size - 80, this.size - 30);
    //}
  }
  move() {
    this.x -= 6;
  }
}
