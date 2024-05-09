// String
const str1 = 'Hello, world!';
const str2 = new String('Hello, world!');
const str3 = `str1 type: ${typeof str1}`;
const str4 = `str2 type: ${typeof str2}`;
console.log(str1); // Hello, world!
console.log(str2); // [String: 'Hello, world!']
console.log(str3); // str1 type: string
console.log(str4); // str2 type: object

// Static Methods
// 주어진 유니코드 포인트에 해당하는 문자 반환
console.log(String.fromCharCode(65)); // A

// fromCharCode 와 유사하지만 전체 유니코드 포인트 범위를 지원한다
console.log(String.fromCodePoint(0x1F600)); // 😀

//  탈출 문자(escape sequences)를 처리하지 않고 원시 문자열을 반환(템플릿 리터럴 함수)
const str5 = `hi\n`;
console.log(str5); // hi와 개행 출력
console.log(String.raw`hi\n`); // hi\n

// Instance Properties
// 문자열 길이 반환
const str6 = '123456789';
console.log(str6.length); // 9

// Instance Methods
// 지정한 인덱스 위치의 문자 반환
const str7 = 'Hello';
const str8 = ', world!';
console.log(str7.charAt(0)); // H
console.log(str7.charAt(1)); // e
console.log(str7.charAt(2)); // l

// 문자열 붙이기
const hello = str7.concat(str8);
console.log(hello); // Hello, world!

// 문자열에 특정 문자열이 포함되어 있는지 확인
console.log(hello.includes('Hello,')) // true

// 주어진 문자열과 일치하는 인덱스 반환
console.log(hello.indexOf('l')); // 2
console.log(hello.lastIndexOf('l')); // 10

// 문자열에 특정 부분을 추출하기
console.log(hello.slice(2)); // llo, world!
console.log(hello.slice(-2)); // d!
console.log(hello.slice(0, 5)); // Hello

// 주어진 인자로 문자열을 분해하여 배열로 반환
const fruits = 'apple, tomato, banana';
console.log(fruits.split(', ')); // [ 'apple', 'tomato', 'banana' ]
console.log(fruits.split(', ', 2)); // [ 'apple', 'tomato' ]

// 문자열의 특정부분 추출
console.log(hello.substring()); // Hello, world!
console.log(hello.substring(2)); // llo, world!
console.log(hello.substring(7, 13)); // world!


// 대문자로 변환
const mixedCase = 'JaVaScRiPt';
console.log(mixedCase.toUpperCase()); // JAVASCRIPT
// 소문자로 변환
console.log(mixedCase.toLowerCase()); // javascript

// 문자열 양쪽 끝 공백제거
const space = '                 공    백                    ';
console.log(space.trim()); // 공    백

//문자열에서 특정 패턴이나 문자를 찾아 다른 문자열로 바꾸기
const newHello = hello.replace('world!', 'everyone!');
console.log(hello); // Hello, world!
console.log(newHello); // Hello, everyone!

