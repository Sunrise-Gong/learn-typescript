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
//person은 skill 속성이 없기 때문에 developer에 할당할수 없어 에러 발생
//developer = person;

