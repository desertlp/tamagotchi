Welcome to Sailor Moon Tamagotchi. Inspired by the beloved games and shows of the nineties. 

On load, you will see the iconic tamagotchi egg ready to accept a name of your choosing. Input your name and click start to begin playing the game. Upon clicking start, an animation of Luna, Sailor V's beloved intergalatic cat, appears, showcasing her adoption day and the start of your adoption of your new Tamagotchi. 

The games console will load, and display a Tamagotchi animation of Luna. Mouse over Luna to see her do some tricks! Luna must be cared for, fed, played with, and put down for a nap. Watch the icons below the screen for a visual display of Luna's needs. Click the corresponding buttons, icecream for feeding, ball for playing, and a bed for a nap, to satisfy Luna's most pressing need(s).Click a button to satisfy that need. Hear a beep? Luna needs something. Careful to leave Luna unattended, as the stats will increase on their own, at random.  If any one of Luna's stats reached 10, Luna will die, displaying a very dissapointed Luna animation. 

Occassionally, you will be visited by Sailor V! This is a rare opportunity as she is quite busy these days. Click on Sailor V to say hello and send her back off to fight Queen Beryl. 

As Luna ages, she will evolve, once at age 3 and once again at 6, if you have successfully kept her in good health. Each evolution stage, the inconic Sailor V transformation will play, briefly. Take a glance at Luna to see how she has changed. 

Keep taking care of Luna until time eventually takes our poor kitty away, into the stars of the Milky Way, due to natural causes associated with old age. 

Happy gaming, Sailors. 
























////////////////// Challenge Code ////////////////


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

// -------------------------  Evolve Function Bug ------------------------- //

// function generateRandomNeedMessage () {
//     const randomNumber = Math.floor(Math.random()*3);  
//     const randomNeed = tamagotchi.needs[randomNumber];    
//     randomNeedCallOut.innerText = `${tamagotchi.name} ${randomNeed}`;
//     console.log(`Tamagotchi needs ${randomNeed}`);
// }; 

/ function evolve () {    

//     let currentAge = tamagotchi.age;

//     if (currentAge > 5) { // adult
//         levelupAdult ();
//         lunaMoon.style.backgroundColor = '#e8bb54';
//     } else if (currentAge < 4) { // baby
//     } else // teenager
//         levelupTeenager(); 
// };
