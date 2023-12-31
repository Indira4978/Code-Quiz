// when "start" button is clicked: - ok
//starts the timer - ok
var count = 5;
var countDown = document.getElementById("time");
var startButton = document.getElementById("start");
var timeOutMessage = document.getElementById("timeout-message");

var questionContainer = document.getElementById("questions-container");

var questionElement = document.getElementById("question-title");

var answerOptionsButtons = document.getElementById("choices-btns");

var nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;

var score = 0;

//start button event listener
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  //un-hide the question container
  questionContainer.classList.remove("hide");
  //display the first question
  currentQuestionIndex = 0;

  //create and display "next question" button
  nextButton.classList.remove("hide");

  nextButton.innerHTML = "Next Question";

  // show  question
  displayQuestion();
  // setNextQuestion();

  // //start the timer when clicking "start" button
  function startTimer() {
    //hide quiz button
    startButton.classList.add("hide");
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
  startTimer();
}

function displayQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  //display answers
  currentQuestion.options.forEach((answer) => {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerOptionsButtons.appendChild(button);
  });
}

// function displayNextQuestion() {
//   //when "next question" button is clicked, move to next index of the quizQuestion array.
// //--> EVENT LISTENER + function to move to next index
// }

nextButton.addEventListener("click", function () {
  //Remove previous question and answers
  questionElement.textContent = "";
  answerOptionsButtons.textContent = "";
  // Move to the next question index
  currentQuestionIndex++;
  displayQuestion();
});
// var firstQuestion = quizQuestions[0].question;

// console.log(firstQuestion);
// var firstQuestion = document.getElementById("question-title");
// var answer

// function showFirstQuestion(question) {
//   firstQuestion.innerText = quizQuestions[0].question;
// }

// function setNextQuestion() {
//   displayQuestion(quizQuestions[currentQuestionIndex]);
// }

// function displayQuestion(questionElement) {
//   questionElement.innerText =
//     questionElement[currentQuestionIndex].quizQuestions.question;
//   // Clear previous answer options buttons
//   answerOptionsButtons.innerHTML = "";

//   // Display answer options
//   for (var i = 0; i < quizQuestions.options.length; i++) {
//     var choiceButton = document.createElement("button");
//     choiceButton.textContent = quizQuestions.options[i];
//     answerOptionsButtons.appendChild(choiceButton);
//   }
// }
