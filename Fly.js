class Fly{

    constructor(bodyA,pointB){
        var con = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0,
            length : 300
          }

          this.pointB = pointB;
          this.sling = Constraint.create(con);
          World.add(myWorld,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    flying(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
         push(); 
         stroke("#3FE0D0");
         strokeWeight(0);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}