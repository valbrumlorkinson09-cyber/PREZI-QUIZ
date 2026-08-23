const PREZIQUIZ = {

name: "PreziQuiz",

version: "1.0",

categories: [

{
id: "culture",
name: "Culture Générale",
icon: "🌍"
},

{
id: "football",
name: "Football",
icon: "⚽"
},

{
id: "science",
name: "Science",
icon: "🔬"
},

{
id: "history",
name: "Histoire",
icon: "📚"
},

{
id: "geography",
name: "Géographie",
icon: "🗺️"
},

{
id: "cinema",
name: "Cinéma",
icon: "🎬"
},

{
id: "music",
name: "Musique",
icon: "🎵"
},

{
id: "technology",
name: "Technologie",
icon: "💻"
}

]

};

localStorage.setItem(
"preziQuizVersion",
PREZIQUIZ.version
);
