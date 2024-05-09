// Date
// UTC 기준 (협정 세계시, 1970년 1월 1일 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(Date()); // Thu May 09 2024 13:15:29 GMT+0900 (대한민국 표준시)
console.log(typeof Date()); // string

console.log(new Date()); // 2024-05-09T04:15:29.858Z
console.log(typeof new Date()); // object

const startDate = new Date("2024-01-01");
const endDate = new Date("2024-02-01");
const diff = endDate - startDate;  // 밀리초 단위의 차이
console.log(diff / (1000 * 60 * 60 * 24));  // 31,  일 단위로 변환

// Static Methods
const now = new Date();
console.log(now);

// Instance Methods
now.setFullYear(1000);
now.setMonth(0) // 0 부터 1월
now.setDate(1)
now.setHours(8);
now.setMinutes(30);
now.setSeconds(30);
console.log(now); // 1000-01-01T00:02:38.321Z
console.log(now.getFullYear()); // 1000
console.log(now.getMonth());  // 0
console.log(now.getDate()); // 1
console.log(now.getDay()); // 3)

console.log(now.toString()); // Wed Jan 01 1000 08:30:30 GMT+0827 (대한민국 표준시)
console.log(now.toDateString()); // Wed Jan 01 1000
console.log(now.toTimeString()); // 08:30:30 GMT+0827 (대한민국 표준시)
console.log(now.toISOString()); // 1000-01-01T00:02:38.019Z
console.log(now.toLocaleDateString('en-US')); // 1/1/1000
console.log(now.toLocaleDateString('ko-KR')); // 1000. 1. 1.





