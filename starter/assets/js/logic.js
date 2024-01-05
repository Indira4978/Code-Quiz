// when "start" button is clicked:
//starts the timer
var count = 120;
var startButton = document.getElementById("start");
var quizTimer;
startButton.addEventListener("click", function () {
  quizTimer = setInterval(function () {
    count--;
    console.log(count);

    if (count === 0) {
      clearInterval(quizTimer);
      console.log("Time is up!");
    }
  }, 1000);
});

//--> event listener calls the function that we will define
//displays first question
// function displayQuestion(0) {

//     var questionText = document.createTextNode(quizQuestions[0].question);

//     quizQuestions[0].options.forEach(function (option) {

//         optionButton.addEventListener('click', function () {
//             checkAnswer(0, option);
//         });
//     });

//     // ... (rest of the code)
// }

//starts the timer
//--> event listener calls the function that we will define

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
