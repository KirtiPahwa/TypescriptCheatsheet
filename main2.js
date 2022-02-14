// // Types in Typescript
// var count = 5; // its type is number now
// // count ='a';   //we get compile error because type of count is not same as its type in next line . But javascipt will not give us any error because there are no types in javascipt
// var a; //its types is any .. Now anything can be assigned to it
// a = 1;
// a = true;
// a = 'a';
// var b;
// // b='kirit';   //can't assign string to a number variable   
// var c;
// var d;
// var e;
// var f;
// var g = [1, 2, 3];
// var h = [1, true, 'a', false];
// var colorRed = 0;
// var colorGreen = 1;
// var colorBlue = 2;
// var Color;
// (function (Color) {     //enum is difficult in javasript to make but cleaner in typescript
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 3] = "Blue";
//     Color[Color["Purple"] = 2] = "Purple";
// })(Color || (Color = {}));
// ;

// var backgroundColor = Color.Blue; //Its intelligence gives us tooltip  and no need to remember 
// console.log(backgroundColor);