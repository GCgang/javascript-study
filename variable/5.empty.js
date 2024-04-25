// empty 타입
// null, undefined
let variable;
console.log(variable);

variable = null;
console.log(variable);

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태


// 객체에 존재하지 않는 속성에 접근할 떄
var obj = {
    a: "a",
    b: "b"
};
console.log(obj.a); // a
console.log(obj.b); // b
console.log(obj.c); // undefined


// return이 없는 함수를 호출할 떄
function fun(a, b) {
    let ret = a + b;
}
console.log(fun(1, 2)); // undefined

// 빈 배열 할당
arr = new Array(3);
console.log(arr); // 3 empty item

// type 확인
console.log(typeof undefined); // undefined
console.log(typeof null); // object