// 문자열 타입
let string = '안녕하세요';
console.log(string);

string = `안녕`;
console.log(string);

string = "HI";
console.log(string);

let longString = "여러 줄에 걸쳐 작성해야 할 정도로 긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 코드를 읽기 힘들어 지니까요."
console.log(longString)

longString =
  "여러 줄에 걸쳐 작성해야 할 정도로 " +
  "긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 " +
  "코드를 읽기 힘들어지니까요.";
console.log(longString)

longString =
  "여러 줄에 걸쳐 작성해야 할 정도로 \
긴 문자열인데 왜 한 줄에 다 적으면 안되냐면 \
코드를 읽기 힘들어지니까요.";
console.log(longString)

// 특수 문자 출력하기
string = "'Hello'";
console.log(string);

string = "안녕!\nHJ!\t\t 나는 \\\u09AC 야"
console.log(string)

// 템플릿 리터럴 (Template Literal) ``
let id = '정연'
let greetings = "'안녕!, " + id + "✋\n즐거운 하루 보내!'";
console.log(greetings)

greetings = `'안녕, ${id}✋
즐거운 하루 보내!'`;
console.log(greetings);

