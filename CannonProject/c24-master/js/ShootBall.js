class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("assets/");

    }

    attach(body){};

    shoot(){};

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        strokeWeight = 3;
        push();
        stroke(89,106,249);
        fill(80,70,250);
        rotate(angle);
        translate(pos.x,pos.y);
        pop();
        
    }

}
