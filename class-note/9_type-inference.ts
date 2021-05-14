// 타입 추론 기본 1
var a = 'abc';

function getA(a = 10) {
    let b  = 'hello';
    return a + b;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> { // 'convention' 하게는 <T>를 사용하지만 구분하기 위해서 <K>를 사용
    description: string;
    tag: K;
}

var shoppingItem: DetailedDropdown<number> = {
    value: 1,
    tag: 2,
    description: 'value/tag 가 <K>로 추론',
    title: '제네릭 인터페이스 상속'
}


// Best Common Type
let arr = ['a', 2, true];