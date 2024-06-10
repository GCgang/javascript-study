// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자!');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자아~!');
//   }
// }


class Animal {
    constructor(color) {
        this.color = color;
    }

    eat() {
        console.log('먹는다');
    }

    speak() {
        console.log('짖는다');
    }

    sleep() {
        console.log('잔다');
    }
}


class Tiger extends Animal {}
const tiger = new Tiger('노랑');
console.log(tiger); // Tiger { color: '노랑' }
tiger.sleep(); // 잔다
tiger.eat(); // 먹는다
tiger.speak(); // 짖는다

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }  
    play() {
        console.log('논다');
    }

    // 오버라이딩 overriding
    eat() {
        super.eat();
        console.log('강아지가 먹는다');
    }

    speak() {
        console.log('월 월');
    }
}

const dog = new Dog('흰둥', '현준');
console.log(dog); // Dog { color: '흰둥', ownerName: '현준' }
dog.sleep(); // 잔다
dog.eat(); // 먹는다 강아지가 먹는다
dog.play(); // 논다
dog.speak(); // 월 월