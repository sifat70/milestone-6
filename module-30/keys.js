const glass = {
    name: 'glass',
     color: 'golden',
     price: 12,
     isCleaned: true
    
};

console.log(glass);
const keys = Object.keys(glass);
// all property name


const values = Object.values(keys);
// all property value

// console.log(glass)

// console.log(keys)


const entries = Object.entries(glass);
// console.log(entries);
// array of array , two dimensional array

// delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);


// freeze 

// Object.freeze(glass);
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);


