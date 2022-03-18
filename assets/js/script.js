console.log("Loading JS file");

//VARIABLES
var timerEl = document.getElementById("timerCount");
var start = document.getElementById("startBtn");
var guide = document.getElementsByClassName("guide");
var qBox = document.getElementsByClassName("qBox");
var finScreen = document.getElementsByClassName("finScreen");

var questionsEl = document.getElementById("questions");
var choiceEl = document.getElementById("choice");

var time;
var timerNum;

//list all Questions and Choices
var quizQuestions = [
  {
    question: "What is HTML?",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "What is Question 2 ?",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "What is HTML?",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: "What is Question 2 ?",
    choices: ["A", "B", "C", "D"],
    answer: "C",
  },
];
//var currentQIndex = 0; //starting index

var questionIndex = Math.floor(Math.random() * quizQuestions.length);
//console.log(questionIndex);
// console.log(quizQuestions[1]);
// console.log(quizQuestions[1].answer);
// console.log(quizQuestions[1].question);
// console.log(quizQuestions[1].choices[2]);

//Start Quiz
function startQuiz() {
  startTime();
  displayQuestions();
}

//start the clock
function startTime() {
  timerNum = 100;
  timeInterval = setInterval(function () {
    timerNum--;
    timerEl.textContent = timerNum;

    if (timerNum === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function displayQuestions() {
  questionsEl.textContent = quizQuestions[questionIndex].question;
  //choiceEl.textContent = quizQuestions[1].choices;

  //loop through all choices for a question
  for (var i = 0; i < quizQuestions[questionIndex].choices.length; i++) {
    //create a button for each option
    var btn = document.createElement("button");
    //setting the text for the button
    btn.textContent = quizQuestions[questionIndex].choices[i];
    //add event listiner
    btn.addEventListener("click", checkChoice);
    //append it to the div choice
    choiceEl.append(btn);
  }
}

function checkChoice() {
  //console.log("Button clicked is ", this.textContent);
  var answer = quizQuestions[questionIndex].answer;
  if (this.textContent === answer) {
    alert("Correct!!");
  } else {
    alert("you can do better !!");
  }
  //generate random index
  //call displayQ
}

//hide divs or show divs

//EVENT LISTENER
start.addEventListener("click", startQuiz);
