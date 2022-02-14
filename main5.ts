// // COHESION: It means related things should be go together . Related things should be part of one unit only. No two separate function should be there for eg.,
//  Since these concepts are highly related they should be part of one unit. In oops - we call that unit - a Class
// interface PointA{    //point  object
//     x:number,
//     y:number
// }

// let drawPoint4=(point1: PointA)=>{
//     // ...
// }
// let getDistance=(point1:PointA,point2:PointA)=>{   //Since this is violation of cohesion i.e., we have 2 functions hanging , separate from the point object . Since these concepts are highly related they should be part of one unit. In oops - we call that unit - a Class
//     // ...
// }

// We cann't put these 2 function inside the interface .Because interfaces are purily for decorition not for implementation

// Solution1:
// interface PointB{
//     x:number,
//     y:number,
//     draw:()=>void   //dont put point as parameter for x and y . This function directly access the property x,y. But this function doesnot have implementation .It just declares the object .But in classes we can implement the function
// }



// Solution2: Class --> Groups variable(properties) and functions(methods) that are highly related
class Point{
    x:number;
    y:number;
    // constructor(x:number,y:number){
    //     this.x=x;
    //     this.y=y;
    // }
    constructor(x?:number,y?:number){  //? tells that x and y are optional
        this.x=x;
        this.y=y;
    }
    draw(){
        //... we can implement the function inside the class
        console.log('X:' +this.x+', Y :'+this.y);
    }
    getDistance(another:Point){  // there are 2 parameters first is default point of x and y and second is another
        //...
    }   
}

// Object of point class
let point=new Point(1,2); //in case of constructor
let point1=new Point(1); //in case of optional parameter constructor




// let point=new Point(); //if there is no constructor
// point.x=2;  
// point.y=4;


point.draw();
// point.getDistance({x:4,y:9});
