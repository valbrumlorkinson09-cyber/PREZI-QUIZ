"use strict";

/* =========================================================
   PREZI QUIZ
   QUIZ ENGINE — V1
========================================================= */


/* =========================
   GET CATEGORY
========================= */

const params = new URLSearchParams(window.location.search);

let category = params.get("category") || "general";

if (!QUIZ_DATA[category]) {
    category = "general";
}


/* =========================
   QUIZ DATA
========================= */

const quiz = QUIZ_DATA[category];

const questions = quiz.questions;

let currentQuestion = 0;
let score = 0;
let answered = false;

let timeLeft = 300;
let timerInterval;


/* =========================
   ELEMENTS
========================= */

const quizCategory =
    document.getElementById("quizCategory");

const timer =
    document.getElementById("timer");

const questionCounter =
    document.getElementById("questionCounter");

const scoreDisplay =
    document.getElementById("scoreDisplay");

const progressFill =
    document.getElementById("progressFill");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answersContainer");

const nextBtn =
    document.getElementById("nextBtn");

const loadingQuiz =
    document.getElementById("loadingQuiz");

const quizContent =
    document.getElementById("quizContent");


/* =========================
   START
========================= */

function startQuiz() {

    quizCategory.textContent =
        quiz.name.toUpperCase();

    loadingQuiz.style.display = "none";
    quizContent.style.display = "block";

    showQuestion();

    startTimer();

}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    answered = false;

    nextBtn.classList.remove("show");

    const question =
        questions[currentQuestion];


    /* COUNTER */

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    /* NUMBER */

    questionNumber.textContent =
        `QUESTION ${String(currentQuestion + 1).padStart(2, "0")}`;


    /* QUESTION */

    questionText.textContent =
        question.question;


    /* SCORE */

    scoreDisplay.textContent =
        `Score: ${score}`;


    /* PROGRESS */

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressFill.style.width =
        `${progress}%`;


    /* ANSWERS */

    answersContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer-btn";

        button.innerHTML = `
            <span class="answer-letter">
                ${letters[index]}
            </span>

            <span>
                ${answer}
            </span>
        `;

        button.addEventListener(
            "click",
            () => selectAnswer(index, button)
        );

        answersContainer.appendChild(button);

    });

}


/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(index, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const question =
        questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.classList.add("disabled");

    });


    if (index === question.correct) {

        selectedButton.classList.add("correct");

        score++;

        scoreDisplay.textContent =
            `Score: ${score}`;

    } else {

        selectedButton.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");

    }


    nextBtn.classList.add("show");


    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent =
            "See My Result →";

    }

}


/* =========================
   NEXT QUESTION
========================= */

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        finishQuiz();

        return;

    }

    showQuestion();

});


/* =========================
   TIMER
========================= */

function startTimer() {

    updateTimer();

    timerInterval =
        setInterval(() => {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                finishQuiz();

            }

        }, 1000);

}


/* =========================
   UPDATE TIMER
========================= */

function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    timer.classList.remove(
        "warning",
        "danger"
    );


    if (timeLeft <= 60) {

        timer.classList.add("warning");

    }

    if (timeLeft <= 20) {

        timer.classList.remove("warning");

        timer.classList.add("danger");

    }

}


/* =========================
   FINISH QUIZ
========================= */

function finishQuiz() {

    clearInterval(timerInterval);


    const result = {

        category: category,

        categoryName: quiz.name,

        score: score,

        total: questions.length,

        percentage:
            Math.round(
                (score / questions.length) * 100
            ),

        completedAt:
            new Date().toISOString()

    };


    localStorage.setItem(
        "preziQuizResult",
        JSON.stringify(result)
    );


    window.location.href =
        `result.html?category=${encodeURIComponent(category)}`;

}


/* =========================
   START ENGINE
========================= */

startQuiz();
