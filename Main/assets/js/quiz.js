// varibles 
var startEl = document.querySelector(".start-button");
var timerEl = document.querySelector("#timer");
var highScoresBtn = document.querySelector("#high-scores");
var startScreenEl = document.getElementById("start-screen");
var questionScreenEl = document.querySelector("#question-screen");
var highScoresScreenEl = document.querySelector("#high-scores-screen");
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
// score
var score = 0;

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
        title: 'Where in an HTML file would a programmer put a bootstrap link',
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

// hide questions/ high scores and timer
questionScreenEl.classList.add("hidden");
highScoresScreenEl.classList.add("hidden");
timerEl.classList.add("hidden");

// decalre functions
function startGanme() {
    startTimer();
    hideStartScreen();
    displayQuestions();
}

function startTimer() {
    var timeLeft = setInterval(function (){
        timer--;
        timerEl.textContent = "Timer: " + timer;
        if (timer === 0) {
            clearInterval(timeLeft);
            // call logic for when timer runs out
            alert("Times Up!");
            questionScreenEl.classList.add("hidden");
            highScoresScreenEl.classList.remove("hidden");

        }
    }, 1000)
}

function hideStartScreen() {
    // set the start screen to display none
    startScreenEl.classList.add("hidden");
    highScoresBtn.classList.add("hidden");

    // display the questions screen
    questionScreenEl.classList.remove("hidden");
}

function displayQuestions() {

    // set the varibles to the question/answer values
    question.textContent = questionsArray[questionNumber].title;
    buttonOne.textContent = questionsArray[questionNumber].options[0];
    buttonTwo.textContent = questionsArray[questionNumber].options[1];
    buttonThree.textContent = questionsArray[questionNumber].options[2];
    buttonFour.textContent = questionsArray[questionNumber].options[3];   

}

function clickedButton(event) {
    if (event.target.className === "answer"){
        var userAnswer = event.target.innerText;
        // if the answer is correct
        if (userAnswer === questionsArray[questionNumber].correctOption) {
            // alert the user 
            alert("Correct!")
            // increment question counter
            questionNumber++;
            // if the question number had reached the end of the array end the quiz
            if (questionNumber === questionsArray.length) {
                quizEnd();
            }
            // else display the next set of questions
            else {
                displayQuestions();
            }
        }
        // if the answer is incorrect
        else {
            alert("Incorrect :(");
            timer = timer - 10;
            questionNumber++;
            if (questionNumber === questionsArray.length) {
                quizEnd();
            }
            // else display the next set of questions
            else {
                displayQuestions();
            }
        }
    
    }
}

// function for end of test 
function quizEnd () {
    var score = timer;
    clearInterval(timer);
    // hide the questions
    questionScreenEl.classList.add("hidden");
    // display high scores
    highScoresScreenEl.classList.remove("hidden");
}


questionScreenEl.addEventListener('click', clickedButton);


// event listener/start app
    // clicks start button, timer starts, first question displayed
    startEl.addEventListener("click", startGanme);