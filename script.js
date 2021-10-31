// Setup timer
var timerEl = document.getElementById('timer');
timerEl.textContent = 'Time: ' + 0;

// Select HTML eleents and store as variables for populateQuizObjects();
var quizContainer = document.getElementById('quizContainer');
var startButton = document.getElementById('startButton');
var quizButtonGroup = document.getElementById('quizButtonGroup');
var quizParagraph = document.getElementById('quizParagraph');
var quizHeader = document.getElementById('quizHeader');
var answersGiven = 0;
var timeRemaining = 0;
var userScore = 0;
var finalUserScore = 0;
var quizTaker = '';

//  __________
// Question and Answer objects (start with 1 in a simple form)
// dynamically generate the answer numbers too

var quizObject1 = {
  question : 'Commonly used data types DO NOT include __________',
  answer : ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
  result : [false, false, true, false]
}

var quizObject2 = {
  question : 'The condition in an if / else statement is enclosed with __________',
  answer : ['1. quotes', '2. curly brackets', '3. paranthesis', '4. square brackets'],
  result : [false, false, true, false]
}

var quizObject3 = {
  question : 'Arrays in JavaScript can be used to store __________',
  answer : ['1. numbers and strings', '2. other arrarys', '3. booleans', '4. all of the above'],
  result : [false, false, false, true]
}

var quizObject4 = {
  question : 'String values must be enclosed within __________ when being assigned to variables.',
  answer : ['1. commas', '2. curly brackets', '3. quotes', '4. parathensis'],
  result : [false, false, true, false]
}

var quizObject5 = {
  question : 'A very useful tool used during development and debugging for printing content to the debugger is:',
  answer : ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
  result : [false, false, false, true]
}

// Timer that will count down from 75, currently set lower for testing
function timer() {
    timeRemaining = 75;
    // every second (1000 milliseconds, second argument of setInterval & set at end of anonymous function)
    var timeInterval = setInterval(function () {
  
      // if timer has 1 or more seconds left, subtract one every second and display new value
      if (timeRemaining >= 0 && answersGiven < 5) {
        timerEl.textContent = 'Time: ' + timeRemaining;
        timeRemaining--;
        // console.log(timeRemaining);
      } 

      else if (timeRemaining >= 0 && answersGiven >= 5) {
        clearInterval(timeInterval);
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
      // removing class to put text back to left isn't working
      quizContainer.classList.remove('text-center');

    // var answerCount = 0;
    // Loop through and put question buttons into quizButtonGroup div (where start button was)
    if (answersGiven===0) {
      populate1();
    }
    else if (answersGiven===1) {
      populate2();
    }
    else if (answersGiven===2) {
      populate3();
    }
    else if (answersGiven===3) {
      populate4();
    }
    else if (answersGiven===4) {
      populate5();
    }
    else {
      // alert('quiz done');
      allDone();
    }

  };

  function populate1() {
      // Replace header text with question 1 for now
      quizHeader.textContent = quizObject1.question;

      //remove start button and quiz paragraph for "clean slate"
      startButton.remove();
      quizParagraph.remove();

    for (var i = 0; i < quizObject1.answer.length; i++) {
      quizButtonGroup.innerHTML += `<button type="button" class="d-block mt-2 btn btn-primary" onclick="buttonHandler(${quizObject1.result[i]})">` + quizObject1.answer[i] + '</button>';
      console.log(quizObject1.result[i]);
    }

  };

  function populate2() {
    quizButtonGroup.innerHTML = '';

    // Replace header text with question 1 for now
    quizHeader.textContent = quizObject2.question;

    for (var i = 0; i < quizObject2.answer.length; i++) {
      quizButtonGroup.innerHTML += `<button type="button" class="d-block mt-2 btn btn-primary" onclick="buttonHandler(${quizObject2.result[i]})">` + quizObject2.answer[i] + '</button>';
      console.log(quizObject2.result[i]);
    }
  };

  function populate3() {
    quizButtonGroup.innerHTML = '';

    // Replace header text with question 1 for now
    quizHeader.textContent = quizObject3.question;

    for (var i = 0; i < quizObject3.answer.length; i++) {
      quizButtonGroup.innerHTML += `<button type="button" class="d-block mt-2 btn btn-primary" onclick="buttonHandler(${quizObject3.result[i]})">` + quizObject3.answer[i] + '</button>';
      console.log(quizObject3.result[i]);
    }
  };

  function populate4() {
    quizButtonGroup.innerHTML = '';

    // Replace header text with question 1 for now
    quizHeader.textContent = quizObject4.question;

    for (var i = 0; i < quizObject4.answer.length; i++) {
      quizButtonGroup.innerHTML += `<button type="button" class="d-block mt-2 btn btn-primary" onclick="buttonHandler(${quizObject4.result[i]})">` + quizObject4.answer[i] + '</button>';
      console.log(quizObject4.result[i]);
    }
  };

  function populate5() {
    quizButtonGroup.innerHTML = '';

    // Replace header text with question 1 for now
    quizHeader.textContent = quizObject5.question;

    for (var i = 0; i < quizObject5.answer.length; i++) {
      quizButtonGroup.innerHTML += `<button type="button" class="d-block mt-2 btn btn-primary" onclick="buttonHandler(${quizObject5.result[i]})">` + quizObject5.answer[i] + '</button>';
      console.log(quizObject5.result[i]);
    }
  };

  function allDone() {
    // Replace header text with question 1 for now
    finalUserScore = userScore + timeRemaining + 1
    quizHeader.textContent = "All done!";
    quizButtonGroup.innerHTML = 
    `<h4 class="py-1">Your final score is ${finalUserScore}</h4></br>
     <h4 class="py-1">Enter initials: <input type="text" id="initials" class="border align-middle d-inline"> <button type="button" class="d-inline mt-2 btn btn-primary align-baseline" onclick="submitHandler()"'>Submit</button></h4>`;

    timerEl.textContent = timeRemaining + 1;
  };

  function buttonHandler(arg) {
    console.log(arg);
      if (arg) {
        quizButtonGroup.innerHTML += "<hr><h3>Correct!</h3>";
        userScore = userScore + 5;
      }
      else {
        quizButtonGroup.innerHTML += "<hr><h3>Wrong!</h3>";
        timeRemaining = timeRemaining - 10;
      }

      answersGiven++;
      setTimeout(function(){
        populateQuizObjects(); 
      }, 1000);
      return(answersGiven);
  }

  function submitHandler() {
    // event.preventDefault();
    quizTaker = document.getElementById('initials').value;
    alert("thanks for playing " + quizTaker + "!");
    setTimeout(function(){
      highScorePage();
    }, 500);
  };

  function highScorePage() {
    quizHeader.textContent = "High scores";
    quizButtonGroup.innerHTML = `<p class="alert alert-secondary" role="alert">${quizTaker} - ${finalUserScore}</p>
    <button type="button" class="d-inline mt-2 btn btn-primary">Go back</button>
    <button type="button" class="d-inline mt-2 btn btn-primary">Clear High Scores</button>
    `;
  };

  // Run the timer function, this needs to be hooked to the "Start Quiz" button.
  document.getElementById('startButton').addEventListener("click", function(e){
    console.log("start button:", e.target)
    timer();
    populateQuizObjects();
  });

  // Setup what happens when time runs out.
  function timeExpired() {
    alert('Time Expired.');
  }
 
  // function logQuizTaker() {
  //   console.log(quizTaker);
  //   // logQuizTaker(quizTaker);
  //   return quizTaker;
  // };

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