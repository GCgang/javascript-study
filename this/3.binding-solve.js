function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지 ${this.name}`);
    }
}

function Cat(name) {
    this.name = name;

    // 1. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억한다
    // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킨다
    this.printName = () => {
        console.log(`고양이 ${this.name}`);
    }

    // 2. bind 함수를 이용해서 수동적으로 바인딩 해주기
    // this.printName = this.printName.bind(this)
}

const dog = new Dog('🐶');
const cat = new Cat('🐱');

dog.printName(); // 강아지 🐶
cat.printName(); // 고양이 🐱

dog.printName = cat.printName;

dog.printName(); // 고양이 🐱
cat.printName(); // 고양이 🐱

function printOnMonitor(printName) {
    printName();
}

printOnMonitor(cat.printName); // 고양이 🐱