var quizContainer = document.getElementById("container");

var  questionCount;
const scoreCount = 0;
const count = 5;
var  countdown;

// Quiz Questions & Arrays

const Questions = [
{
    id: "1",
    question: "Under which HTML element do we include JavaScript?",
    options: ["<script>", "<javascript>", "<jss>", "<script.js>"],
    correct: "<script>",
    id: "2",
    question: "Where is the correct place to store/insert a JavaScript?",
    options: ["<title>","<head>", "<body>", "<both the <head> and <body>"],
    correct: "JavaScript in body or head: Scripts can be placed inside the body or the head section of an HTML page or inside both head and body",
    id: "3",
    question: "How do you create a function in JavaScript?",
    options: ["function xxx()", "function = xxx()", "function.xxx()", "function:xxx()"],
    correct: "function xxx()",
    id: "4",
    question: "How to write an IF statement in JavaScript?",
    options: ["if (i = 5)", "if i = 5 then", "if i = 5 ", "if (i == 5)"],
    correct: "if (i == 5)",
    id: "5",
    question: "How can you add a comment in JavaScript?",
    options: ["//Comment here", "/*Comment here*/", "<!--Comment here-->", "'Comment here'"],
    correct: "//Comment here",

},
];
var countOfQuestion = document.querySelector(".number-of-question");
function quizCreator() {
    Questions.sort(() => Math.random() - 0.5);

    for (let i of Questions) {
      i.options.sort(() => Math.random() - 0.5);
    
    let div = document.createElement("div");
      div.classList.add("container-mid", "hide");
      
      countOfQuestion.innerHTML = 1 + " of " + Questions.length + " Question";
      
    let question_DIV = document.createElement("p");
      question_DIV.classList.add("question");
      question_DIV.innerHTML = i.question;
      div.appendChild(question_DIV);
    
      div.innerHTML += `
      <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
         <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
      `;
      quizContainer.appendChild(div);
    }
}


var displayContainer = document.getElementById("display-container");
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid")
    quizCards.forEach((card) => {
      card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
  };


clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });

var scoreContainer = document.querySelector(".score-container");
  function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 5;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount)
  }

// Next Question Button 
var nextBtn = document.getElementById("next-button");
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        questionCount += 1;
if (questionCount == Questions.length) {
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        
// Player Scorel
var userScore = document.getElementById("user-score");
        userScore.innerHTML =
          "Your score is " + scoreCount + " out of " + questionCount;
      } else {
        countOfQuestion.innerHTML =
          questionCount + 1 + " of " + Questions.length + " Question";
      quizDisplay(questionCount);
      count = 5;
      clearInterval(countdown);
      QuizTimer();
      }
    })
  );

// Quiz Timer
var timeRemaining = document.querySelector(".time-remaining");
const QuizTimer = () => {
    countdown = setInterval(() => {
      count--;
      timeRemaining.innerHTML = `${count}s`;
      if (count == 0) {
        clearInterval(countdown);
        displayNext();
      }
    }, 10);
  };

// begin button
var beginButton = document.getElementById("begin-button");
beginButton.addEventListener("click", () => {
    beginQuiz.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
  });
var beginQuiz = document.querySelector(".begin-quiz");
  window.onload = () => {
    beginQuiz.classList.remove("hide");
    displayContainer.classList.add("hide");
  }