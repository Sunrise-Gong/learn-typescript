// interface Person {
//     name: string;
//     age: number;
// };

// 객체 타입 별칭
type Person = {
    name: string;
    age: number;
};

let dozy: Person = {
    name: '돋이',
    age: 31,
};

// 문자열 타입별칭
type Mystring = string;

var str: Mystring = 'hi';

