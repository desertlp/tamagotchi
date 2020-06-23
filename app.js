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
// poop area
const poops = document.querySelector('.poops');


// ------------------------- Event Listeners ------------------------- //

startButton.addEventListener('click', addBasicTamagotchiInfo); 
feedButton.addEventListener('click', addHungerStar);
playButton.addEventListener('click', addBoredomStar);
napButton.addEventListener('click', addSleepStar);
poops.addEventListener('click', cleanPoop);

// ------------------------- Name Your Tamagotchi  ------------------------- //
function addBasicTamagotchiInfo() {
    const userInputNameValue = document.querySelector('input').value;    
    nameH2.innerText = `Name: ${userInputNameValue}`;
    gameConsole.removeChild(startButton);
    gameConsole.removeChild(userInputName);
    ageH3.innerText = `Age: ${tamagotchi.age}`; 
    evolutionH3.innerText = `Evolution: ${tamagotchi.evolution[0]}`;
    startTimers();
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

let time = 30; // 30 seconds

function startTimers() {
    const timer = setInterval(function () { 
        if (time > 0) { 
            time--;
            console.log(time);
        } else {
            clearInterval(timer); 
        }
        }, 1000) // log time every second

    const needsTimer = setInterval(function () { 
        if (time > 0) { 
            time--;
            generateRandomNeed();
        } else {
            clearInterval(needsTimer); 
        }
        }, 10000) // generate a new need every 10 seconds

    const looseStarsTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            removeRandomStar();
        } 
        else {
            clearInterval(looseStarsTimer); 
        }
        }, 10000) // remove a random star every 10 seconds
       
    const poopTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            poop();
        } 
        else {
            clearInterval(poopTimer); 
        }
        }, 10000) // poop every 10 second        
     
    const bithdayTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            tamagotchi.age++; // increment age by 1 year
            updateAge(); // add one year to age 
        } 
        else {
            clearInterval(bithdayTimer); 
        }
        }, 10000) //  add one year to age every 10 seconds
            
    const dieOfOldAgeTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
        } 
        else {
            dieOfOldAge();
            clearInterval(dieOfOldAgeTimer); 
        }
        }, 30000) // die after 30 seconds
}; 

// ------------------------- Update Age ------------------------- //

function updateAge () { 
    ageH3.innerText = `Age: ${tamagotchi.age}`; // method chaining 
};

// -------------------------  Poop Function ------------------------- //

function poop() {
    const poop = document.createElement('img');
    poop.classList = 'made-some-poops';
    poop.setAttribute('src', 'https://cdn.theatlantic.com/thumbor/_Je_YnGbWz6w4aolQWyuTyl05FE=/0x250:4874x2992/720x405/media/img/mt/2018/02/GettyImages_916017408/original.jpg');
    poops.appendChild(poop);
};

// -------------------------  Clean Up Poop Function ------------------------- //

function cleanPoop (event) {
    if (event.target.classList.contains('made-some-poops')) {
    poops.removeChild(event.target);
    }
};

// -------------------------  removeRandomStar ------------------------- //
function removeRandomStar() {
    console.log('removed a star');
};

// -------------------------  Die of Old Age  ------------------------- //

function dieOfOldAge() {
    console.log('he died of natural causes')
    // clear the screen, game over
};

// -------------------------  Evolve ------------------------- //

// // /// evolve

// // time = 10 
// // he is fed, played with, and has slept 
// // there is no poop on the screen 


// const evolveTimer = setInterval(function () { 
//     if (time > 0) { 
//         time--; 
//         tamagotchi.evolution[i++]; // move to next index
//         evolve(); // add index to evolution 
//     } 
//     else {
//         clearInterval(timer); 
//     }
//     }, 5000) //  got to the next evolution stage every 5 seconds


//     function evolve () { 
//         evolutionH3.innerText = `Evolution: ${tamagotchi.evolution[i]}`; // method chaining 
//     };