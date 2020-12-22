class Dustbin{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.7,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill("white");
    rect(0, 0, this.width, this.height);
    pop();
  }
}