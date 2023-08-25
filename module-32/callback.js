function greeting(greetingHandler, name) {
    greetingHandler(name);
}

// const name = 'halim mama';
// const numbers = [45,56,65,3];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}


function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name){
    console.log('Good Evening', name)
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom hanks');
greeting(greetingHandler, 'Tom hanks');
greeting(greetEvening, 'Tom hanks');
greeting(greetEvening, 'Tom hanks');
greeting(greetNight, 'Tom hanks');
greeting(greetNight, 'Tom hanks');




function submitHandler(){
    console.log('Submit button clicked')
}

document.getElementById('btn-submit').addEventListener('click', submitHandler)