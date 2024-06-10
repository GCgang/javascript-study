// 옵셔널 체이닝 연산자(Optional Chaining Operator)
// ES11 (ECMAScript 2020)
// ?
// null 또는 undefined 확인할 때
let obj1 = { name: '🦮', owner: { name: 'hj' } };
function printName(obj1) {
    const ownerName = obj1 && obj1.owner && obj1.owner.name;
    console.log(ownerName);
}
printName(obj1); // hj

// ? 사용
let obj2 = { name: '🦮', owner: { name: 'hj' } };
function printName(obj2) {
    const ownerName = obj2?.owner?.name;
    console.log(ownerName);
}
printName(obj2); // hj