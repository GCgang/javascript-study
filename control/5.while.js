// 반복문 Loop Statement

// while(조건) { 코드 블럭 }
// 조건이 false가 될때까지 { } 코드 블럭 실행

// 3 2 1 출력
let i = 3;
while (i > 0) {
    console.log(i);
    i--;
}

// 반복문 제어
let isNum = true;
let num = 0;
while (isNum)
{
    num++;
    if (num != 10)
        continue;
    else if (num === 10) {
        console.log(num);
        break;
    }
}

let isActive = false;
let idx = 0;
while (isActive) {
    console.log('hello while');
    if (idx === 0)
        break;
    idx++;
} // 출력 없음

// do while
do {
    console.log('hello do while');
    if (idx === 0)
        break;
    idx++;
} while (isActive); // hello do while 출력

