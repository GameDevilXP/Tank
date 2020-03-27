class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }

    this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
    this.height = 50;
    this.image = loadImage("assets/canonBall.png");
    World.add(world, this.body);

  };

  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x,pos.y);
    fill(76,93,45);
    strokeWeight = 3;
    stroke(190,190,67);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  };
};
