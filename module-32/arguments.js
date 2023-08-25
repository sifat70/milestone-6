// array like object 

function sum(a, b, c) {
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 85, 25, 36, 48);
// console.log(total);
console.log(sum.length);