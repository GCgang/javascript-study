
// 객체 데이터 접근시 유의사항
let person = {
	name: 'hj',
	age: 100,
};

// 코딩하는 시점에, 정적으로 접근이 확정될 때 사용
console.log(person.name); // hj
console.log(person.age); // 100

// 동적으로 속성에 접근하고 싶을때 대괄효 표기법 사용
function getValue(person, key) {
	return person[key];
}

console.log(getValue(person, 'name')); // hj

function addKey(person, key, value) {
	person[key] = value;
}

addKey(person, 'job', 'ceo');
console.log(person); // { name: 'hj', age: 100, job: 'ceo' }
