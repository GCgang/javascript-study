// 문자열의 모든 캐릭터를 하나씩 출력
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i));
    // console.log(text[i]);
}
// H
// e
// l
// l
// ..
// !

// 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
console.log(ids.split(', ')); // ['user1', 'user2', 'user3', 'user4']

// 1초에 한번씩 시계를 (날짜포함) 출력해보자
setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);

// 2초후에 2초라는 문자 출력
// setTimeout(() => {console.log('2초')}, 2000);
