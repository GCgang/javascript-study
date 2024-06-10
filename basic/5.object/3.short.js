// 짧게 만들기
// key, value가 가리키는 변수가 같아서 생략이 가능하다
const x = 0;
const y = 0;
const coordinate = { x, y }; //{ x: x, y: y}; 

function makeObj(name, age) {
    return {
        name,
        age,
    };
    //return {
    //	name: name,
    //	age:, age,
    //};
};

console.log(coordinate); // { x: 0, y: 0 }
console.log(makeObj('hj', 100)); // { name: 'hj', age: 100 }