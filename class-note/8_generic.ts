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

//-------------------------------------------------- 인터페이스에 제네릭을 선언하는 방법
/*
interface Dropdown {
    value: string;
    selected: boolean;
}
const obj: Dropdown = { value: '안녕', selected: true };
*/

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const objStr: Dropdown<string> = { value: '안녕', selected: false };
const objNum: Dropdown<number> = { value: 10, selected: true };

//-------------------------------------------------- 제네릭의 타입 제한
/*
function logTextLength<T>(text: T): T {
    console.log(text.length); // T 가 어떤 타입인지 아직 모르기 때문에 .length 메소드에 에러가 발생
    return text;
};
// 이 문제를 해결해보자
*/

function logTextLength<T>(text: T[]): T[] { // 배열을 부여해서 .length를 사용할 수 있게 만듦;
    console.log(text.length);
    return text;
}
logTextLength<string>(['hi','hello'])

//-------------------------------------------------- 제네릭의 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
    length: number; // 속성 length 를 숫자타입으로 지정
}

function logTextLength_1<T extends LengthType>(text: T):T { // 상속(확장)하면 length 메소드를 사용할 수 있게된다.
    console.log(text.length);
    return text;
}

//-------------------------------------------------- 제네릭의 타입 제한 3 - keyof

interface shoppingItem {
    name: string;
    price: number;
    stock: number;
    10: string;
}
function getShoppingIthemOption<T extends keyof shoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingIthemOption('name')
getShoppingIthemOption('price')
getShoppingIthemOption('stock')

getShoppingIthemOption(10);