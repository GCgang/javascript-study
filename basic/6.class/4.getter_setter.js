// 접근자 프로퍼티 (Accessor Property)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName = () => {
        return `${this.lastName}${this.firstName}`;
    }
}

const me = new Person('현준', '안');
console.log(me);
// Person {
//     fullName: [Function: fullName],
//     firstName: '현준',
//     lastName: '안'
//   }
console.log(me.lastName); // 안
console.log(me.firstName); // 현준
// fullName을 주는 메서드를 호출할 때 코드를 보면 이름,성을 가지고 오는 것과 달리 ()를 사용하는 부자연스러움이 있다
console.log(me.fullName()); // 안현준
me.lastName = '윤';
me.firstName = '정연';
console.log(me.fullName()); // 윤정연


// getter setter 사용하여 접근 및 수정
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.lastName}${this.firstName}`;
    }

    set fullName(value) {
        this.lastName = value[0];
        this.firstName = value.substring(1);
    }
}

const student = new Student('현준', '안');
console.log((student)); // Student { firstName: '현준', lastName: '안' }
console.log((student.lastName)); // 안
console.log((student.firstName)); // 현준
console.log((student.fullName)); // 안현준
student.fullName = '윤정연';
console.log(student.fullName); // 윤정연


// 다른 사용예제
class Member {
    #id;  // private 프로퍼티

    constructor(name, id) {
        this.name = name;  // public 프로퍼티
        this.#id = id;     // private 프로퍼티 초기화
    }

    #privateMethod() {  // private 메소드
        console.log('This is a private method.');
    }

    getId() {
        return this.#id;  // private 프로퍼티 접근
    }

    get id() {
        return `${this.#id}`; // getter 사용하여 member.id 로 자연스럽게 사용할 수 있음
    }

    set id(value) {
        this.#id = value; // setter 사용하여 private 프로퍼티 업데이트
        console.log('set', value);
    }
}

const member = new Member("AHJ", "970303");
console.log(member.getId()) ; // 970303
console.log(member.id); // 970303
member.id = 123; // set 123
console.log(member.getId()); // 123
console.log(member.id); // 123
// member.#privateMethod(); // Syntax Error
// console.log(member.#id);  // Syntax Error