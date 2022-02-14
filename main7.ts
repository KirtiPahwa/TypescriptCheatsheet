// same  code in cleaner way
class Animal {
  constructor(private _x?: number, private _y?: number) {}
  draw() {
    console.log("X: " + this._x + ",Y: " + this._y);
  }
  get x() {
    return this._x;
  }
  set x(value:number) {
    if (value < 0) throw new Error("Value cannot be less than 0. ");
    this._x = value;
  }
//   getX(){  //user defined getter function
//       return this._x;
//   }
}
let animal = new Animal(1, 2);
let x=animal.x;   //using builtin getter method
animal.x=2;  //using builtin setter method
animal.draw();

