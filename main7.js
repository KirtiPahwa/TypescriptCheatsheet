// same  code in cleaner way
var Animal = /** @class */ (function () {
    function Animal(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Animal.prototype.draw = function () {
        console.log("X: " + this._x + ",Y: " + this._y);
    };
    Object.defineProperty(Animal.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value cannot be less than 0. ");
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var animal = new Animal(1, 2);
var x = animal.x; //using builtin getter method
animal.x = 2; //using builtin setter method
animal.draw();
