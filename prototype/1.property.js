const dog = { name: '골든이', age: 10 };

console.log(dog); // { name: '골든이', age: 10 }
console.log(Object.keys(dog)); // [ 'name', 'age' ]
console.log(Object.values(dog)); // [ '골든이', 10 ]
console.log(Object.entries(dog)); // [ [ 'name', '골든이' ], [ 'age', 10 ] ]
console.log('name' in dog); // true


// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터 객체에 저장된다
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);
// {
//     name: {
//       value: '골든이',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 10, writable: true, enumerable: true, configurable: true }
//   }

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc); // { value: '골든이', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name', {
    value: '멍멍',
    writable: false,
    enumerable: false,
    configurable: false,
});
console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // [ 'age' ]
delete dog.name;
console.log(dog.name); // 멍멍

const newDesc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(newDesc);
// {
//     value: '멍멍',
//     writable: false,
//     enumerable: false,
//     configurable: false
// }


const student = {};
Object.defineProperties(student, {
    firstName: {
    value: '현준',
    writable: true,
    enumerable: true,
    configurable: true,
    },
    lastName: {
    value: '안',
    writable: true,
    enumerable: true,
    configurable: true,
    },  
    fullName: {
        get() {
            return (`${this.lastName} ${this.firstName}`);
        },
        set(name) {
            [this.lastName, this.firstName] = name.split(' ');
        },
        configurable: true,
    },
});

console.log(student); // { firstName: '현준', lastName: '안' }
console.log(student.fullName); // 안 현준

student.fullName = '윤 정연';
console.log(student.fullName); // 윤 정연