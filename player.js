class Player {
  constructor() {
    this.size = 100;
    this.x = 50;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.5;
  }
  show() {
    image(playerimg, this.x, this.y, this.size, this.size);
  }
  jump() {
    if (this.y === height - this.size) this.velocityY = -27;
  }
  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(ob) {
    let iscolliding = collideRectRect(
      this.x,
      this.y,
      this.size - 60,
      this.size - 60,
      ob.x,
      ob.y,
      ob.size - 60,
      ob.size - 60
    );
    return iscolliding;
  }
}
