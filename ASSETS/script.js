const BeginQuizButton = document.getElementById('begin-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')

let currentQuestionIndex

BeginQuizButton.addEventListener('click', BeginQuiz)


function BeginQuiz(){
 console.log('Begin Quiz')
 currentQuestionIndex = 0
 setNextQuestion()  
}

function setNextQuestion(){
    showQuestion(currentQuestionIndex)


}

function showQuestion(question){
    questionElement.innerText = question.question 
    

}

function selectAnswer() {

}


var Questions = [
    {

        Number: 1,
        Question: "Java is short for 'JavaScript?",
        answers: {
            a:'true',
            b:'false',
        },
        correctAnswer: 'false'
    },

    {
        Number: 2,
        Question: "How do you insert 'COMMENTS' in JavaScript code?",
        answers: {
            a:'//Comment here',
            b:'# Comment here',
            c:'/* Cooment here',
        },
        correctAnswer: '/*'

    },

    {
        Number: 3,
        Question: "Inside which HTML element do we attach the JavaScript?",
        answers: {
            a:''
        },
    },
]


