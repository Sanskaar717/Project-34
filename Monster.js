class Monster{
    constructor(x,y){
        var options = {
            isStatic : true
        }

        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.image = loadImage("Images/Monster-01.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,200,200);
        pop();
    }
}