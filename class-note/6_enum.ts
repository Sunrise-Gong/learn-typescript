enum Shoes {
    Nike = 'nike', 
    Adidas = 'adidas',
};

var myShoes = Shoes.Nike;

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if( answer === Answer.Yes) {
        console.log(answer);
    }
    if( answer === Answer.No) {
        console.log(answer)
    }
}
askQuestion(Answer.Yes)