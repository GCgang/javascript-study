// 객체 생성
// Object literal { key: value }
// new Object()
// Object.create();
// key: 문자, 숫자, 문자열, 심볼
// value: 원시값, 객체

    let obj = {
    name: 'OBJ',
    'hello-hi': '👋',
    0: 1,
    ['hello-bye']: '✋',
    };

// 접근
console.log(obj.name); // 마침표 표기법 dot notation
console.log(obj['hello-hi']); // 대괄호 표기법 bracket notation

// 추가
obj.emoji = '🍎';

// 삭제
delete obj.emoji;


