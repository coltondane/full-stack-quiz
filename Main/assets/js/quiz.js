// varibles 
var startEl = document.querySelector(".start-button");
var timerEl = document.querySelector("#timer");
var highScoresBtn = document.querySelector("#high-scores");
var startScreenEl = document.getElementById("start-screen");
var questionScreenEl = document.querySelector("#question-screen");
// question/answer buttons
var question = document.querySelector("#question");
var buttonOne = document.querySelector("#a");
var buttonTwo = document.querySelector("#b");
var buttonThree = document.querySelector("#c");
var buttonFour = document.querySelector("#d");
// timer
var timer = 76;
// question
var questionNumber = 0;

questionsArray = [
    {
        title: 'Which set of characters defines an array?',
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
    
    // display the first set of questions/answers
    questionScreenEl.classList.remove("hidden");

    question.textContent = questionsArray[0].title;
    
    buttonOne.textContent = questionsArray[0].options[0];
    buttonTwo.textContent = questionsArray[0].options[1];
    buttonThree.textContent = questionsArray[0].options[2];
    buttonFour.textContent = questionsArray[0].options[3];

    
}

function clickedButton(event) {
    if (event.target.className === "answer"){
        var Useranswer = event.target.innerText;
    }

}

questionScreenEl.addEventListener('click', clickedButton);


// event listener/start app
    // clicks start button, timer starts, first question displayed
    startEl.addEventListener("click", startGanme);