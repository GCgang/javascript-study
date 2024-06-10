// 클래스를 베이스로한 객체지향 프로그래밍
class Animal {
    static totalAnimals = 0;

    constructor(name, emoji) {
        this.name = name;
        this.emoji = emoji;
        Animal.totalAnimals++;
    }

    printName () {
        console.log(`${this.name} ${this.emoji}`);
    }

    speak () {
        console.log('소리');
    }

    static displayTotalAnimals() {
        console.log(`${Animal.totalAnimals}`);
    }
};

class Dog extends Animal {
    constructor(name, emoji, owner) {
        super(name, emoji);
        this.owner = owner;
    }

    speak () {
        console.log(`${this.name} bark bark`);
    }
};

class Tiger extends Animal {
    constructor(name, emoji) {
        super(name, emoji);
    }
    
    speak () {
        console.log(`${this.name} 어흥 어흥`);
    }

    hunt () {
        console.log(`${this.name} 사냥 사냥`);
    }
}

const dog = new Dog('멍멍', '🐶', {name: '현준'});
console.log(dog); // Dog { name: '멍멍', emoji: '🐶', owner: { name: '현준' } }
dog.printName(); // 멍멍 🐶
dog.speak(); // 멍멍 bark bark

const tiger = new Tiger('호랑', '🐯');
console.log(tiger); //Tiger { name: '호랑', emoji: '🐯', speak: [Function: speak] }
tiger.printName(); //호랑 🐯
tiger.speak(); // 호랑 어흥 어흥
tiger.hunt(); // 호랑 사냥 사냥

console.log(Animal.totalAnimals); // 2
Animal.displayTotalAnimals(); // 2

console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(dog instanceof Tiger); // false

console.log(tiger instanceof Animal); // true
console.log(tiger instanceof Tiger); // true
console.log(tiger instanceof Dog); // false