/* =========================================
   PREZIQUIZ — GLOBAL QUESTION BANK
========================================= */

const ALL_QUESTIONS = [

    ...(typeof SPORTS_QUESTIONS !== "undefined"
        ? SPORTS_QUESTIONS
        : []),

    ...(typeof FOOTBALL_QUESTIONS !== "undefined"
        ? FOOTBALL_QUESTIONS
        : [])

];

console.log(
    "✅ PREZIQUIZ — Questions chargées :",
    ALL_QUESTIONS.length
);
