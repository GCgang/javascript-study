// 논리 연산자 (Logical operators)

// AND (&&)
let a1 = true && true; // t && t는 true 반환
console.log(a1);

let a2 = true && false; // t && f는 false 반환
console.log(a2);

let a3 = false && true; // f && t는 false 반환
console.log(a3);

let a4 = false && 3 == 4; // f && f는 false 반환
console.log(a4);

let a5 = "Cat" && "Dog"; // t && t는 Dog 반환
console.log(a5);

let a6 = false && "Cat"; // f && t는 false 반환
console.log(a6);

let a7 = "Cat" && false; // t && f는 false 반환
console.log(a7);

// OR (||)
let o1 = true || true; // t || t는 true 반환
console.log(o1);

let o2 = false || true; // f || t는 true 반환
console.log(o2);

let o3 = true || false; // t || f는 true 반환
console.log(o3);

let o4 = false || 3 == 4; // f || f는 false 반환
console.log(o4);

let o5 = "Cat" || "Dog"; // t || t는 Cat 반환
console.log(o5);

let o6 = false || "Cat"; // f || t는 Cat 반환
console.log(o6);

let o7 = "Cat" || false; // t || f는 Cat 반환
console.log(o7);


// NOT (!)
let n1 = !true; // !t는 false 반환
console.log(n1);

let n2 = !false; // !f는 true 반환
console.log(n2);

let n3 = !"Cat"; // !t는 false 반환
console.log(n3);

let n4 = !""; // !f는 true 반환
console.log(n4);