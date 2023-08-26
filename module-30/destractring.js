const actor = {
    name: 'Ananta',
    age: 30,
    phone: '0178888888888',
    money: 1235315551151
}


// if right is an object left side of destructring will be object as well 
const {phone, age: boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;


console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(age)


// array destructing 

const numbers = [45, 85];
const [first, secont] = numbers;
const [x, y] = [12, 66]

// 

function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, dritio] = doubleThem(6, 9);
console.log(prothom, dritio)