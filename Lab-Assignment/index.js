const data = [{
    question: "Javascript supports ",
    a: "Functions",
    b: "XHTML",
    c: "CSS",
    d: "HTML",
    correct: "a",
},{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
}, {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
}, {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Mark Language",
    c: "Hyperloop Machine Language",
    d: "Hyper Message Language",
    correct: "a",
}, {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
}, ];

var question = document.getElementById("question");
var btn0 = document.getElementById("btn0");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var currentDataIndex = 0;
var totalMark = 0;
var currentQuestionNumber = 0;

function loadQuiz() {
    if(currentQuestionNumber === data.length) {
        showScores();
    } else {
    var quizData = data[currentDataIndex];
    question.innerText = quizData.question;

    btn0.innerText = quizData.a;
    btn1.innerText = quizData.b;
    btn2.innerText = quizData.c;
    btn3.innerText = quizData.d;
    }
}

loadQuiz();
showProgress();


function clickButtonOne() {
    var quizData = data[currentDataIndex];
    if(btn0.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonTwo() {
    var quizData = data[currentDataIndex];
    if(btn1.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonThree() {
    var quizData = data[currentDataIndex];
    if(btn2.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function clickButtonFour() {
    var quizData = data[currentDataIndex];
    if(btn3.value === quizData.correct) {
        totalMark += 1;
    } 
    currentDataIndex++;
    loadQuiz();
    showProgress();
}

function showProgress() {
    currentQuestionNumber = currentDataIndex + 1;
    var element = document.getElementById("progress");
    element.innerText = "Question " + currentQuestionNumber + " of " + data.length;
   
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + totalMark + " <br> and mark percentage is: "+(totalMark/data.length*100)+"%"+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
}  
