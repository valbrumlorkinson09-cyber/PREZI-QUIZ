/* =========================================
   PREZIQUIZ — GLOBAL QUESTION BANK
========================================= */

const ALL_QUESTIONS = [

    ...(typeof FOOTBALL_QUESTIONS !== "undefined"
        ? FOOTBALL_QUESTIONS
        : []),

    ...(typeof SCIENCE_QUESTIONS !== "undefined"
        ? SCIENCE_QUESTIONS
        : []),

    ...(typeof HISTORY_QUESTIONS !== "undefined"
        ? HISTORY_QUESTIONS
        : []),

    ...(typeof GEOGRAPHY_QUESTIONS !== "undefined"
        ? GEOGRAPHY_QUESTIONS
        : []),

    ...(typeof CINEMA_QUESTIONS !== "undefined"
        ? CINEMA_QUESTIONS
        : []),

    ...(typeof GENERAL_QUESTIONS !== "undefined"
        ? GENERAL_QUESTIONS
        : [])

];

console.log(
    "✅ PREZIQUIZ — TOTAL QUESTIONS:",
    ALL_QUESTIONS.length
);
