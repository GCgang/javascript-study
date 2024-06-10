// try catch finally

function readFile(path) {
    throw new Error('error 발생 !');
    return ' 파일내용';
}

function processFile(path) {
    let content;
    try {
        content = readFile(path);
    } catch(error) {
        console.log(error);
        content = '기본내용';
    } finally {
        console.log('성공하든 실패하든 마지막 리소스 정리');
    }
    const result = 'hi' + content;
    return result;
}

const result = processFile('경로');
console.log(result);