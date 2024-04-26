// 다양한 데이터들을 넣을 수 있는 객체
let apple = {
	name:'apple',
	color:'red',
	count:100,
	isSpoiled:false,
	display:'🍎',
}
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

let orange = {
    name: '오렌지',
    color: 'orange',
    display: '🍊',
};
console.log(orange);


// 선언 방법
let obj1 = new Object(); // 생성자 호출
let obj2 = {}; // 객체 리터럴 방식

let person = {
	name:'hj',
	age:27,
	status:function(activity){
		console.log(`${activity} 중 입니다.`);
    }
}

// . 표기법으로 value에 접근
console.log(person.name);
console.log(person.age);
person.status('js 공부');

// object의 value로 함수가 들어간 경우
person.status('js 공부') // js 공 중 입니다.

// [] 표기법으로 value에 접근
console.log(person['name']);
console.log(person['age']);

// property(속성) 제거
delete person.age;
console.log(person.age); // undefined
console.log(person); // { name: 'hj', status: [Function: status] }

// Object 메서드 사용하여 key, value, key + value 배열 출력
console.log(Object.keys(person)); // [ 'name', 'status' ]
console.log(Object.values(person)); //[ 'hj', [Function: status] ]
console.log(Object.entries(person)); // [ [ 'name', 'hj' ], [ 'status', [Function: status] ] ]