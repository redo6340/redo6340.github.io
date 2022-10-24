const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const pix = ['camp.jpg', `waterfall.jpg`, `ski.jpg`, `river.jpg`, `kirby.jpg`];
const alternative = {
  'camp.jpg' : 'Camp GB',
  'waterfall.jpg' : 'Bridal Veil Falls',
  'ski.jpg' : 'Me and My Volkl Yumis',
  'river.jpg' : 'Fun Forest Fishing',
  'kirby.jpg' : 'Our New Kitty'
}

/* Looping through images */

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

/* Wiring up the Darken/Lighten button */

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