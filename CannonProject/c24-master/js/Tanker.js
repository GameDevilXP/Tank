class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }

     this.body = Bodies.rectangle(x,y,width,height);
     this.width = width;
     this.height = height;
     //this.image = loadImage("assets/");
    };

    display(){
      var pos = this.body.position;
      strokeWeight = 3;
      push();
      translate();
      stroke(100,168,199);
      fill(231,20,188);
      rectMode(CENTER);
      pop();
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    };
}
