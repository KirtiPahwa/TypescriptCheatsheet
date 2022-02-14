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
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //... we can implement the function inside the class
        console.log('X:' + this.x + ', Y :' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
// Object of point class
var point = new Point();
point.draw();
// point.getDistance({x:4,y:9});
