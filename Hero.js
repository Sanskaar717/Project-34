class Hero{
    constructor(x,y){
        var options = {
            isStatic : true
        }

        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        this.image = loadImage("Images/Superhero-01.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,700,-200);
    }
}