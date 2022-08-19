
let title = "";
let message = "";
let button = "";
let titleEl = document.getElementById("title-el");
let messageEl = document.getElementById("message-el");
let buttonEl = document.getElementById("button-el");
let scriptEl = document.getElementById("script");
var gridEl = document.getElementById("grid-el");
const squares = document.querySelectorAll('.square');
const puffy = document.querySelector('.puffy');
const timeLeft = document.querySelector('#time-left');
let score = 0;

let result = 0;
let hitPosition;



message = "Want to play a round?";
title = "PuffWhack!";
button = "Start Game!";

titleEl.textContent = title;
messageEl.textContent = message;
buttonEl.textContent = button;



function changeMessage(msg) {
    message = msg;
    messageEl.textContent = message;
};

function changeTitle(tle) {               
    title = tle;
    titleEl.textContent = title;
};

function changeButton(btn) {
    button = btn;
    buttonEl.textContent = button;
};

function hideButton() {
    buttonEl.style.display = "none";
};

function startGame() {
    console.log("Game has started!");
    changeMessage("Time Left: ");
    changeTitle("Score: 0");
    changeButton();
    hideButton();
    let currentTime = parseInt(prompt("what do you want the timer to be? It has to be number"));
    let answerPrompt = prompt("what do you want the gamemode to be? E for easy, N for normal, H for hardcore. I for impossible mode. B for baby mode. PLEASE UPPERCASE YOUR ANSWER TO THE QUESTION YOU MUST OR IT WILL GLITCH");
    if (answerPrompt == 'E') {
        fastNumber = 1000
    }
    if (answerPrompt == 'N') {
        fastNumber = 500
    }
    if (answerPrompt == 'H') {
        fastNumber = 250
    }
    if (answerPrompt == 'I') {
        fastNumber = 50
    }
    if (answerPrompt == 'B') {
        fastNumber = 2000
    }
    console.log(currentTime)
    randomSquare();
    moveMole();
    let countDownTimerId = setInterval(countDown, 1000);
    


function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('puffy')
    })
  
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('puffy')
  
    hitPosition = randomSquare.id
  }

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++;
        score = result;
        titleEl.textContent = "Score: " + score
        hitPosition = null;
      }
    })
  });

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, fastNumber);
};

function countDown () {
    currentTime--
    messageEl.textContent = 'Time Left Before Puff Yell: ' + currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        alert('TIME OVER! your final score is: ' + result + '. also refresh to play again!')
    }
}


};

//border: solid goldenrod 1px; for the squares and the .square in css