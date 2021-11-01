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
var newScore = '';
var index = 0;

// Array of question objects
var quizObjectArray = [{
  question : 'Commonly used data types DO NOT include __________',
  answer : ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
  result : [false, false, true, false]
  },
  {
    question : 'The condition in an if / else statement is enclosed with __________',
    answer : ['1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets'],
    result : [false, false, true, false]
  },
  {
    question : 'Arrays in JavaScript can be used to store __________',
    answer : ['1. numbers and strings', '2. other arrarys', '3. booleans', '4. all of the above'],
    result : [false, false, false, true]
  },
  {
    question : 'String values must be enclosed within __________ when being assigned to variables.',
    answer : ['1. commas', '2. curly brackets', '3. quotes', '4. parentheses'],
    result : [false, false, true, false]
  },
  {
    question : 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answer : ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log'],
    result : [false, false, false, true]
  }];

// Timer that will count down from 75, currently set lower for testing
function timer() {
    timeRemaining = 75;
    // every second (1000 milliseconds, second argument of setInterval & set at end of anonymous function)
    var timeInterval = setInterval(function () {
  
      // if timer has 1 or more seconds left, subtract one every second and display new value
      if (timeRemaining >= 0 && answersGiven < quizObjectArray.length) {
        timerEl.textContent = 'Time: ' + timeRemaining;
        timeRemaining--;
        // console.log(timeRemaining);
      } 

      // if all answers given, stop clock
      else if (timeRemaining >= 0 && answersGiven >= quizObjectArray.length) {
        clearInterval(timeInterval);
      }

      
      else {
        clearInterval(timeInterval);
        timerEl.textContent = 'Time: ' + 0;
        timeExpired();
      }

    }, 1000);
  }

  function populateQuizObjects() {
      quizContainer.classList.remove('text-center');

      if (answersGiven === quizObjectArray.length) {
        allDone();
        return;
      }

      populate();
  }

  function populate() {
    // Replace header text with question 1 for now
    quizHeader.textContent = quizObjectArray[index].question;
    quizButtonGroup.innerHTML = '';
    //remove start button and quiz paragraph for "clean slate"
    startButton.remove();
    quizParagraph.remove();

  for (var i = 0; i < quizObjectArray[index].answer.length; i++) {
    quizButtonGroup.innerHTML += `<button type="button" class="d-block mt-2 btn btn-primary questionBtn" onclick="buttonHandler(${quizObjectArray[index].result[i]})">` + quizObjectArray[index].answer[i] + '</button>';
    // console.log(quizObjectArray.result[i]);
  }
  index++; 
}

  function allDone() {
    // Replace header text with question 1 for now
    finalUserScore = userScore + timeRemaining + 1;
    quizHeader.textContent = "All done!";
    quizButtonGroup.innerHTML = 
    `<h4 class="py-1">Your final score is ${finalUserScore}</h4></br>
     <h4 class="py-1">Enter initials: <input type="text" id="initials" class="border align-middle d-inline"> <button type="button" class="d-inline mt-2 btn btn-primary align-baseline" onclick="submitHandler()"'>Submit</button></h4>`;
     timerEl.textContent = timeRemaining + 1;
  }

  function buttonHandler(arg) {
    console.log(arg);
      if (arg) {
        quizButtonGroup.innerHTML += "<hr><h3>Correct! + 5 points</h3>";
        userScore = userScore + 5;
      }
      else {
        quizButtonGroup.innerHTML += "<hr><h3>Wrong! - 10 seconds/points</h3>";
        timeRemaining = timeRemaining - 10;
      }

      document.getElementsByClassName('questionBtn').disabled = true;

      answersGiven++;
      
      setTimeout(function(){
        populateQuizObjects(); 
      }, 1000);

      return(answersGiven);
  }

  function submitHandler() {
    // event.preventDefault();
    quizTaker = document.getElementById('initials').value;

    if (quizTaker) {
      setTimeout(function(){
        highScorePage();
      }, 500);
    }
    else {
      alert("Please enter your initials");
    }
  }

  function highScorePage() {
    newScore = `${quizTaker} - ${finalUserScore}`;
    viewHighScores();
  }

  function viewHighScores() {
    quizButtonGroup.innerHTML = '';
    quizContainer.classList.remove('text-center');
    quizParagraph.remove();

    if(localStorage.getItem('scores') === null) {
      localStorage.setItem('scores', '[]') ;
    }

    var currentScores = JSON.parse(localStorage.getItem('scores'));
    
    if (newScore) {
      currentScores.push(newScore);
    }

    localStorage.setItem('scores', JSON.stringify(currentScores));
    quizHeader.textContent = "High scores";

    for (var i = 0; i < currentScores.length; i++) {
      quizButtonGroup.innerHTML += `<p class="alert alert-secondary userScore" role="alert">${currentScores[i]}</p>`;
    }
    
    quizButtonGroup.innerHTML +=
    `<button type="button" class="d-inline mt-2 btn btn-primary" onclick="goBack()">Go back</button>
    <button type="button" class="d-inline mt-2 btn btn-primary" onclick="clearStorage()">Clear High Scores</button>`;
  }

  function goBack() {
    location.reload();
  }

  function clearStorage() {
    alert("High scores deleted.");
    localStorage.clear();
    location.reload();
  }

  // Run the timer function, this needs to be hooked to the "Start Quiz" button.
  document.getElementById('startButton').addEventListener("click", function(e){
    console.log("start button:", e.target);
    timer();
    populateQuizObjects();
  });

  // Setup what happens when time runs out.
  function timeExpired() {
    alert('Time Expired. Please try again.');
    location.reload();
  }