class Person_3 {
    // this.속성에 대한 타입 정의 : 타입을 정의해주지 않으면 아래와 같이 빨간줄
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) { // 할당되는 값들의 타입 정의
        this.name = name;
        this.age = age;
    }
}

// // 리액트 예전? 문법 - 클래스 기반 코드
// class App extends React.Component {

// }

// // 리액트 최신 문법 - 훅 기반 함수형 코드
// function App() {
//     return <div>hello world</div>
// }