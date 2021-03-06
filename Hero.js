class Hero{
    constructor(x,y){
        var options = {
            isStatic : false
        }

        this.body = Bodies.circle(x,y,250,options);
        this.radius = 250;
        this.image = loadImage("Images/Superhero-01.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,700,200);
        pop();
    }
}