let initials = document.getElementById("usrInitials")
var qDisplay = document.getElementById("qDisplay")
var optionsDiv = document.getElementById("optionsDiv")
var showTime = document.getElementById("timeDisplay")

var optn1 = document.getElementById("abtn1")
var optn1 = document.getElementById("abtn2")
var optn1 = document.getElementById("abtn3")
var optn1 = document.getElementById("abtn4")

var questionIndex = 0;

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


function runQuiz() {
  // hide start screen & show q/a screen
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("theGame").style.display = "block"

  //countdown begins
  var timelft = 60;
  var counter = setInterval(countdown, 1000);

  function countdown() {
    timelft = timelft - 1;
    if (timelft <= 0) {
      clearInterval(counter);
      //countdown ended, display initials input screen
      return;
    }
    // code for showing the number of seconds left <here>
    showTime.innerText = timelft
  }
  displayQandAs()
}

var displayQandAs = function () {
  // ask question
  var askingRN = theQuestions[questionIndex];
  qDisplay.innerText = askingRN.question
  // show corresponding questions !!!NOT WORKING YET!!!
  optn1.textContent = askingRN[options][0];
  console.log(optn1)
};


