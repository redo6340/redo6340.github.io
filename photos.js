

function check() {
    console.log('test');
}








function random() {
    outputInt = randomNumber(0, 8000000000);
    alert(output.textContent);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);



const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


