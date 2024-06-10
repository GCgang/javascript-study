'use strict';

/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - node: 모듈
 */

console.log(this) // {}
const x = 0;
module.exports.x = x;
console.log(this) // { x: 0 }
console.log(globalThis); // <ref *1> Object [global] { ... }

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */

function fun () {
    console.log(this);
}

fun(); // undefined

/**
 * 생성자 함수 또는 클래스에서의 this
 * 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(this.name);
    }
}

const dog = new Dog('멍멍');
console.log(dog.name); // 멍멍
dog.printName(); // 멍멍

class Cat {
    constructor(name) {
        this.name = name;
    }
    printName () {
        console.log(this.name);
    }
}

const cat = new Cat('야옹');
console.log(cat.name);
cat.printName();