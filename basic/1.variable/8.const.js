// let 재할당 가능
let a = 1;
a = 2;

// const 재할당 불가능

// 1. 상수
const MAX_FRUITS = 5;
// 재할당 시도할경우 TypeError: Assignment to constant variabl
// MAX_FRUITS = 4;

// 2. 재할당 불가능한 상수변수 또는 변수
// 한번 할당 후 재할당이 불필요한 경우 let 보다는 const 사용
const apple = {
	name: 'apple',
	color: 'red',
	display: '🍎',
};
// 재할당 시도할경우 TypeError: Assignment to constant variabl
// apple = {};


// const로 사용했다는 것은 apple 가리키는 메모리셀에 재할당이 불가능한 것이라서 apple에는 다른 것을 담을 수 없지만
// apple이 가리키는 곳에 있는 데이터는 변경 가능하다
apple.color = 'green'
apple.display = '🍏' 
console.log(apple) // { name: 'apple', color: 'green', display: '🍏' }