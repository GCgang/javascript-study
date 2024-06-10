// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다

const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first); // 🍏
console.log(second); // 🥝
console.log(others); // [ '🍓', '🍌' ]

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

function createEmoji() {
    return ['mango', '🥭' ];
}

const array = createEmoji();
console.log(array); // [ 'mango', '🥭' ]
console.log(array[0]); // mango
console.log(array[1]); // 🥭

const [title, emoji] = createEmoji();
console.log(title); // mango
console.log(emoji); // 🥭

const me = {
    name: 'ahj',
    age: 100,
    job: 'ceo',
};

function display1(obj) {
    console.log(obj.name); // ahj
    console.log(obj.age); // 100
    console.log(obj.job); // ceo
};
display1(me);

function display2({name, age, job: occupation, pet = '골든리트리버'}) {
    console.log(name); // ahj
    console.log(age); // 100
    console.log(occupation); // ceo
    console.log(pet); // 골든리트리버
}
display2(me);


const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color: 'black',
    },
};

function changeColor({ styles: { color, size=0 } }) {
    console.log(color); // black
    console.log(size); // 20
}

changeColor(prop); // black
