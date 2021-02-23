class Ground{
    constructor(x,y,height,width){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("black");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height); 
    }
}