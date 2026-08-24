"use strict";

/* =========================================================
   PREZIQUIZ
   QUIZ ENGINE — V2
   GLOBAL QUESTION BANK
========================================================= */


/* =========================
   GET CATEGORY
========================= */

const params = new URLSearchParams(window.location.search);

const requestedCategory =
    (params.get("category") || "culture").toLowerCase();


/* =========================
   CATEGORY NAMES
========================= */

const CATEGORY_NAMES = {

    football: "Football",

    science: "Science",

    history: "Histoire",

    geography: "Géographie",

    cinema: "Cinéma & Séries",

    music: "Musique",

    technology: "Technologie",

    culture: "Culture Générale",

    general: "Culture Générale"

};


/* =========================
   CATEGORY ALIASES
========================= */

const CATEGORY_ALIASES = {

    general: "culture",

    culture_generale: "culture",

    culturel: "culture",

    sciences: "science",

    histoire: "history",

    geo: "geography",

    film: "cinema",

    films: "cinema",

    musique: "music",

    tech: "technology"

};


let category =
    CATEGORY_ALIASES[requestedCategory] ||
    requestedCategory;


/* =========================
   CHECK QUESTION BANK
========================= */

if (
    typeof ALL_QUESTIONS === "undefined" ||
    !Array.isArray(ALL_QUESTIONS)
) {

    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            padding:25px;
            background:#080808;
            color:white;
            font-family:Arial,sans-serif;
            text-align:center;
        ">
            <div>
                <h2>❌ Erreur</h2>
                <p>Banque de questions introuvable.</p>
                <p>
                    Vérifiez que questions.js est chargé
                    avant quiz.js.
                </p>
            </div>
        </div>
    `;

    throw new Error(
        "PREZIQUIZ: ALL_QUESTIONS introuvable."
    );

}


/* =========================
   FILTER QUESTIONS
========================= */

let categoryQuestions =
    ALL_QUESTIONS.filter(question => {

        return String(question.category)
            .toLowerCase()
            === category;

    });


/* =========================
   GENERAL FALLBACK
========================= */

if (categoryQuestions.length === 0) {

    console.warn(
        "Catégorie introuvable :",
        category
    );

    category = "culture";

    categoryQuestions =
        ALL_QUESTIONS.filter(question => {

            return String(question.category)
                .toLowerCase()
                === category;

        });

}


/* =========================
   SHUFFLE
========================= */

function shuffle(array) {

    const copy = [...array];

    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }

    return copy;

}


/* =========================
   CREATE QUIZ
   10 QUESTIONS
========================= */

const questions =
    shuffle(categoryQuestions)
        .slice(0, Math.min(10, categoryQuestions.length));


/* =========================
   CHECK
========================= */

if (questions.length === 0) {

    document.body.innerHTML = `
        <div style="
            min-height:100vh;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#080808;
            color:white;
            font-family:Arial,sans-serif;
            text-align:center;
            padding:20px;
        ">
            <div>
                <h2>⚠️ Aucune question</h2>

                <p>
                    Cette catégorie ne contient
                    aucune question.
                </p>
            </div>
        </div>
    `;

    throw new Error(
        "PREZIQUIZ: aucune question disponible."
    );

}


/* =========================
   QUIZ INFO
========================= */

const quiz = {

    name:
        CATEGORY_NAMES[category]
        || category,

    questions:
        questions

};


/* =========================
   STATE
========================= */

let currentQuestion = 0;

let score = 0;

let answered = false;

let timeLeft = 300;

let timerInterval;


/* =========================
   ELEMENTS
========================= */

const quizCategory =
    document.getElementById(
        "quizCategory"
    );

const timer =
    document.getElementById(
        "timer"
    );

const questionCounter =
    document.getElementById(
        "questionCounter"
    );

const scoreDisplay =
    document.getElementById(
        "scoreDisplay"
    );

const progressFill =
    document.getElementById(
        "progressFill"
    );

const questionNumber =
    document.getElementById(
        "questionNumber"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const answersContainer =
    document.getElementById(
        "answersContainer"
    );

const nextBtn =
    document.getElementById(
        "nextBtn"
    );

const loadingQuiz =
    document.getElementById(
        "loadingQuiz"
    );

const quizContent =
    document.getElementById(
        "quizContent"
    );


/* =========================
   START
========================= */

function startQuiz() {

    if (quizCategory) {

        quizCategory.textContent =
            quiz.name.toUpperCase();

    }

    if (loadingQuiz) {

        loadingQuiz.style.display =
            "none";

    }

    if (quizContent) {

        quizContent.style.display =
            "block";

    }

    showQuestion();

    startTimer();

}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    answered = false;

    if (nextBtn) {

        nextBtn.classList.remove(
            "show"
        );

        nextBtn.textContent =
            "Question suivante →";

    }

    const question =
        questions[currentQuestion];


    /* COUNTER */

    if (questionCounter) {

        questionCounter.textContent =
            `Question ${currentQuestion + 1} / ${questions.length}`;

    }


    /* NUMBER */

    if (questionNumber) {

        questionNumber.textContent =
            `QUESTION ${String(
                currentQuestion + 1
            ).padStart(2, "0")}`;

    }


    /* QUESTION */

    if (questionText) {

        questionText.textContent =
            question.question;

    }


    /* SCORE */

    if (scoreDisplay) {

        scoreDisplay.textContent =
            `Score: ${score}`;

    }


    /* PROGRESS */

    if (progressFill) {

        const progress =
            (
                currentQuestion /
                questions.length
            ) * 100;

        progressFill.style.width =
            `${progress}%`;

    }


    /* ANSWERS */

    if (!answersContainer) {

        return;

    }

    answersContainer.innerHTML =
        "";

    const letters =
        ["A", "B", "C", "D"];


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer-btn";


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
                () =>
                    selectAnswer(
                        index,
                        button
                    )
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =========================
   SELECT ANSWER
========================= */

function selectAnswer(
    index,
    selectedButton
) {

    if (answered) {

        return;

    }

    answered = true;


    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(button => {

        button.classList.add(
            "disabled"
        );

    });


    /* CORRECT */

    if (
        index ===
        question.correct
    ) {

        selectedButton.classList.add(
            "correct"
        );

        score++;

    }


    /* WRONG */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        if (
            buttons[question.correct]
        ) {

            buttons[
                question.correct
            ].classList.add(
                "correct"
            );

        }

    }


    if (scoreDisplay) {

        scoreDisplay.textContent =
            `Score: ${score}`;

    }


    if (nextBtn) {

        nextBtn.classList.add(
            "show"
        );


        if (
            currentQuestion ===
            questions.length - 1
        ) {

            nextBtn.textContent =
                "Voir mon résultat →";

        }

    }

}


/* =========================
   NEXT QUESTION
========================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        () => {

            currentQuestion++;


            if (
                currentQuestion >=
                questions.length
            ) {

                finishQuiz();

                return;

            }


            showQuestion();

        }
    );

}


/* =========================
   TIMER
========================= */

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(
            () => {

                timeLeft--;

                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    finishQuiz();

                }

            },
            1000
        );

}


/* =========================
   UPDATE TIMER
========================= */

function updateTimer() {

    if (!timer) {

        return;

    }


    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    timer.classList.remove(
        "warning",
        "danger"
    );


    if (
        timeLeft <= 60
    ) {

        timer.classList.add(
            "warning"
        );

    }


    if (
        timeLeft <= 20
    ) {

        timer.classList.remove(
            "warning"
        );

        timer.classList.add(
            "danger"
        );

    }

}


/* =========================
   FINISH QUIZ
========================= */

function finishQuiz() {

    clearInterval(
        timerInterval
    );


    const result = {

        category:
            category,

        categoryName:
            quiz.name,

        score:
            score,

        total:
            questions.length,

        percentage:
            Math.round(
                (
                    score /
                    questions.length
                ) * 100
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
   DEBUG
========================= */

console.log(
    "✅ PREZIQUIZ ENGINE READY"
);

console.log(
    "📚 Total questions:",
    ALL_QUESTIONS.length
);

console.log(
    "🎯 Category:",
    category
);

console.log(
    "❓ Questions selected:",
    questions.length
);


/* =========================
   START ENGINE
========================= */

startQuiz();
