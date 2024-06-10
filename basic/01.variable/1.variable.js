// 변수 : 값을 저장하는 공간, 자료를 저장할 수 있는 이름이 주어진 기억장소

// 변수 선언 (variable declaration)
let a;
console.log(a) // undefined

// 변수 선언과 동시에 값 할당 (variable declaration and assignment)
let b = 0;
console.log(b)

// 값의 재할당 (value reassigning)
a = 1;
console.log(a)


/**
 * 변수 이름짓기 (Naming Variables)
 * 변수의 이름은 저장된 값을 잘 나타낼 수 있는 의미있는 이름으로 지어야 하며, 구체적일 수록 좋다
 * /

/** 변수 규칙
 * 라틴문자(0-9, a-z, A-Z,), _
 * 대소문자 구분
 * camelCase(추천) 👍
 * 한국어(비추) ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ (_, $ 예외)
 * 이모지 ❌
 */

let apple;
let redApple;

let banana;
let yellowBanana;

// 좋은 예제 ⭐️
let myName = "hj";
let myAge = 99;
let backgroundAudio;
let windAudio;
let colorMainFont;
let colorBackground;
let colorBrand;

// 나쁜 예제 🤮
let num1;
let num2;
let audio1;
let audio2;
let MYAGE;
let myage;
let c;
let d;
let dksguswnsWKd;
let _77;

// 이런식으로 변수를 선언하면 audio 만 입력 한 후 자동완성으로 변수를 찾기 좋다 ✅
let audioBackgroud; 
let audioWind;