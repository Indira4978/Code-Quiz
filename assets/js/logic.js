// when "start" button is clicked: - ok
//starts the timer - ok
var count = 120;
var countDown = document.getElementById("time");
var startButton = document.getElementById("start");
var timeOutMessage = document.getElementById("timeout-message");

var questionContainer = document.getElementById("questions-container");

var questionElement = document.getElementById("question-title");

var answerOptionsButtons = document.getElementById("choices-btns");

var nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;

var score = 0;
var answerValidation = document.getElementById("answer-validation");
var endOfQuiz = document.getElementById("end-of-quiz");

//start button event listener
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  //un-hide the question container
  questionContainer.classList.remove("hide");
  //display the first question
  currentQuestionIndex = 0;

  //create and display "next question" button
  // nextButton.classList.remove("hide");

  // nextButton.innerHTML = "Next Question";

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
  var correctAudio = new Audio("./assets/sfx/correct.wav");
  var wrongAudio = new Audio("./assets/sfx/incorrect.wav");

  //display answers
  currentQuestion.options.forEach((answer) => {
    button = document.createElement("button"); // global
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerOptionsButtons.appendChild(button);

    button.addEventListener("click", function () {
      var allButtons = document.querySelectorAll(".btn");
      allButtons.forEach((btn) => {
        btn.style.backgroundColor = "";
        //make sure another answer is not selected
        btn.disabled = true;
      });

      if (answer.correct === true) {
        answerValidation.classList.remove("hide");
        answerValidation.textContent = "CORRECT !";
        correctAudio.play();
        // answer.correct.style.backgroundColor = "green";
        score += 10;
      } else {
        answerValidation.classList.remove("hide");
        answerValidation.textContent = "WRONG !";
        wrongAudio.play();
        // button.style.backgroundColor = "red";

        //remove 10s from time
        count = count - 10;
      }
      // show next question after 1s
      setTimeout(function () {
        endOfQuiz;
        answerOptionsButtons.textContent = "";
        answerValidation.classList.add("hide");
        currentQuestionIndex++;
        // check if end of quiz
        if (currentQuestionIndex < quizQuestions.length) {
          displayQuestion();
        } else {
          // End quiz
          questionContainer.classList.add("hide");
          endOfQuiz.classList.remove("hide");
          endOfQuiz.textContent = "That's it!  " + "  You scored: " + score;
          console.log("Quiz ended. Score: " + score);
        }
      }, 1000);
    });
  });
}

// nextButton.addEventListener("click", function () {
//   //Remove previous question and answers
//   questionElement.textContent = "";
//   answerOptionsButtons.textContent = "";
//   // Move to the next question index until ;

//   currentQuestionIndex++;
//   displayQuestion();
// });

console.log(quizQuestions);
