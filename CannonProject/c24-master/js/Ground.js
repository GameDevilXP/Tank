class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
     
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  };

  display(){
    var pos = this.body.position
    rectMode(CENTER);
    strokeWeight = 3;
    stroke(233,123,22);
    fill(123,239,47);
    rect(pos.x,pos.y,this.width,this.height);
  }
}
