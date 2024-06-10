// 오브젝트는 단 하나의 prototype을 가리킬 수 있다
// 하지만 여러개의 함수들을 상속하고 싶을 때 Mixin을 사용하면 된다

const play = {
    play: function () {
        console.log(`${this.name} 놀자`);
    },
}

const sleep = {
    sleep: function () {
        console.log(`${this.name} 자자`);
    },
};

function Dog(name) {
    this.name = name;
}

const dog = new Dog('멍멍');
Object.assign(Dog.prototype, play, sleep);
console.log(dog.name); //  멍멍
dog.play(); // 멍멍 놀자
dog.sleep(); // 멍멍 자자

class Animal {};
class Tiger extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}

Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥');
console.log(tiger.name); // 어흥
tiger.play(); // 어흥 놀자
tiger.sleep(); // 어흥 자자


function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources);
}

const canFly = {
    fly() {
        console.log(`${this.name} 날다`);
    }
}

const canSwim = {
    swim() {
        console.log(`${this.name} 수영`);
    }
}

const  canWalk = {
    walk() {
        console.log(`${this.name} 걷다`);
    }
}

class Bird extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
}

const bird = new Bird('짹짹');
mixin(Bird, canFly, canSwim, canWalk);
bird.fly(); // 짹짹 날다
bird.swim(); // 짹짹 수영
bird.walk(); // 짹짹 걷다