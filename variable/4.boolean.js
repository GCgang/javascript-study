// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);
console.log('\n');

// 활용 예시
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);
console.log('\n');

// bool 타입으로 변환
console.log(!!'hello'); // true
console.log(Boolean('hello')); // true
console.log(!!''); // false
console.log(Boolean('')); // false
console.log('\n');

// Falshy 거짓인 값
console.log(!!false);
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log('\n');

// Truthy 참인 값
console.log(!!true);
console.log(!!1);
console.log(!!-1);
console.log(!!"text");
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);