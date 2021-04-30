interface User {
    name: string;
    age: number;
};

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
};
const capt = {
    name: '캡틴',
    age: 30
};
getUser(capt);

// 변수에 인터페이스 활용
var dozy: User = {
    name: 'sunrise',
    age: 31
};

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
};
var sum: SumFunction;

sum = function(a: number, b: number): number {
    return a + b;
};

// 인덱싱
interface StringArray {
    [index: number]: string;
};
var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; 에러 아래로 작성하는 코드에 문제가 생길 수 있으므로 주석처리

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp; // 정규식에 대한 타입
};

var obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}
// interface Developer {
//     name: string;
//     age: number;
//     language: string;
// }
interface Developer extends Person{
    language: string;
};

var captain: Developer = {
    language: 'ts',
    name: '캡틴',
    age: 10
}
