class DustBin{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width
       this.height=height
       
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        fill(255)
        rect(this.body.position.x,this.position.y,this.width,this.height)
    }
}