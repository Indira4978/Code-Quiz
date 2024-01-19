## functions needed

- start the timer --- ok

- hide "start" button ---- ok

- display the first question --- ok

- display the answers options in buttons - ok - first questions

- validate the answers
  -- correct : play sounds + green
  -- wrong: play sound + red

- add 10pts to score when correct answer selected

- take 10s off time remaining when wrong selected -- ok

- do not allow for another option to be selected

- move to next question after one second

- after last question, display score

- promt user to enter their score

- store scores

display score when "view high scores" is clicked

// //QUIZ//

// //Display questions and choices // will need loop
// function displayQuestions(0){
// var questionsTitle = document.getElementById("question-title");
// var answersChoices = document.getElementById("choices");

// // questions
// questionsTitle.textContent = quizQuestions[0].question;

// //answers
// answersChoices.innerHTML ="";

// }
// //start quiz when start button is clicked

// // function startQuiz(0) {

// // var questionText = document.createTextNode(quizQuestions[0].question);

// // quizQuestions[0].options.forEach(function (option) {

// // optionButton.addEventListener('click', function () {
// // checkAnswer(0, option);
// // });
// // });

// // }
// // function displayQuestion(0)

// TIMER FUNCTIONLALITY:
// Add 10s back when wrong answer selected --> write a function to be added to all questions
// Get time to be displayed in minutes in countDown.textContent = count;
//When timer finishes - display message on page - OK

//QUIZ FUNCTIONALITIES
//displays first question

// **_quiz function_**//
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
