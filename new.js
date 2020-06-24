feedButton.addEventListener('click', addHungerStar);
playButton.addEventListener('click', addBoredomStar);
napButton.addEventListener('click', addSleepStar);


addHungerStar => removeHungerIcon
addBoredomStar => removeBoredomIcon
addSleepStar => removeSleepIcon


function addHungerStar() {
    const newHungerStar = document.createElement('li');
    newHungerStar.className = 'fas fa-ice-cream';
    hungerStarsUL.appendChild(newHungerStar);
}; 
function addBoredomStar() {
    const newBoredomStar = document.createElement('li');
    newBoredomStar.className = 'fas fa-basketball-ball';
    boredomStarsUL.appendChild(newBoredomStar);
}; 
function addSleepStar() {
    const newSleepinessStar = document.createElement('li');
    newSleepinessStar.className = 'fas fa-bed';
    sleepStarsUL.appendChild(newSleepinessStar);
}; 

