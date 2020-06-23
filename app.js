// ------------------------- Tamagotchi Object ------------------------- //

const tamagotchi = {
    name: '', // from the prompt 
    age: 0,
    needs: ['food', 'playtime', 'sleep'],
    evolution: ['Egg', 'Teenager', 'Adult', 'Eldery'],
    evolve () {
        // evolves when all star bars reach 5 at the same time 
    }
};
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


// ------------------------- Event Listeners ------------------------- //

startButton.addEventListener('click', addBasicTamagotchiInfo); 
feedButton.addEventListener('click', addHungerStar);
playButton.addEventListener('click', addBoredomStar);
napButton.addEventListener('click', addSleepStar);

// ------------------------- Name Your Tamagotchi  ------------------------- //
function addBasicTamagotchiInfo() {
    const userInputNameValue = document.querySelector('input').value;    
    nameH2.innerText = `Name: ${userInputNameValue}`;
    gameConsole.removeChild(startButton);
    gameConsole.removeChild(userInputName);
    ageH3.innerText = `Age: ${tamagotchi.age}`; 
    evolutionH3.innerText = `Evolution: ${tamagotchi.evolution[0]}`;
    //startTimers();
}; 
// ------------------------- Add Stars OnClick ------------------------- //

function addHungerStar() {
    const newHungerStar = document.createElement('li');
    newHungerStar.innerText = '*';
    newHungerStar.className = 'hunger-star';
    hungerStarsUL.appendChild(newHungerStar);
}; 
function addBoredomStar() {
    const newBoredomStar = document.createElement('li');
    newBoredomStar.innerText = '*';
    newBoredomStar.className = 'boredom-star';
    boredomStarsUL.appendChild(newBoredomStar);
}; 
function addSleepStar() {
    const newSleepinessStar = document.createElement('li');
    newSleepinessStar.innerText = '*';
    newSleepinessStar.className = 'sleepiness-star';
    sleepStarsUL.appendChild(newSleepinessStar);
}; 
// -------------------------  Random Need Generator ------------------------- //

function generateRandomNeed () {
    const randomNumber = Math.floor(Math.random()*3);  
    const randomNeed = tamagotchi.needs[randomNumber];
    alert(`Tamagotchi needs ${randomNeed}`);
    // set this to a timer 
}; 

// -------------------------  Timers ------------------------- //

let time = 60; // 60 seconds

function startTimers() {

    ///// Need Timer /////
    const needsTimer = setInterval(function () { 
        if (time > 0) { 
            time--;
            generateRandomNeed();
        } else {
            clearInterval(timer); 
        }
        }, 10000) // generate a new need every 10 seconds


    ///// Loose Stars Timer /////
    const looseStarsTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            removeRandomStar();
        } 
        else {
            clearInterval(timer); 
        }
        }, 10000) // remove a random star every 10 seconds
       
    ///// Poop Timer ///// 
    const poopTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            poop();
        } 
        else {
            clearInterval(timer); 
        }
        }, 10000) // poop every 10 second        
     
    ///// Birthday Timer /////     
    const bithdayTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            tamagotchi.age++; // add one year to age 
        } 
        else {
            clearInterval(timer); 
        }
        }, 10000) //  add one year to age every 10 seconds

    /// 
    const dieOfOldAgeTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
        } 
        else {
            dieOfOldAge();
            clearInterval(timer); 
        }
        }, 30000) // die after 30 seconds

}; 

// -------------------------  Poop Function ------------------------- //
// add element, image, to the page that is a picture of poop
function poop() {
    console.log('it pooped');
}; 

// -------------------------  Clean Up Poop Function ------------------------- //

// remove element, image, from the page that is a picture of poop
//  cleanPoop();

// -------------------------  removeRandomStar ------------------------- //
function removeRandomStar() {
    console.log('removed a star');
};

// -------------------------  Die of Old Age  ------------------------- //

function dieOfOldAge() {
    console.log('he died of natural causes')
};

//git commit -m "timers: need, poop, loose star, die"
