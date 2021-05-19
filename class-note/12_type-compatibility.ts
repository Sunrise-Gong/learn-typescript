interface Developer_12 {
    name: string;
    skill: string;
}
// interface Person_12 {
//     name: string;
// }
class Person_12 {
    name: string;
}
let developer: Developer_12;
let person: Person_12;

person = developer;
// // 속성의 개수가 더 적은 것을 할당할 수 없다.(주석 해제 -> 에러 확인)
// developer = new Person_12();
// developer = person;

//--------------------------------------------------- 함수
let add = function(a: number) {
    //...
}
let sum = function(a: number, b: number) {
    //...
}
sum = add;
// //인자의 개수가 더 많은 함수를 할당할 수 없다.(주석 해제 -> 에러 확인)
// add = sum;

//--------------------------------------------------- 제네릭
interface Empty_12<T> {
    //..
}
let empty_1: Empty_12<string>;
let empty_2: Empty_12<number>;
empty_1 = empty_2;
empty_2 = empty_1;

interface NotEmpty_12<T> {
    data: T;
}
let notempty_1: NotEmpty_12<string>;
let notempty_2: NotEmpty_12<number>;
// notempty_1 = notempty_2;
// notempty_2 = notempty_1;