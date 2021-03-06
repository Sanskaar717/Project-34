class Block{
    constructor(x,y){
        var rest = {
            restitution : 0.2,
            friction : 5
        }

        this.body = Bodies.rectangle(x,y,50,50,rest);
        this.width = 50;
        this.height = 50;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        stroke("black");
        strokeWeight(4);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}