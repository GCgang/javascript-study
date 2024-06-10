console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

// 문자로 표기된 Javascript 코드 실행
eval('const num = 10; console.log(num);'); // 10

// 유한수인지 판별
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

// 실수로 파싱해서 반환
console.log(parseFloat('   123.123   ')); // 123.123

// 정수로 파싱해서 반환
console.log(parseInt('111 11')); // 111
console.log(parseInt('111.111')); // 111

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 한다
// 한글이나 특수문자는 이스케이프 처리를 해야 한다
const URL = 'https://현준.com';
const encoded = encodeURI(URL);
console.log(encoded) // https://%ED%98%84%EC%A4%80.com << 인코딩된 URL

const decoded = decodeURI(encoded);
console.log(decoded); // https://현준.com << 디코딩된 URL

// 전체 URL이 아닌 부분적인 것은 Component 이용
const part = '현준.com';
const encodedPart = encodeURIComponent(part);
console.log(encodeURIComponent(encodedPart)); // %ED%98%84%EC%A4%80.com

const decodedPart = decodeURIComponent(encodedPart);
console.log(decodedPart); // 현준.com

