// ------------------------- Tamagotchi Object ------------------------- //

const tamagotchi = {
    name: '', // from the prompt 
    age: 0,
    needs: ['is hungry!!!!', 'wants to play!!!!', 'says it is nap time...'],
    evolution: 'Egg',
    animations: ['bounce 2s linear','flash 2s linear','pulse 2s linear','rubberBand 2s linear','shakeX 2s linear','shakeY 2s linear','headShake 2s linear', 'swing 2s linear','tada 2s linear','wobble 2s linear','jello 2s linear','heartBeat 2s linear'],
    evolve () {
    }
};

// ------------------------- Cached DOM Elements ------------------------- //

const startButton = document.querySelector('#start-button');
const userInputName = document.querySelector('input'); 
const nameH3 = document.getElementById('name');
const ageH3 = document.getElementById('age');
const gameConsole = document.querySelector('.game-console');
const gameButtons = document.querySelector('.buttons');
const feedButton = document.getElementById('feed');
const playButton = document.getElementById('play');
const napButton = document.getElementById('nap');
let statsSection = document.querySelector('.stats');
let randomStatArr = [];
let hungerIconsUL = document.getElementById('hungerStars');
let boredomIconsUL = document.getElementById('boredomStars');
let sleepIconsUL = document.getElementById('sleepinessStars');
const poops = document.querySelector('.poops');
const beep = document.getElementById("beep");
const luna = document.querySelector('.luna-animation');
const lunaMoon = document.querySelector('.moon');

// ------------------------- Event Listeners ------------------------- //

startButton.addEventListener('click', addBasicTamagotchiInfo); 
feedButton.addEventListener('click', removeHungerIcon);
playButton.addEventListener('click', removeBoredomIcon);
napButton.addEventListener('click', removeSleepIcon);
poops.addEventListener('click', cleanPoop);
luna.addEventListener ('mouseover', animateLuna);

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

let time = 180; // 3 min 

function startTimers() {
    const timer = setInterval(function () { 
        if (time > 0) { 
            time--;
            console.log(time);           
            dieOfNeglect(time);

        } else {
            clearInterval(timer); 
        }
        }, 1000) // log time every second

    const needsTimer = setInterval(function () { 
        if (time > 0) { 
            time--;
            // playAudio();        
        } else {
            clearInterval(needsTimer); 
        }
        }, 30000) // generate a new need every 30 seconds

    const addRandomIconTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            addRandomIcon();
        } 
        else {
            clearInterval(addRandomIconTimer); 
        }
        }, 2000) // add a random stat every 20 seconds
       
    const poopTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            poop();
        } 
        else {
            clearInterval(poopTimer); 
        }
        }, 40000) // poop every 50 second (poop = sailorv)       
     
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
        }, 15000) //  add one year to age every 30 seconds, make this proportional to game play time, and then chaneg the evolve times 
            
    const dieOfOldAgeTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
        } 
        else {
            die();
            clearInterval(dieOfOldAgeTimer); 
        }
        
        }, 180000) // this should be equal to the gameplay time 
}; 


// ------------------------- Update Age ------------------------- //

function updateAge () { 
    ageH3.innerText = `Age: ${tamagotchi.age}`; 
};

// -------------------------  Poop ------------------------- //

function poop() {
    const poop = document.createElement('img');
    poop.classList = 'made-some-poops';
    poop.setAttribute('src','sm.png');
    poops.appendChild(poop);
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

function die() {
    const deadGif  = document.createElement('img');
    deadGif.setAttribute('src', "gifs/lunasad.gif");
    deadGif.setAttribute('class', 'gif');
    gameConsole.insertBefore(deadGif, gameConsole[0]);
    time = 0;
    removeGameButtons();
};

// -------------------------  Die of Neglect  ------------------------- //

function dieOfNeglect() {

    let hungerIconsULength = hungerIconsUL.children.length;
    let boredomIconsULength = boredomIconsUL.children.length;
    let sleepIconsULength = sleepIconsUL.children.length;

    if (hungerIconsULength > 9 || boredomIconsULength > 9 || sleepIconsULength > 9) {
        die ();
        
    } else {
        return;
    }
};

// -------------------------  Evolve ------------------------- //

function evolve () {    

        let currentAge = tamagotchi.age;
    
        if (currentAge > 4) { // adult
            levelupTeenager(); 
            lunaMoon.style.backgroundColor = '#e8bb54';
        } else // teenager
            return;
    };

// =====================================  Animations =====================================//

// -------------------------  Hatch ------------------------- //

let eggHatchTime = 1; // back to 1

function hatchEgg () {
    const hatchGif  = document.createElement('img');
    hatchGif.setAttribute('src', "gifs/kitten.gif");
    hatchGif.setAttribute('class', 'gif');
    gameConsole.insertBefore(hatchGif, gameConsole[0]);
    
    const hatchEggTimer = setInterval(function () { 
        if (eggHatchTime > 0) { 
            eggHatchTime--;     
        } else {
            gameConsole.removeChild(hatchGif);
            clearInterval(hatchEggTimer); 
        }
        }, 2000) // time to lapse gif
};

// -------------------------  Evolve to Teenager  ------------------------- //

let levelUpTimeTeenager = 1;

function levelupTeenager () {

    const levelUpGif  = document.createElement('img');
    levelUpGif.setAttribute('src', "gifs/sailortransform.gif");
    levelUpGif.setAttribute('class', 'gif');
    gameConsole.insertBefore(levelUpGif, gameConsole[0]);
    
    const levelUpTimerTeenager = setInterval(function () { 
        if (levelUpTimeTeenager > 0) { 
            levelUpTimeTeenager--;          
     
        } else {
            clearInterval(levelUpTimerTeenager); 
            gameConsole.removeChild(levelUpGif);
            levelUpTimeTeenager = 0;   
        }
        }, 4800) // log every 3 seconds

};

// -------------------------  Evolve to Adult  ------------------------- //

let levelUpTimeAdult = 1;

function levelupAdult () {

    const levelUpGif  = document.createElement('img');
    levelUpGif.setAttribute('src', "gifs/sailortransform.gif");
    gameConsole.insertBefore(levelUpGif, gameConsole[0]);

    const levelUpTimerAdult= setInterval(function () { 
        if (levelUpTimeAdult > 0) { 
            levelUpTimeAdult--;          
        } else {
            clearInterval(levelUpTimerAdult); 
            gameConsole.removeChild(levelUpGif);
        }
        }, 4800) // log every 3 seconds

};


// ===================================== Audio  =====================================//

// ------------------------- Play Beep ------------------------- //

function playAudio() {
    beep.play();
  };

  // -------------------------  Animate Luna ------------------------- //

function animateLuna() {
    const randomNumber = Math.floor(Math.random()*tamagotchi.animations.length);  
    const randomAnimation = tamagotchi.animations[randomNumber];  
    luna.style.animation = randomAnimation;
}; animateLuna();

