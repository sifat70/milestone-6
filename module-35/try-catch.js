function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');


    try {
        const age = parseInt(ageText);

        if (isNaN(age)) {
            throw "Please enter number";
        }
        else if(age < 18){
            throw "bacca kacca no allowed"
        }else if(age > 30){
            throw 'murubbi ra aiso na'
        }

        errorTag.innerHTML = '';
    } 
    catch (err) {
        console.log('ERROR: ', err)
        errorTag.innerHTML = 'ERROR: '+ err;
    }
    finally{
        console.log('All done inside try catch')
    }
    console.log(11111);
}