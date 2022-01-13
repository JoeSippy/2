class Board {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      frictionAir:0.1
    };

    this.body = Bodies.rectangle(x, y, width-10, height-10, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/board.png");
    
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.y, pos.x);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width-100, this.height-100);
    pop();
  }
}
