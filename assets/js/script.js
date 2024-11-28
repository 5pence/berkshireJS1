// getters
const question = document.getElementById('question');
const answer0 = document.getElementById('answer0');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const score = document.getElementById('score');


let questionNumber = 0;
let currentScore = 0;

const questions = [
    {
        "question": "What is 23 + 23",
        "answers": [ 23, 46, 43, 55],
        "correct": 1
    },
    {
        "question": "What is 3 + 23",
        "answers": [ 13, 25, 27, 26],
        "correct": 3
    },
    {
        "question": "What is 33 + 23 * 0",
        "answers": [ 0, 26, 13, 56],
        "correct": 0
    },
]


// load question
function loadQuestion(questionNumber) {
    question.innerText = questions[questionNumber].question;
}

// load answers
function loadAnswers(questionNumber) {
    answer0.innerText = questions[questionNumber].answers[0];
    answer1.innerText = questions[questionNumber].answers[1];
    answer2.innerText = questions[questionNumber].answers[2];
    answer3.innerText = questions[questionNumber].answers[3];
}

// wait for them to press an answer (onclick)
function checkAnswer(answerSelected) {
    // check if they got answer correct
    if (answerSelected === questions[questionNumber].correct) {
        // if they did +1 score and update screen
        currentScore++;
        score.innerText = currentScore;
    }
    // see if end of quiz is not reached
    if (questionNumber < questions.length-1) {
        // if not add one to current question number and loop
        questionNumber++;
        loadQuestion(questionNumber);
        loadAnswers(questionNumber);
    } else {
        console.log('end of quiz!!');
    }
}

loadQuestion(questionNumber);
loadAnswers(questionNumber);