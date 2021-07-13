class Particle{

constructor(){
var options={
    restitution: 1,
    friction: 0,
    isStatic:false

}
this.body=Bodies.circle(random(0,400),random(0,500),10,options)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body);

}
display(){
ellipseMode(RADIUS);
push ();
translate (this.body.position.x,this.body.position.y);
this.color=color(random(0,255),random(0,255),random(0,255))
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
pop ();







}



























}