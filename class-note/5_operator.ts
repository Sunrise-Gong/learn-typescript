// function logMessage(value: any) {
//     console.log(value);
// };
// logMessage('hello');
// logMessage(100);

// 변수에 대한 유니온 적용해보기
var sunrise: string | number | boolean;

// 인자에 유니온 적용해보기
function logMessage(value: string | number) {
    if (typeof value === 'number') { // 타입가드
        value.toLocaleString(); // 타입에 일치하는 메소드가 제시되는 것을 확인할 수 있음
    }
    if (typeof value === 'string') {
        value.toString()
    }
    throw new TypeError('value must be string or number') // 지정한 타입이 아닌 경우 에러문구 보여주기
};
logMessage('hi');
logMessage(100);

//------------------------------------------------------

interface Developer {
    name: string;
    skill: string;
};
interface Person1 {
    name: string;
    age: number;
};

// 유니온 타입
function askSomeone(someone: Developer | Person1) {
    someone.name;
    // someone.age;
    // someone.skill; // 공통으로 타입을 지정한 name 이외의 속성은 에러가 난다.
}

// 유니온 타입 함수 실행
askSomeone({ name: '디벨롭퍼', skill: '타입스크립트' }); // Developer 인터페이스
askSomeone({ name: '펄슨', age: 10,  }); // Person1 인터페이스
askSomeone({ name: '펄슨', age: 10, skill: '타입스크립트'}); // Developer 와 Person1 인터페이스

// 인터섹션 타입
function askSomeone1(someone: Developer & Person1) {
    someone.name;
    someone.age;
    someone.skill;
}

// 인터섹션 타입 함수 실행
// askSomeone1({ name: '디벨롭퍼', skill: '타입스크립트' }); // Developer 인터페이스 -> 에러 발생
askSomeone1({ name: '디벨롭퍼', skill: '타입스크립트', age: 10 }); // Developer 와 Person1 의 속성이 모두 포함 되어야 에러가 안남