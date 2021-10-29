// FIRST TO-DO: setup timer
var timerEl = document.getElementById('timer');
timerEl.textContent = "Time: " + 0;

// Timer that counts down from 75
function timer() {
    var timeRemaining = 3;
  
    // every second (1000 milliseconds, second argument of setInterval & set at end of anonymous function)
    var timeInterval = setInterval(function () {
  
      // if timer has 1 or more seconds left, subtract one every second and display new value
      if (timeRemaining >= 0) {
        timerEl.textContent = "Time: " + timeRemaining;
        timeRemaining--;
        console.log(timeRemaining);
      } 
      // otherwise, reset time interval, 
      else {
        clearInterval(timeInterval);
        timerEl.textContent = "Time: " + 0;
        timeExpired();
      }
    }, 1000);
  }
  
  // Setup what happens when time runs out.
  function timeExpired() {
    alert('Time Expired.');
  }

  // Run the timer function, this needs to be hooked to the "Start Quiz" button.
  timer();


// SECOND TO-DO: I'll try setting up the quiz questions and related elements as objects, make them flexible so they could be used for everything after the "menu". 
// Arrays within the objects for questions and answers? 
//Populate answer buttons with their text and true / false logic.  


// alert("script is linked!");

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