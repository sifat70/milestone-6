const max = Math.max(6, 23, 57, 87, 95, 5);
const numbers = [3, 5, 8, 564, 65, 65, 45 , 44, 56];
const arrayMAx= Math.max(...numbers);

// console.log(...numbers)
console.log(arrayMAx);



// use spread operator to copy

const friends = [4, 5, 65, 68, 9];
const bondu = friends;
const dosto = [...friends]; //copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);


// advanced

const sonkha = [...friends, 999] //add extra elements while copy
console.log(sonkha)
