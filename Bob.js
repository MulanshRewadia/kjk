class Bob 
{
 constructor(x,y)
 {

  
   
        var options = {
            restitution : 0.3,
            isStatic : true,
            friction : 0.5
    }
    
        this.body = Bodies.circle(x,y,50,options);
        this.r =50;
        World.add(world,this.body);
        
    
 
}
        
        
        display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       ellipseMode(RADIUS);
       fill("pink");
       ellipse(pos.x,pos.y,this.r);
        pop();
        }

    
}