let log=function (message){
    console.log(message);
}

// let doLog=(message)=>{
//     console.log(message);
// }

// let doLog=()=>console.log("d");

let doLog=(message)=>console.log(message);

let drawPoint =(x,y)=>{
}
drawPoint(1,2);

let drawPoint1 =(point)=>{  //point parameter is any and can take any object, string,number,etc.
    console.log(point);
}
drawPoint1({
    x:1,
    y:2
})

//Problem: This below parameter can break the function algorithm as drawpoint1 is expecting x,y(2 parameters)
drawPoint1({
    name:'Mosh'
})

//Solution: So to resolve above problem using typescript use types of parameters
// let drawPoint2=(point:number)=>{    //taking single number as a parameter
//     // ..
// }

// drawPoint2(3);

//Solution1:
let drawPoint2 = (point: {x: number , y: number}) =>{    
    // function  will only accept parameters with object of length 2 and both of elements should number a
    // ..
    console.log(point)
}

drawPoint2({
    x:1,
    y:2
});


//Solution2:
interface Point{   //Use capitalise convention for interfaces
    x:number,
    y:number
}

let drawPoint3=(point: Point)=>{
    // ..
}

