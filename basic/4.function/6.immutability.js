// 함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지않다 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환하는 것이 좋다 👍

// 원시값 - 값에 의한 복사
// 원시데이터이기 함수 외부에 있는 값이 변경되지는 않겠지만
// 보여준다는 의미의 함수에서 값을 변경하는 것도 좋지 않고, 외부에서 주어진 인자를 내부에서 변경하는 것도 좋지 않다
function display(num) {
    num = 123; // ❌
    console.log(num); // 123
}

const num = 1;
display(num); // 123
console.log(num); // 1


// 객체값 - 참조에 의한 복사 (메모리 주소)
function displayObj(obj) {
    obj.name = 'babo'; // ❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    obj.age = 100; // ❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    console.log(obj);
}

const me = {
    name: 'ahj',
    age: '27'
}

displayObj(me); // { name: 'babo', age: 100 }
console.log(me); // { name: 'babo', age: 100 }

// 만약 객체 내부에 있는 값을 꼭 변경해야 한다면
// 변경한다는 의미의 함수이름을 작성하고
// 반환할때는 새로운 오브젝트를 만들어서 반환한다

function changeName(obj) {
    return { ...obj, name: '천재', age: 19 };
}

console.log(changeName(me)); // { name: '천재', age: 19 }
