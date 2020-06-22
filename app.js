// ------------------------- APP STATE ------------------------- //
// Things that are currently globally scoped bc not in curly braces
    
const name = ''; 
let timeNeed = 5;
let timeReduce = 10; 
let evolution = 0; 

// ------------------------- Cached DOM Elements ------------------------- //
// Elements from the DOM that we have not set reference to in JS

//buttons
const startButton = document.getElementById('start'); 

const feedButton = document.getElementById('feed');
const playButton = document.getElementById('play');
const napButton = document.getElementById('nap');


// star Uls
const hungerStarsUL = document.getElementById('hungerStars');
const boredomStarsUL = document.getElementById('boredomStars');
const sleepStarsUL = document.getElementById('sleepinessStars');
const need = [];

// ------------------------- Add Stars OnClick ------------------------- //


function addHungerStar() {
    const newHungerStar = document.createElement('li');
    newHungerStar.innerText = '*';
    newHungerStar.className = 'hunger-star';
    hungerStarsUL.appendChild(newHungerStar);
}; feedButton.addEventListener('click', addHungerStar);

function addBoredomStar() {
    const newBoredomStar = document.createElement('li');
    newBoredomStar.innerText = '*';
    newBoredomStar.className = 'boredom-star';
    boredomStarsUL.appendChild(newBoredomStar);
}; playButton.addEventListener('click', addBoredomStar);

function addSleepStar() {
    const newSleepinessStar = document.createElement('li');
    newSleepinessStar.innerText = '*';
    newSleepinessStar.className = 'sleepiness-star';
    sleepStarsUL.appendChild(newSleepinessStar);
}; napButton.addEventListener('click', addSleepStar);

// -------------------------  Random Need Generator ------------------------- //

