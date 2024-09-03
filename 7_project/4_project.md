# Project 4 (Guessing game)

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=3-DigitalClock%2Fchaiaurcode.js,3-DigitalClock%2Findex.html,4-GuessTheNumber%2Findex.html)

```javascript

let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#subt");
const UserInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess=parseInt(UserInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`write enter a valid number`)
  }else if(guess < 1){
    alert(`enter number more than 1`)
  }
  else if(guess > 100){
    alert(`enter number less than 100`)
  }else{
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage('You guessed it right');
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`guess is too low`);
  }
  else if(guess > randomNumber){
    displayMessage(`guess is too high`);
  }
}

function displayGuess(guess){
  UserInput.value ='';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  UserInput.value = ''
  UserInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newgame">start new game </h2>`;
  startOver.appendChild(p);
  playGame = false
  startGame();
}

function startGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess=1
    guessSlot.innerHTML= ""
    remaining.innerHTML = `${11-numGuess}`;
    UserInput.removeAttribute("disabled")
    startOver.removeChild(p)

    playGame=true
  });
  
}

```