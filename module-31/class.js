const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'Dell', price: 45000 },
    { id: 1, name: 'hp', price: 40000 },
    { id: 1, name: 'macbook', price: 165000 },
    
];

class Products {
    country = 'Bangladesh';
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new Products('Le le lenovo')
// console.log(lenovo);
// lenovo.speak('Oba kita kau')

class Teacher {
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching math')
    }
}

const tapon = new Teacher('tapon sir', 'Physics');
console.log(tapon);

const rasid = new Teacher('Rasid', 'English')