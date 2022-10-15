const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let storyText = "The coals were 94 farenheit, so :insertx: needed to travel somewhere to get sauce while the ribs were heating up. When he got to :inserty:, a witch appeared out of no where and turned him into :insertz:. Reeve was standing there the entire time, but they were not surprised — :insertx: stole 300 pounds of Sweet Baby Rays Barbecque sauce from the witch during his last visit.";

let insertX = ["Mark","Father Facebook","Meta Man"];

let insertY = ["the Metaverse","my mom's house","the Bog"];

let insertZ = ["a Tik Toker that could do nothing but hit the griddy for the rest of his life","Baby Ray", "a glass of milk"];

randomize.addEventListener('click', result);

function result() {
   let newStory = storyText;

let xItem, yItem, zItem;

xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:",xItem);
newStory = newStory.replace(":inserty:",yItem);
newStory = newStory.replace(":insertz:",zItem);
newStory = newStory.replace(":insertx:",xItem);
  
  if(customName.value != '') {
    let name = customName.value;
    newStory = newStory.replace('Reeve', name);
  }

  if(document.getElementById("uk").checked) {
    let stonesPerPound = 0.0714286;
    let weight = Math.round(300*stonesPerPound)+' stone';
    let temperature =  Math.round((94-32)*5/9)+' centigrade';
    newStory = newStory.replace("94 farenheit", temperature);  
    newStory = newStory.replace("300 pounds", weight); 
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}