// GarBage Collection

// 글로벌 변수는 앱이 종료될때까지 계속 메모리에 유지되므로 꼭 필요한 경우에만 선언하는게 좋음
const global = 1;
{
    // 블럭 내부에서만 존재하는 로컬변수
    // 블럭이 끝나면 Garbage collector에 의해 소멸됨
    const local = 1;
}

function print() {
    // 함수 내부에서도 변수는 성능과 메모리 최적화를 위해
    // 필요한 곳에서만 선언하고 사용하도록 해야한다
    if (true) {
        let temp = 0;
    }
}

