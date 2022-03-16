console.log("Loading JS file");

//VARIABLES
var startBtn = document.getElementById("startBtn");

var timerElement = document.getElementById("timerCount");

var time;
var timerNum;

//FUNCTIONS
function startQuiz() {
  console.log("Starting quiz Challenge");
  //start the clock
  //hide divs or show divs
  startTime();
}

function startTime() {
  timerNum = 100;
  timeInterval = setInterval(function () {
    timerNum--;
    timerElement.textContent = timerNum;

    if (timerNum === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

//EVENT LISTENER
startBtn.addEventListener("click", startQuiz);
