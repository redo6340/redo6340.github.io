

function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);

}

function reset() {
    const resetvalue = 0000000000;
    output.textContent = outputInt;
}




function random() {
    outputInt = randomNumber(0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);


const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);




