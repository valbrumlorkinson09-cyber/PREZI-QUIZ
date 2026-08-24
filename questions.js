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

    ...(typeof MUSIC_QUESTIONS !== "undefined"
        ? MUSIC_QUESTIONS
        : []),

    ...(typeof TECHNOLOGY_QUESTIONS !== "undefined"
        ? TECHNOLOGY_QUESTIONS
        : []),

    ...(typeof CULTURE_QUESTIONS !== "undefined"
        ? CULTURE_QUESTIONS
        : [])

];

console.log(
    "PREZIQUIZ — Total questions:",
    ALL_QUESTIONS.length
);
