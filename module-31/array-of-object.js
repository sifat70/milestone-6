const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 1, name: 'hp', price: 40000 },
    { id: 1, name: 'macbook', price: 165000 },
    
];


// map 
const names = products.map(product => product.name);
// console.log(names);
const prices = products.map(p =>p.price);
// console.log(prices);


// filter 

const expensive = products.filter(p =>p.price > 5000);
// console.log(expensive);

// find 

const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

// reduse 

const total = products.reduce((acum, current) => acum + current.price , 0);
console.log(total);