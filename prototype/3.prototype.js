// const dog1 = { name: '강', emoji: '🐶' };
// const dog2 = { name: '아지', emoji: '🐕' };

function Dog(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    // 인스턴스 레벨의 함수
    this.printName = () => {
        console.log(`${this.name} ${this.emoji}`);
    };
}

const dog1 = new Dog('강', '🐶');
const dog2 = new Dog('아지', '🐕');
console.log(dog1); // Dog { name: '강', emoji: '🐶', printName: [Function (anonymous)] }
console.log(dog2); // Dog { name: '아지', emoji: '🐕', printName: [Function (anonymous)] }


function Cat(name, emoji) {
    this.name = name;
    this.emoji = emoji;
}

// 프로토타입 레벨의 함수
Cat.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
}
const cat1 = new Cat('고', '🐱');
const cat2 = new Cat('양이', '🐈');
console.log(cat1); // Cat { name: '고', emoji: '🐱' }
console.log(cat2); // Cat { name: '양이', emoji: '🐈' }
cat1.printName(); // 고 🐱
cat2.printName();  // 양이 🐈

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면(오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 된다)
cat1.printName = function () {
    console.log('안녕');
}
cat1.printName(); // 안녕

// 정적(static)레벨
Cat.hello = () => {
    console.log('hihi');
}
Cat.MAX_AGE = 100;
Cat.hello(); // hihi
console.log(Cat.MAX_AGE); // 100