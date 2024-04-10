const questions=[
    {
        question: "which programming language was developed by Guido van Rossum?",
        answers:[
            {text: "C",correct: false},
            {text: "Python",correct: true},
            {text: "java",correct: false},
            {text: "C#",correct: false},
        ]
    },
    {
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        answers:[
            {text: "120 metres",correct: false},
            {text: "180 metres",correct: false},
            {text: "324 metres",correct: false},
            {text: "150 metres",correct: true},
        ]
    },
    {
        question: "What are the types of linkages?",
        answers:[
            {text: "Internal and External",correct: false},
            {text: "External and None",correct: true},
            {text: "External Internal and None",correct: false},
            {text: "Internal",correct: false},
        ]
    },
    {
        question: "How would you round off a value from 1.66 to 2.0",
        answers:[
            {text: "ceil(1.66)",correct: true},
            {text: "floor(1.66)",correct: false},
            {text: "roundup(1.66)",correct: false},
            {text: "roundto(1.66)",correct: false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function showQuestion(){
    resetState();
    let currentQuestionIndex=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo +". "+ currentQuestion.question;
    currentQuestionIndex.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);    
    });
}
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled =true;

    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML='you scored ${score} out of ${questions.length}!';
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
