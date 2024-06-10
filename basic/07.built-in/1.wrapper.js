// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시타입
console.log(number); // 123
console.log(typeof number); // number type
// number 원시타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString()); // 123
console.log(typeof number.toString()); // string type


const text = 'text'; // string 원시타입
console.log(text); // text
console.log(typeof text); // string type

console.log(text.length); // 4 String 객체로 감싸짐 
console.log(typeof text.length); // number  