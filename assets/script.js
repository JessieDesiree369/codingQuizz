let initials = document.getElementById("usrInitials")
var qDisplay = document.getElementById("qDisplay")  
var optionsDiv = document.getElementById("optionsDiv")

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
      question:"A very useful tool used during development and debugging for printing content to the debugger is:",
      options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];


function runQuiz() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("theGame").style.display = "block"
    displayQandAs()
}
    //loop for each question
var displayQandAs = function() {
    for (var i = 0; i < theQuestions.length; i++) {
    qDisplay.innerText = theQuestions[i].question

      // loop to create and append buttons for each option
        // for (var x = 0; x < theQuestions[i].options.length; x++) {
        // var answerbutton = document.createElement('button')
        // answerbutton.innerText = options[x]
        // optionsDiv.append(answerbutton)
        // }
    }
};
