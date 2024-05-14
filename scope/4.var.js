// var 사용 ❌

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
// 선언인지, 재할당인지 구분하기 어렵다
something = '💩';

// 2. 중복 선언이 가능하다
// 실수, 에러가 쉽게 발생할 수 있음
var poo = '💩';
var poo = '💩';

// 3. 블록 레벨 스코프가 적용 안됨
var poo = '똥';
{
	var poo = '💩';
}
console.log(poo); '💩'

// 4. 함수 레벨 스코프만 지원 됨
function example() {
	var dog = '강아지'
}
console.log(dog) // error