// function 

// 예제 1
function add(a, b) {
    return a + b;
}

console.log(add(1, 2)); // 3

// 예제 2
function fullName(firstName, lastName, nationality) {
    if (nationality === 'usa')
        return (`${firstName}, ${lastName}`);
    else if (nationality === 'korea')
        return (`${lastName}, ${firstName}`);
}

let lastName = '윤';
let firstName = '정연';
let nationality = 'korea'
console.log(fullName(firstName, lastName, nationality)); // 윤, 정연

let lastName2 = '안';
let firstName2 = '현준';
let nationality2 = 'usa';
console.log(fullName(firstName2, lastName2, nationality2)); // 현준, 안

// 함수와 메모리
// sum 에는 add에 할당된 함수 오브젝트가 있는 메모리 주소를 복사했기 때문에 sum, add 모두 함수 호출이 가능하다
function add(a,b) {
    return a + b;
}

const sum = add;

console.log(sum(1,2)); // 3
console.log(add(1,2)); // 3
