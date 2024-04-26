// 원시타입(primitive)은 값이 복사되어 전달된다 
// copy by value
let a = 1;
let b = a; // 1
b = 2;

console.log(a); // 1
console.log(b); // 2

// 객체타입(object)은 참조값(메모리주소, 레퍼런스)가 복사되어 전달된다
// copy by reference
let apple = {
    name: "사과",
    color: "red",
};

let orange = apple;
orange.name = "orange";

console.log(apple.name); // orange
console.log(apple.color); // red

console.log(orange.name); // orange
console.log(orange.color); // red 