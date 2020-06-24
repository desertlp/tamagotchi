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
// play buttons
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
    const userInputNameValue = document.querySelector('input').value;    
    nameH3.innerText = `${userInputNameValue}`;
    gameConsole.removeChild(startButton);
    gameConsole.removeChild(userInputName);
    ageH3.innerText = `Age: ${tamagotchi.age}`; 
    // hatch egg animation
    // evolutionH3.innerText = `Evolution: ${tamagotchi.evolution}`;
    startTimers();
}; 

// -------------------------  Timers ------------------------- //

let time = 120; // 2min 

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
        } else {
            clearInterval(needsTimer); 
        }
        }, 10000) // generate a new need every 10 seconds

    const addRandomIconTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
            addRandomIcon();
        } 
        else {
            clearInterval(addRandomIconTimer); 
        }
        }, 1000) // remove a random star every 5 seconds
       
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
        }, 30000) //  add one year to age every 30 seconds
            
    const dieOfOldAgeTimer = setInterval(function () { 
        if (time > 0) { 
            time--; 
        } 
        else {
            dieOfOldAge();
            clearInterval(dieOfOldAgeTimer); 
        }
        }, 120000) // die after 2min  
}; 

// -------------------------  Random Need Generator ------------------------- //

function generateRandomNeedMessage () {
    const randomNumber = Math.floor(Math.random()*3);  
    const randomNeed = tamagotchi.needs[randomNumber];
    console.log(`Tamagotchi needs ${randomNeed}`);
    // make an animation that says something about being needy
}; 

// ------------------------- Update Age ------------------------- //

function updateAge () { 
    ageH3.innerText = `Age: ${tamagotchi.age}`; // method chaining 
};

// -------------------------  Poop ------------------------- //

function poop() {
    const poop = document.createElement('img');
    poop.classList = 'made-some-poops';
    poop.setAttribute('src', 'https://cdn.theatlantic.com/thumbor/_Je_YnGbWz6w4aolQWyuTyl05FE=/0x250:4874x2992/720x405/media/img/mt/2018/02/GettyImages_916017408/original.jpg');
    poops.appendChild(poop);
    if (poops.children.length > 1) {
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
// -------------------------  Die of Old Age  ------------------------- //

function dieOfOldAge() {
    console.log('he died of natural causes')
    // clear the screen, game over
};

// -------------------------  Die of Neglect  ------------------------- //

function dieOfNeglect() {

    let hungerIconsULength = hungerIconsUL.children.length;
    let boredomIconsULength = boredomIconsUL.children.length;
    let sleepIconsULength = sleepIconsUL.children.length;

    if (hungerIconsULength > 9 || boredomIconsULength > 9 || sleepIconsULength > 9) {
        console.log('died');
        time = 0;
        alert('you neglected your tamagotchi so he died');
    } else {
        return;
    }
};

// -------------------------  Evolve ------------------------- //

function evolve () {    

    let currentAge = tamagotchi.age;

    if (currentAge > 5) {
        alert('Evolution: Adult');
        // animation to adult 
        // display new adult tamagotchi image
    } else if (currentAge < 3) {
        alert(`Evolution: Baby`);
         // animation to Baby from egg on start 
            // display new baby tamagotchi image

    } else
        alert(`Evolution: Teenager`);
          // animation to Baby 
        // display new baby tamagotchi image

};

// -------------------------  Animations ------------------------- //


