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