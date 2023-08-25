// strongly typed language

// int a = 5
// string b = 'alim halim ksad'
// bool c = true;
// object student = { name: 'kasem', id: 55};
// int[] numbers = [12, 63, 92];
// string[] friends = ['abul', 'kasem', 'hasem'];



//JavaScript is a dynamic typed language 



// primitive typed
const a = 5;
const b = 'Samsu akhon r kopai nah';
const c = true;



// non primitive typed
const age = [45, 65, 98];
const student = { name: 'sifat', id: 7 }


// console.log(typeof a, typeof b, typeof c, typeof age, typeof student);



let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'}
let q = p;
// q = {job: 'backend end'}
q.job = 'front end developer'
console.log(p, q);