// when "start" button is clicked: - ok
//starts the timer - ok
var count = 5;
var countDown = document.getElementById("time");
var startButton = document.getElementById("start");

var timeOutMessage = document.getElementById("timeout-message");
var displayQuestion = document.getElementById("questions");

//start button event listener
startButton.addEventListener("click", startTimer);

//start the timer when clicking "start" button
function startTimer() {
  quizTimer = setInterval(function () {
    count--;
    //get time to be displayed in the time field on the page - ok
    countDown.textContent = count;

    //stops the timer when reached 0 - ok
    if (count <= 0) {
      clearInterval(quizTimer);
      timeOutMessage.textContent = "Time is up!"; // style later
    }
  }, 1000);
}

// console.log(quizQuestions);

// TIMER FUNCTIONLALITY:
// Add 10s back when wrong answer selected --> write a function to be added to all questions
// Get time to be displayed in minutes in countDown.textContent = count;
//When timer finishes - display message on page - OK

//QUIZ FUNCTIONALITIES
//displays first question

// ***quiz function***//
//displays questions with the answers in buttons

// use dom to access the question object
//
//display the answer options in button

//event listener checks for the option selected

// validate the answer

// if correct answer : display "correct" in green + correct answer sound
// if wrong answer: display "wrong" + wrong answer sound
// store score in local storage
// display score
