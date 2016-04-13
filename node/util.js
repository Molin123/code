var util = require('util');

function Base() {
    this.name = 'molin';
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    }
}
Base.prototype.showName = function() {
    console.log('Name: ' + this.name);
}

function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);

var objBase = new Base();
console.log(objBase); //Base { name: 'molin', sayHello: [Function] }
objBase.showName();
objBase.sayHello();

var objSub = new Sub();
objSub.showName();
console.log(objSub); //Sub {name: 'sub'}
//objSub.sayHello();
