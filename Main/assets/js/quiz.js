// varibles 
var startEl = document.querySelector(".start-button");
var timerEl = document.querySelector("#timer");
var highScoresBtn = document.querySelector("#high-scores");
var startScreenEl = document.getElementById("start-screen");
var questionScreenEl = document.querySelector("#question-screen");
var timer = 76;

questions = [
    {
        title: 'Which set of characters defines an array',
        options: ['[]', '{}', '()', '||'],
        correctOption: '[]'
    },
    {
        title: 'When stating multiple conditions within one "if" statement, which set(s) of charatcers can be used',
        options: ['&& or ||', '++ or --', '**', '==='],
        correctOption: '&& or ||'
    },
    {
        title: 'Where in an HTML file wpuld a programmer put a bootstrap link',
        options: ['in the file header', 'in the body element', 'in the file head', 'at the bottom of the file'],
        correctOption: 'in the file head'
    },
    {
        title: 'Which of the following is an example of a pseudo-element in CSS',
        options: [':hover', '.class-name', 'input, button', '::before'],
        correctOption: '::before'
    },
    {
        title: 'What is the most common language used while programming?',
        options: ['Python', 'Profanity', 'C++', 'mySQL'],
        correctOption: 'Profanity'
    }
]

// hide questions and timer
questionScreenEl.classList.add("hidden");
timerEl.classList.add("hidden");

// decalre functions
function startGanme() {
    startTimer();
    questionScreen();
}

function startTimer() {
    var timeLeft = setInterval(function (){
        timer--;
        timerEl.textContent = "Timer: " + timer;
        if (timer === 0) {
            clearInterval(timeLeft);
            // call logic for when timer runs out
        }
    }, 1000)
}

function questionScreen() {
    // set the start screen to display none
    startScreenEl.classList.add("hidden");
    highScoresBtn.classList.add("hidden");
    
    // display the first set of questions
    questionScreenEl.classList.remove("hidden");
    
}

function clickedButton(event) {
    if (event.target.className === "answer"){
        var answer = event.target.innerText;
        console.log(answer);
    }
}

questionScreenEl.addEventListener('click', clickedButton);


// event listener/start app
    // clicks start button, timer starts, first question displayed
    startEl.addEventListener("click", startGanme);