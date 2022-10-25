//const variables 
const restartBtn = document.getElementById("restart");
const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const playerscore = document.getElementById("player-score");
const totalscore = document.getElementById("total-score");
const qtext = document.getElementById("q-text")


// Quiz Questions & Arrays

let currentQuestion = 0;
let score = 0;

let questions = [
    { 
    
    question: "Under which HTML element do we include JavaScript?",
    answers: [
        
        {choices: "<script>", answer:true},
        {choices: "<javascript>","<jss>": "<script.js>",answer:false}
        
    ]
    },

    {

    question: "Where is the correct place to store/insert a JavaScript?",
    answers: [
        
        {choices: "JavaScript in body or head: Scripts can be placed inside the body or the head section of an HTML page or inside both head and body", answer: true},
        {choices: "<title>","<head>": "<body>",answer:false}
    ]
    },
    
   {
    
    question: "How do you create a function in JavaScript?",
    answers: [
        {choices:"function xxx()",answer:true},
        {choices:"function = xxx()", "function.xxx()": "function:xxx()",answer:false}
    ]
    },

    {
    question: "How to write an IF statement in JavaScript?",
    answers: [
        {choices:"if (i == 5)", answer:true},
        {choices:"if (i = 5)","if i = 5 then": "if i = 5 ",answer:false}

    ]
    },

    {
    question: "How can you add a comment in JavaScript?",
    answers: [
        {choices:"//Comment here", answer:true,},
        {choices:"/*Comment here*/","<!--Comment here-->": "'Comment here'",answer:false}

    ]
    }
]
 restartBtn.addEventListener("click", restart);
 backBtn.addEventListener("click", back);
 nextBtn.addEventListener("click", next);
 submitBtn.addEventListener("click", submit);

 // Quiz Timer 
 const count = 15;
const interval = setInterval(function(){
   document.getElementById('count').innerHTML=count;
   count--;
   if (count === 0){
     clearInterval(interval);
     document.getElementById('count').innerHTML='Done';
     // or...
     alert("Your time is up!");
   }
 }, 1000);


 //function 'startQuiz' to be executed when page loads 
 function startQuiz() {
    currentQuestion = 0;
    totalscore.innerHTML = questions.length;
    qText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].choices;
    trueBtn.onclick = () => {
        if (questions[currentQuestion],answers[0].answer)
        if(score < 5) {score ++;}
    }
 
 playerscore.innerHTML = score;
 if(currentQuestion <4){next();
} 

falseBtn.innerHTML = questions[currentQuestion].answers[1].choices;
falseBtn.onclick = () => {
    if(questions[currentQuestion].answers[1].answer){
        if(score < 5) {
            score ++;}
    }
}

playerscore.innerHTML = score; if(currentQuestion <4){next()};
backBtn.classList.add("hide");
}
startQuiz();

//restart function that resets the score
function restart(){
    currentQuestion = 0;
    backBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    playerscore.innerHTML = score;
    startQuiz();
}

//next function that jumps to next question
function next(){
    currentQuestion ++;
    if(currentQuestion >=4){
        nextBtn.classList.add("hide");
        backBtn.classList.add("hide");}

    qtext.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answer[0].choices;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 5){
                score ++;}
        }
    }
}
playerscore.innerHTML = score;
if(currentQuestion < 4){next();}

falseBtn.innerHTML = questions[currentQuestion].answers[1].choices;
falseBtn.onclick = () => {
    if(questions[currentQuestion].answers[1].answer){
        if(score <5){
            score ++;
        }
    }
playerscore.innerHTML = score;
if(currentQuestion <4){next();}
backBtn.classList.remove("hide");

}



// back function that jumps to previous question 
function back(){
    currentQuestion--;
    if(currentQuestion <=0){
        nextBtn.classList.remove("hide");
        backBtn.classList.add("hide");
    }
    qtext.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].choices;
    trueBtn.onclick = () => {
        if (questions[currentQuestion].answers[0].answer){
            if(score < 5){
                score ++;
            }
      }
      playerscore.innerHTML = score;
      if(currentQuestion <4) {
        next();
      }
    }
}

falseBtn.innerHTML = questions[currentQuestion].answers[1],choices;
falseBtn.onclick = () => {
    if(questions[currentQuestion].answers[1].answer){
        if(score < 5){
            score ++;
        }
    }
    playerscore.innerHTML = score; if(currentQuestion <4){next()}
    nextBtn.classList.remove("hide");
}

// submit button - hides all elements except restart btn & player score
function submit (){
    backBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");
}






      

    



  


