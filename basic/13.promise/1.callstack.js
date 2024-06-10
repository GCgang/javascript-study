// Call Stack
// 자바스크립트는 기본적으로 싱글 쓰레드이기 때문에 동기적으로 실행된다
// c() -> b() -> a() -> a() 리턴, b() 리턴, c() 리턴
function a() {
    return 1;
}
function b() {
    return a() + 1;
}
function c() {
    return b() + 1;
}

const result = c();
console.log(result); // 3

