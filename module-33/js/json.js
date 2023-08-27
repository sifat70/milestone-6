const user = { id: 1, name: 'Gorib aamir', job: 'actor' };
// javascript object natation (JSON)
const stringFied = JSON.stringify(user);
console.log(user);
console.log(stringFied);



const shop = {
    owner: 'Alia',
    address: {
        street: 'Kocukhet er vuter goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    inOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);


const shopObj = JSON.parse(shopJSON);
console.log(shopObj);