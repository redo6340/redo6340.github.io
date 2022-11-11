const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://www.boredapi.com/api/activity';

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();


    let json_response = JSON.parse(response);
   // console.log(json_response);
    console.log(json_response['activity']);
    
   // .then(text => text.text());
   // console.log(text('message'));
   displayQuote(json_response['activity']);
}

function displayQuote(x) {
    const quoteBox = document.querySelector('#js-quote-text');
    // console.log('display quote working');
    //const textMessage = document.createTextNode(x);
    
    //quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}

function update() {
    var element = document.getElementById("myprogressBar");   
    var width = 1;
    var identity = setInterval(scene, 1);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
        element.style.width = width + 1; 
        element.innerHTML = width * 1  + 1;
      }
    }
  }
//gets Quote on screen
getQuote();