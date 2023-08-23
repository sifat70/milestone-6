// var: no reason to use
//  let: allow it to use reassign
//  const : do not allow it to reassign


const money = 20;
// money = 50
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count);


          /* sorasuri reassign kora jabe na but element change ba push pop other sob kora jabe */
const numbers = [23, 85, 55, 22, 88];
// numbers = [4, 56, 531, 456];
numbers[1] = 55;
numbers.push(8,52,55)
console.log(numbers);


// object 

const student = {
    name: 'moyna pakhi',
    class: 12
}

// student = {name: 'khela hobbe'} don't use 

student.name = 'moyer kontai';
console.log(student);

// loop
let sum = 0;
for(let i = 0; i < 10; i++){
    const num = i;
    sum = sum + num;
}

console.log(sum);
