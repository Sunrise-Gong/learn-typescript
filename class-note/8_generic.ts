// function logText(text) { 
//     console.log(text);
//     return text;
// }
// //아래 3개다 function logText(text: any): any 가 된다.
// logText(10)
// logText('안녕')
// logText(true)

function logText_1<T>(text: T):T {
    console.log(text);
    return text;
}
//function logText<10>(text: 10):10
logText_1(10)
//function logText<string>(text: stirng):string
const hello = logText_1<string>('hello');
hello.split('');

// 인터페이스에 제네릭을 선언하는 방법
// // 기존 방식
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
// const obj: Dropdown = { value: '안녕', selected: true };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const objStr: Dropdown<string> = { value: '안녕', selected: false };
const objNum: Dropdown<number> = { value: 10, selected: true };