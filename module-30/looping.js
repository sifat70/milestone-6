// for of use on array or starting not in object 
// for in use on object


const numbers = [1, 5, 2, 8];
// for(let i = 0; i< numbers.length; i++){}


for (const num of numbers) {
    // console.log(num);
}


const nobab = 'siraj ud doula'
for (const char of nobab) {
    // console.log(char)
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true

};


// for(const key of glass){
//     console.log(key);
// }


for(const key in glass){
    const value = glass[key]
    // console.log(key, value);
}

// optional
const keyes = Object.keys(glass);
// console.log(keyes);


for(const key of keyes){
    const value = glass[key];
    console.log(key)
}