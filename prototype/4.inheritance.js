// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal (name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

Animal.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
}
console.log(Animal.prototype); // { printName: [Function (anonymous)] }

function Dog (name, emoji, owner) {
    Animal.call(this, name, emoji);
    this.owner = owner;
}

console.log(Dog.prototype); // {}
Dog.prototype = Object.create(Animal.prototype);
const  dog = new Dog('멍멍', '🐶', {name: '현준'});
console.log(Dog.prototype); // Animal {}
dog.printName(); // 멍멍 🐶

Dog.prototype.play = function () {
    console.log('놀자');
}
console.log(Dog.prototype); // Animal { play: [Function (anonymous)] }
dog.play(); // 놀자

function Tiger(name, emoji, owner) {
    Animal.call(this, name, emoji);
    this.owner = owner;
}

console.log(Tiger.prototype); // {}
Tiger.prototype = Object.create(Animal.prototype);
const tiger = new Tiger('어흥', '🐯', {name: '현준'})
console.log(Tiger.prototype); // Animal {}
tiger.printName(); // 어흥 🐯

Tiger.prototype.hunt = function () {
    console.log('사냥하자');
}
console.log(Tiger.prototype); // Animal { hunt: [Function (anonymous)] }
tiger.hunt(); // 사냥하자

console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Tiger); // false

console.log(tiger instanceof Animal); // true
console.log(tiger instanceof Tiger); // true
console.log(tiger instanceof Dog); // false