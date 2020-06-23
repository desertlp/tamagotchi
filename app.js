// ------------------------- Tamagotchi Object ------------------------- //

const tamagotchi = {
    name: '', // from the prompt 
    age: [1,2,4,5,6],
    needs: ['food', 'playtime', 'sleep'],
    evolution: ['Egg', 'Teenager', 'Adult', 'Eldery'],
    evolve () {
        // evolves when all star bars reach 5 at the same time 
    }
};

// ------------------------- APP STATE ------------------------- //
// Things that are currently globally scoped bc not in curly braces

let timeNeed = 5;
let timeReduce = 10; 

// ------------------------- Cached DOM Elements ------------------------- //
// start button
const startButton = document.querySelector('#start-button');
const userInputName = document.querySelector('input'); 

// name 
const nameH2 = document.getElementById('name');
const ageH3 = document.getElementById('age');
const evolutionH3 = document.getElementById('evolution');

//game console
const gameConsole = document.querySelector('.game-console');
// play buttons
const feedButton = document.getElementById('feed');
const playButton = document.getElementById('play');
const napButton = document.getElementById('nap');
// star Uls
const hungerStarsUL = document.getElementById('hungerStars');
const boredomStarsUL = document.getElementById('boredomStars');
const sleepStarsUL = document.getElementById('sleepinessStars');


// ------------------------- Name Your Tamagotchi  ------------------------- //

function handleAddName() {
    const userInputNameValue = document.querySelector('input').value;    
    nameH2.innerText = `Name: ${userInputNameValue}`;
    gameConsole.removeChild(startButton);
    gameConsole.removeChild(userInputName);
    ageH3.innerText = `Age: ${tamagotchi.age[0]}`; 
    evolutionH3.innerText = `Evolution: ${tamagotchi.evolution[0]}`;
}; 
startButton.addEventListener('click', handleAddName);

// ------------------------- Add Stars OnClick ------------------------- //

function addHungerStar() {
    const newHungerStar = document.createElement('li');
    newHungerStar.innerText = '*';
    newHungerStar.className = 'hunger-star';
    hungerStarsUL.appendChild(newHungerStar);
    startNeedTimer();

}; feedButton.addEventListener('click', addHungerStar);

function addBoredomStar() {
    const newBoredomStar = document.createElement('li');
    newBoredomStar.innerText = '*';
    newBoredomStar.className = 'boredom-star';
    boredomStarsUL.appendChild(newBoredomStar);
    startNeedTimer();
}; playButton.addEventListener('click', addBoredomStar);

function addSleepStar() {
    const newSleepinessStar = document.createElement('li');
    newSleepinessStar.innerText = '*';
    newSleepinessStar.className = 'sleepiness-star';
    sleepStarsUL.appendChild(newSleepinessStar);
    startNeedTimer();
}; napButton.addEventListener('click', addSleepStar);

// -------------------------  Random Need Generator ------------------------- //

function generateRandomNeed () {
    const randomNumber = Math.floor(Math.random()*3);  
    const randomNeed = tamagotchi.needs[randomNumber];
    alert(`Tamagotchi needs ${randomNeed}`);
    // set this to a timer 
}; 

// -------------------------  Need Timer ------------------------- //

function startNeedTimer() {
    const timer = setInterval(function () { // timer function is on an interval
        if (timeNeed > 0) { // time until 0 
            timeNeed--; // decrements time, starting at time= 30 seconds 
            console.log(timeNeed);
            
        } else {
            console.log('he needs something'); 
            generateRandomNeed();
            clearInterval(timer); 
        }
    }, 1000) // do this function every 1000 ms( every 1 second)
}; // startNeedTimer(); // where do I put this? 
