// 함수에 타입을 정의하는 방식
function sum (a: number, b: number): number {
    return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 10;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}
log('hello')
log('hello', 'world')

// 옵셔널 파라미터 안쓰면..
// function log2(a: string, b: string) {}
// log2('hello')