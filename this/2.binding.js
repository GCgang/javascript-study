/**
 * this 바인딩
 * C++, C#, JAVA 대부분의 객체지향 프로그래밍 언어에서
 * 정적으로 인스턴스가 만들어지는 시점에 this가 결정되며
 * this는 항상 자신의 인스턴스 자체를 가리킨다
 * 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라진다
 * 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정된다
 */

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지 ${this.name}`);
    }
}

function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(`고양이 ${this.name}`);
    }
}

const dog = new Dog('🐶');
const cat = new Cat('🐱');

dog.printName(); // 강아지 🐶
cat.printName(); // 고양이 🐱

dog.printName = cat.printName;

dog.printName(); // 고양이 🐶 -> 강아지 오브젝트가 고양이를 출력함 
cat.printName(); // 고양이 🐱

function printOnMonitor(printName) {
    printName();
}

printOnMonitor(cat.printName); // 고양이 undefined