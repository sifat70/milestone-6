/**
 * 1. var let const 
 * 2. default parameter
 * 3. template string
 * 4. arrow function
 * 5. destructuring and spread operator
 * 6. Object.keys, object.values, object.entries
 * 7. for of used in array and string,
 * 8. for in loop used in object
 * 
 *  */

const a = 56;
const numbers = [55, 51, 8];
const person = {
    name: 'Sakib Khan'
}

const message = `Hi, ${person.name} has a :${a} access to ${numbers[2]}`

if (true) {

}

const square = x => x * x;
const sum = (a, b) => a + b;

const { age, z, ...others} = {x: 2, y: 5, z: 3, name: 'jhankar', age: 55};

const [first, second, ...remaining ] = ['ram', 'sam', 'jodu','modhu']