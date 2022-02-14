// By default all the members are public


class Dot{
    private x:number;
    private y:number;
    constructor(x?:number,y?:number){
        this.x=x;
        this.y=y
    }
     draw(){
        console.log('X: '+this.x+',Y: '+this.y);
    }
}
let dot=new Dot(1,2);
// dot.x=3; //x is not accessible outside the class
// dot.y=3;
dot.draw();
