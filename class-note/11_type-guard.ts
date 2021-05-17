interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' };
}
let tony = introduce();
console.log(tony.name);
// console.log(tony.skill);
// console.log(tony.age);
