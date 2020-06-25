// ------------------------- Tamagotchi Object ------------------------- //

const tamagotchi = {
    name: '', // from the prompt 
    age: 0,
    needs: ['food', 'playtime', 'sleep'],
    evolution: 'Egg',
    evolve () {
        // evolves when all star bars reach 5 at the same time 
    }
};

// ------------------------- Cached DOM Elements ------------------------- //
// start button
const startButton = document.querySelector('#start-button');
const userInputName = document.querySelector('input'); 
// name, age, evolution stage
const nameH3 = document.getElementById('name');
const ageH3 = document.getElementById('age');
//const evolutionH3 = document.getElementById('evolution');
// game console
const gameConsole = document.querySelector('.game-console');
const animationScreen = document.querySelector('.animation-screen');
// play buttons
const gameButtons = document.querySelector('.buttons');
const feedButton = document.getElementById('feed');
const playButton = document.getElementById('play');
const napButton = document.getElementById('nap');
// stats section 
let statsSection = document.querySelector('.stats');
let randomStatArr = [];
// Icon Uls
let hungerIconsUL = document.getElementById('hungerStars');
let boredomIconsUL = document.getElementById('boredomStars');
let sleepIconsUL = document.getElementById('sleepinessStars');
// poop area
const poops = document.querySelector('.poops');
// beep 
const beep = document.getElementById("beep");


// ------------------------- Event Listeners ------------------------- //

startButton.addEventListener('click', addBasicTamagotchiInfo); 
feedButton.addEventListener('click', removeHungerIcon);
playButton.addEventListener('click', removeBoredomIcon);
napButton.addEventListener('click', removeSleepIcon);
poops.addEventListener('click', cleanPoop);

// ------------------------- Interactive Button Functionality ------------------------- //

function removeHungerIcon (){
    let hungerIcon = hungerIconsUL.firstElementChild;
    hungerIconsUL.removeChild(hungerIcon);
};

function removeBoredomIcon () {
    let boredomIcon = boredomIconsUL.firstElementChild;
    boredomIconsUL.removeChild(boredomIcon);
};

function removeSleepIcon () {
    let sleepIcon = sleepIconsUL.firstElementChild;
    sleepIconsUL.removeChild(sleepIcon);
};

// ------------------------- Start Game ------------------------- //

function addBasicTamagotchiInfo() {
    document.querySelector('.initial-hide').classList.remove('initial-hide');
    const userInputNameValue = document.querySelector('input').value;    
    nameH3.innerText = `${userInputNameValue}`;
    gameConsole.removeChild(startButton);
    gameConsole.removeChild(userInputName);
    ageH3.innerText = `Age: ${tamagotchi.age}`; 
    hatchEgg();
    setTimeout(startTimers, 5000);
}; 

// -------------------------  Timers ------------------------- //

let time = 60; // 2min 

function startTimers() {
    const timer = setInterval(function () { 
        if (time > 0) { 
            time--;
            console.log(time);           
            dieOfNeglect(time);
            // evolve();
            
        } else {
            clearInterval(timer); 
        }
        }, 1000) // log time every second

    const needsTimer = setInterval(function () { 
        if (time > 0) { 
            time--;
            generateRandomNeedMessage();
            playAudio();
        } else {
            clearInterval(needsTimer); 
        }
        }, 20000) // generate a new need every 10 seconds

    const addRandomIconTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            addRandomIcon();
        } 
        else {
            clearInterval(addRandomIconTimer); 
        }
        }, 7000) // add a random stat every 7 seconds
       
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
            evolve();
        } 
        else {
            clearInterval(bithdayTimer); 
        }
        }, 10000) //  add one year to age every 10 seconds, make this proportional to game play time, and then chaneg the evolve times 
            
    const dieOfOldAgeTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
        } 
        else {
            dieOfOldAge();
            clearInterval(dieOfOldAgeTimer); 
        }
        
        }, 60000) // this should be equal to the gameplay time 
}; 

// -------------------------  Random Need Generator ------------------------- //

function generateRandomNeedMessage () {
    const randomNumber = Math.floor(Math.random()*3);  
    const randomNeed = tamagotchi.needs[randomNumber];
    console.log(`Tamagotchi needs ${randomNeed}`);
}; 

// ------------------------- Update Age ------------------------- //

function updateAge () { 
    ageH3.innerText = `Age: ${tamagotchi.age}`; // method chaining 
};

// -------------------------  Poop ------------------------- //

function poop() {
    const poop = document.createElement('img');
    poop.classList = 'made-some-poops';
    poop.setAttribute('src', 'poop.png');
    poops.appendChild(poop);
    if (poops.children.length > 3) {
        alert('clean poop by clicking on it');
    }
};

// -------------------------  Clean Up Poop ------------------------- //

function cleanPoop (event) {
    if (event.target.classList.contains('made-some-poops')) {
    poops.removeChild(event.target);
    }
};

// ------------------------- Add Icons Function ------------------------- //

