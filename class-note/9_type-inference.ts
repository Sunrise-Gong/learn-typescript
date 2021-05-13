// 타입 추론 기본 1
var a = 'abc';

function getA(a = 10) {
    let b  = 'hello';
    return a + b;
}

// 타입 추론 기본 2
interface Dropdown<T> {
    value: T;
    title: string;
}

var shoppingItem: Dropdown<string> = {
    value: 'hi',
    title: 'hello'
}