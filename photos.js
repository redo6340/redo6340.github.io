const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const pix = ['snowy.jpg', `momndad.jpg`, `books.jpg`, `erinnme.jpg`, `jacques.jpg`];
const alternative = {
  'snowy.jpg' : 'My view',
  'momndad.jpg' : 'Parents',
  'books.jpg' : 'Books',
  'erinnme.jpg' : 'Ski day',
  'jacques.jpg' : 'Jacques'
}


for (const pic of pix) {
  const changePic = document.createElement('img');
  changePic.setAttribute('src', `../img/${pic}`);
  changePic.setAttribute('alt', alternative[pic]);
  thumbBar.appendChild(changePic);
  changePic.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}



btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});