function addHungerIcon() {
    const newHungerIcon = document.createElement('li');
    newHungerIcon.className = 'fas fa-ice-cream';
    hungerIconsUL.appendChild(newHungerIcon);
}; 
function addBoredomIcon() {
    const newBoredomIcon = document.createElement('li');
    newBoredomIcon.className = 'fas fa-basketball-ball';
    boredomIconsUL.appendChild(newBoredomIcon);
}; 
function addSleepIcon() {
    const newSleepinessIcon = document.createElement('li');
    newSleepinessIcon.className = 'fas fa-bed';
    sleepIconsUL.appendChild(newSleepinessIcon);
}; 

// -------------------------  Random Icon Adder ------------------------- //

function addRandomIcon() {

    const randomNumber = Math.floor(Math.random()*3);  
    const randomStat = statsSection.children[randomNumber];
    const randomStatIcon = randomStat.firstElementChild;
    if (randomStatIcon.className === 'fas fa-ice-cream') {
        addHungerIcon();        
    } else if (randomStatIcon.className === 'fas fa-basketball-ball') {
        addBoredomIcon();
    } else 
        addSleepIcon();

};

// -------------------------  Remove Buttons from GamePlay ------------------------- //

function removeGameButtons () {
    gameButtons.removeChild(feedButton);
    gameButtons.removeChild(playButton);
    gameButtons.removeChild(napButton);
}; 

// -------------------------  Die of Old Age  ------------------------- //

function dieOfOldAge() {
    animationScreen.src = "gifs/ghost.gif";
    removeGameButtons();
    alert('your tamagotchi passed away of natural causes due to old age');

};

// -------------------------  Die of Neglect  ------------------------- //

function dieOfNeglect() {

    let hungerIconsULength = hungerIconsUL.children.length;
    let boredomIconsULength = boredomIconsUL.children.length;
    let sleepIconsULength = sleepIconsUL.children.length;

    if (hungerIconsULength > 9 || boredomIconsULength > 9 || sleepIconsULength > 9) {
        animationScreen.src = "gifs/ghost.gif";
        time = 0;
        removeGameButtons();
        alert('you neglected your tamagotchi so he died');
    } else {
        return;
    }
};

// -------------------------  Evolve ------------------------- //

function evolve () {    

    let currentAge = tamagotchi.age;

    if (currentAge > 5) { // adult
        levelupAdult ();
        // display new adult tamagotchi image
    } else if (currentAge < 3) { // baby
        // display baby tamagotchi image
    } else // teenager
        levelupTeenager(); 
        // display teenager tamagotchi image
};

// ===================================== Evolve Animations =====================================//

// -------------------------  Hatch ------------------------- //

let eggHatchTime = 1;

function hatchEgg () {
    
    const hatchEggTimer = setInterval(function () { 
        if (eggHatchTime > 0) { 
            eggHatchTime--;          
            animationScreen.src = "gifs/hatch.gif";
        } else {
            clearInterval(hatchEggTimer); 
            animationScreen.src = "gifs/baby.gif";
        }
        }, 7000) // log every 5 seconds
};

// -------------------------  Evolve to Teenager  ------------------------- //
let levelUpTimeTeenager = 2;

function levelupTeenager () {

    const levelUpTimerTeenager = setInterval(function () { 
        if (levelUpTimeTeenager > 0) { 
            levelUpTimeTeenager--;          
            animationScreen.src = "gifs/levelup.gif";
        } else {
            clearInterval(levelUpTimerTeenager); 
            animationScreen.src = "gifs/teenage.gif";
        }
        }, 6000) // log every 3 seconds

};

// -------------------------  Evolve to Adult  ------------------------- //

let levelUpTimeAdult = 2;

function levelupAdult () {

    const levelUpTimerAdult= setInterval(function () { 
        if (levelUpTimeAdult > 0) { 
            levelUpTimeAdult--;          
            animationScreen.src = "gifs/levelup.gif";
        } else {
            clearInterval(levelUpTimerAdult); 
            animationScreen.src = "gifs/adult.gif";
        }
        }, 6000) // log every 3 seconds

};


// ===================================== Audio  =====================================//

// ------------------------- Play Beep ------------------------- //

function playAudio() {
    beep.play();
  };

// ------------------------- Pause Beep ------------------------- //

// function pauseAudio(event) {
//     if (event.target.classList.contains('.buttons')) {
//         beepTime = 0;
//         clearInterval(beepTimer); 
//         }
// };

// feedButton.addEventListener('click', pauseAudio);
// playButton.addEventListener('click', pauseAudio);
// napButton.addEventListener('click', pauseAudio);


// // ------------------------- Beep Beep Interval ------------------------- //

// let beepTime = 10; // will beep for 5 seconds unless otherwise 

// function startBeeping () {
//     const beepTimer = setInterval(function () { 
//         if (time > 0) { 
//             time--;
//             playAudio();
//         } else {
//             clearInterval(beepTimer); 
//         }
//         }, 3000) // beeps every 3 seconds 
//  };
