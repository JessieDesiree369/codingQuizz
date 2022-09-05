let initials = document.getElementById("usrInitials")
var qDisplay = document.getElementById("qDisplay")
var optionsDiv = document.getElementById("optionsDiv")
var showTime = document.getElementById("timeDisplay")
var finalScore = document.getElementById("finalScore")

var optn1 = document.getElementById("abtn1")
var optn2 = document.getElementById("abtn2")
var optn3 = document.getElementById("abtn3")
var optn4 = document.getElementById("abtn4")

var questionIndex = 0;
var scoreCount = 0;
var askingRN;
var timelft = 60;

var theQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    options: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed within ____.",
    options: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within ____ when being assigned to variables.",
    options: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

function countdown() {
  var timeInt = setInterval(function () {
    timelft--;
    showTime.innerText = timelft

    if (timelft === 0) {
      clearInterval(timeInt);
      quizFin()
      return;
    }
  }, 1000);
}

function quizFin() {
  //show initials input screen
  document.getElementById("finScreen").style.display = "block";
  document.getElementById("theGame").style.display = "none";
}

function runQuiz() {
  countdown()
  displayQandAs()
  // hide start screen & show q/a screen, start timer
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("theGame").style.display = "block";
}

function displayQandAs() {
  // ask question
  qDisplay.innerText = ""
  askingRN = theQuestions[questionIndex];
  qDisplay.innerText = askingRN.question
  // show corresponding answer options
  optn1.innerHTML = askingRN.options[0];
  optn1.setAttribute("value", askingRN.options[0]);
  optn1.onclick = evaluate;
  optn2.innerHTML = askingRN.options[1];
  optn2.setAttribute("value", askingRN.options[1]);
  optn2.onclick = evaluate;
  optn3.innerHTML = askingRN.options[2];
  optn3.setAttribute("value", askingRN.options[2]);
  optn3.onclick = evaluate;
  optn4.innerHTML = askingRN.options[3];
  optn4.setAttribute("value", askingRN.options[3]);
  optn4.onclick = evaluate;
};

function evaluate() {
  //if guessed right answer
  if (this.value === askingRN.answer) {
    // add points
    scoreCount = scoreCount + 5;
    finalScore.innerText = scoreCount
  } else {
    /// TO DO time penalty if guessed wrong***
    timelft -= 9;
    console.log("incorrect");
  }
  //next question if any remain
  if (questionIndex > 3) {
    //show initials input screen
    quizFin()
  } else {
    questionIndex++;
  }
  displayQandAs();
}
