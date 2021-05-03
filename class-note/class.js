
function Person_2(name, age) {
    this.name = name;
    this.age = age;
}
let dozy_2 = new Person_2('돋이', 31)

// 위 아래는 동일한 기능을 가진다.

class Person_1 {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}
let dozy_1 = new Person_1('돋이', 31);