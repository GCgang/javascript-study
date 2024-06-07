// 동결 Object.freeze Object의 불변성을 유지하고 싶은 경우 사용
// 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌ (얕은 동결임)
const hj = { name: '안현준', age: 9999 };
const dog = { name: '멍멍', emoji: '🐶', owner: hj };
Object.freeze(dog);
console.log(dog); // { name: '멍멍', emoji: '🐶', owner: { name: '안현준', age: 9999 } }

dog.age = 9999;
console.log(dog); // { name: '멍멍', emoji: '🐶', owner: { name: '안현준', age: 9999 } }

delete dog.name;
console.log(dog); // { name: '멍멍', emoji: '🐶', owner: { name: '안현준', age: 9999 } }

hj.age = 10;
console.log(dog); // { name: '멍멍', emoji: '🐶', owner: { name: '안현준', age: 10 } }

try {
    Object.defineProperty(dog, 'name', {
        value: '야옹',
    });
} catch (e) {
    console.error(`Error: ${e}`); // Error: TypeError: Cannot redefine property: name
}

try {
    Object.defineProperty(dog, 'name', {
        writable: true,
    });
} catch (e) {
    console.error(`Error: ${e}`); // Error: TypeError: Cannot redefine property: name
}

// 밀봉 Object.seal 값의 수정만 가능
// 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { name: '야옹', emoji: '🐱', owner: hj };
Object.seal(cat);
console.log(cat); // { name: '야옹', emoji: '🐱', owner: { name: '안현준', age: 100 } }

cat.name = '야옹이';
console.log(cat); // { name: '야옹이', emoji: '🐱', owner: { name: '안현준', age: 100 } }

delete cat.emoji; 
console.log(cat); // { name: '야옹이', emoji: '🐱', owner: { name: '안현준', age: 100 } }

try {
    Object.defineProperty(cat, 'name', {
        configurable: true,
    });
} catch (e) {
    console.error(`Error: ${e}`); // Error: TypeError: Cannot redefine property: name
}

// 확장 금지 preventExtensions 추가만 안됨
// 수정 ✅, 추가 ❌, 삭제 ✅, 속성 재정의 ✅

const tiger = { name: '어흥', emoji: '🐯', owner: hj };
Object.preventExtensions(tiger);

console.log(tiger); // { name: '어흥', emoji: '🐯', owner: { name: '안현준', age: 100 } }

tiger.name = '타이거';
console.log(tiger); // { name: '타이거', emoji: '🐯', owner: { name: '안현준', age: 100 } }

tiger.age = 10;
console.log(tiger); // { name: '타이거', emoji: '🐯', owner: { name: '안현준', age: 100 } }

delete tiger.emoji;
console.log(tiger);//  { name: '타이거', owner: { name: '안현준', age: 100 } }
