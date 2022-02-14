var log = function (message) {
    console.log(message);
};
// let doLog=(message)=>{
//     console.log(message);
// }
// let doLog=()=>console.log("d");
var doLog = function (message) { return console.log(message); };
var drawPoint = function (x, y) {
};
drawPoint(1, 2);
var drawPoint1 = function (point) {
    console.log(point);
};
drawPoint1({
    x: 1,
    y: 2
});
//Problem: This below parameter can break the function algorithm as drawpoint1 is expecting x,y(2 parameters)
drawPoint1({
    name: 'Mosh'
});
//Solution: So to resolve above problem using typescript use types of parameters
// let drawPoint2=(point:number)=>{    //taking single number as a parameter
//     // ..
// }
// drawPoint2(3);
//Solution1:
var drawPoint2 = function (point) {
    // function  will only accept parameters with object of length 2 and both of elements should number a
    // ..
    console.log(point);
};
drawPoint2({
    x: 1,
    y: 2
});
var drawPoint3 = function (point) {
    // ..
};
