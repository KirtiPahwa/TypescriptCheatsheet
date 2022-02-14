// MODULES 
// In typescript , we have concept called modules . 
// Each file is accessible anywhere.
// In typescript , each file defines its own scope. You can use other files variables by just importing 

export class Point{
    constructor(private x?:number){
    }
    draw(){
        console.log(this.x);
    }
}


// wwe will import this in main9.ts