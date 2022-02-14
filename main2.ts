// Types in Typescript
let count = 5;  // its type is number now
// count ='a';   //we get compile error because type of count is not same as its type in next line . But javascipt will not give us any error because there are no types in javascipt

let a;  //its types is any .. Now anything can be assigned to it
a=1;
a=true;
a='a';

let b:number;
// b='kirit';   //can't assign string to a number variable   

var c:boolean;
let d:any;
let e:number;
let f:string;
let g:number[]=[1,2,3];  
let h:any[] = [1,true,'a',false];


const colorRed=0;
const colorGreen=1;
const colorBlue=2;
 
//enum is difficult in javasript to make but cleaner in typescript
enum Color{Red =0,Green=1,Blue=3,Purple=2};
let backgroundColor=Color.Blue;  //Its intelligence gives us tooltip  and no need to remember 
