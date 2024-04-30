// 조건문 Conditional statement

// switch case
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.'); // Mangoes and papayas are $2.79 a pound. 출력
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

let condition = 'good' // good, okay -> 좋음 , bad -> 나쁨
switch (condition) {
    case 'good':
    case 'okay':
        console.log('좋음') // 좋음 출력
        break;
    case 'bad':
        console.log('나쁨')
        break;
    default:
        console.log('모름')
}

// break 안쓴 경우
let day = 3; // 0:월요일, 1: 화요일... 6: 일요일
switch (day) {
    case 0:
        dayName = '월요일';
    case 1:
        dayName = '화요일';
    case 2:
        dayName = '수요일';
    case 3:
        dayName = '목요일';
    case 4:
        dayName = '금요일';
    case 5:
        dayName = '토요일';
    case 6:
        dayName = '일요일';
    default:
        console.log('해당하는 요일이 없음!');
}
console.log(dayName); // 일요일
