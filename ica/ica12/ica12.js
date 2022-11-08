const minusButton = document.querySelector('.minus-Button').addEventListener('click', check);
const plusButton = document.querySelector('.plus-Button').addEventListener('click', check);
const resetButton = document.querySelector('.reset-Button').addEventListener('click', reset);
const submitButton = document.querySelector('.submit-Button').addEventListener('click', submit);

const output = document.querySelector('.output');

function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);

}

function reset() {

    output.textContent = '0000000000';
}


















//const button = document.querySelector('.button');
//const output = document.querySelector('.output');
//let phone_content = document.querySelector('.phone');

//button.addEventListener('click', updateOutput);

//function updateOutput() {
   // output.textContent = phone_content.value;
    //make the alrt dialog box appear
    //alert(phone_content.value);
//}


//<input class="phone" type="text" id="phone" name="phone" placeholder="Enter a phone number"></input>