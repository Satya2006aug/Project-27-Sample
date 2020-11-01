class Bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.x=x;
      this.y=y;
      this.r=radius;
      
      World.add(world, this.body);
    }
    display(){
      var paperpos=this.body.position;
      push();
      translate(paperpos.x, paperpos.y);
      fill("pink");
      ellipse(0,0,this.r);
      pop();
      
    }
  };