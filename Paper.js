class Paper{
  constructor(x, y, radius) {
    var options = {
        isStatic:false,
        'restitution':0.8,
        'friction':1.5,
        'density':1.0
    }
    this.body = Bodies.circle(this.x, this.y, radius/2, options);
    this.radius = radius;
    this.x = x;
    this.y = y;
    
    World.add(world, this.body);
  }
  display(){
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    strokeWheight(3);
    fill("purple");
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }
}