// Setup timer
var timerEl = document.getElementById('timer');
timerEl.textContent = 'Time: ' + 0;

// Select HTML eleents and store as variables for populateQuizObjects();
var quizContainer = document.getElementById('startButton');
var startButton = document.getElementById('startButton');
var quizButtonGroup = document.getElementById('quizButtonGroup');
var quizParagraph = document.getElementById('quizParagraph');
var quizHeader = document.getElementById('quizHeader');


// Question and Answer objects (start with 1 in a simple form)
var quizObject1 = {
    question : 'Question 1 __________',
    answer : ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    result : [false, true, false, false],
    message : ['Wrong!', 'Correct!']
}

// Timer that will count down from 75, currently set lower for testing
function timer() {
    var timeRemaining = 3;
  
    // every second (1000 milliseconds, second argument of setInterval & set at end of anonymous function)
    var timeInterval = setInterval(function () {
  
      // if timer has 1 or more seconds left, subtract one every second and display new value
      if (timeRemaining >= 0) {
        timerEl.textContent = 'Time: ' + timeRemaining;
        timeRemaining--;
        // console.log(timeRemaining);
      } 
      // otherwise, reset time interval, 
      else {
        clearInterval(timeInterval);
        timerEl.textContent = 'Time: ' + 0;
        timeExpired();
      }
    }, 1000);
  }

  function populateQuizObjects() {
    //remove start button and quiz paragraph for "clean slate"
    startButton.remove();
    quizParagraph.remove();

    // Replace header text with question 1 for now
    quizHeader.textContent = quizObject1.question;
    // removing class to put text back to left isn't working
    quizContainer.classList.remove('text-center');

    // Loop through and put question buttons into quizButtonGroup div (where start button was)
    for (var i = 0; i < quizObject1.answer.length; i++) {
        quizButtonGroup.innerHTML += '<button type="button" class="d-block mt-2 btn btn-primary">' + quizObject1.answer[i] + '</button>';
        console.log(quizObject1.result[i]);
    }

    // need this to be part of the for loop too
    // if (quizObject1.answer[i] === true) {
    //     alert("Correct! We need to add points.");
    // }
    // else {
    //     alert("False, we need to subtract time");
    // }

  };
  
  // Run the timer function, this needs to be hooked to the "Start Quiz" button.
  document.getElementById('startButton').onclick = function(){
    timer();
    populateQuizObjects();
  };


  // Setup what happens when time runs out.
  function timeExpired() {
    alert('Time Expired.');
  };


// SECOND TO-DO: I'll try setting up the quiz questions and related elements as objects, make them flexible so they could be used for everything after the "menu". 
// Arrays within the objects for questions and answers? 
// Loop through & populate answer buttons with their text and true / false logic.  


// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button

// THEN a timer starts and I am presented with a question
// WHEN I answer a question

// THEN I am presented with another question
// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0

// THEN the game is over
// WHEN the game is over

// THEN I can save my initials and score