// 반복문 Loop Statement

// for(변수선언; 조건; 증감식) { 코드 블럭 }
// 실행 순서
/**
 * 1. 변수선언문
 * 2. 조건식의 값이 참인경우, { } 코드블럭 실행
 * 3. 증감식 실행
 * 4. 조건식이 거짓이 될때까지 2번과 3번 반복
 */

// for (;;) {} 무한루프

let str = '';

for (let i = 0; i < 9; i++) {
    str = str + i;
}
console.log(str); // 012345678


// 반복문 제어 continue, break
for (let i = 0; i < 10; ++i)
{
    if (i < 5)
        continue;
    if (i == 9) {
        console.log('i == 9 다!');
        break;
    }
    console.log(i);
}

// for in
const obj = {
    name: 'hj',
    age: 100,
};

for (const key in obj)
{
    console.log(`key = ${key} value = ${obj[key]}`);
}

// for of
const array = ['a', 'b', 'c', [1, 2, 3]];

for (element of array)
    console.log(element); // a b c [1, 2, 3]