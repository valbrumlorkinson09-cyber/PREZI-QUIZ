"use strict";

/* =========================================
   PREZIQUIZ — FOOTBALL QUESTION BANK
========================================= */

const FOOTBALL_QUESTIONS = [

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2010 ?",
answers:["Pays-Bas","Espagne","Allemagne","Brésil"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2014 ?",
answers:["Argentine","Brésil","Allemagne","France"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2018 ?",
answers:["Croatie","France","Belgique","Brésil"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2022 ?",
answers:["France","Argentine","Brésil","Croatie"],
correct:1
},

{
category:"hard",
difficulty:"hard",
question:"Quel pays a remporté la première Coupe du Monde en 1930 ?",
answers:["Argentine","Uruguay","Brésil","Italie"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté la Coupe du Monde 1954 ?",
answers:["Hongrie","Allemagne de l'Ouest","Brésil","Italie"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté la Coupe du Monde 1978 ?",
answers:["Pays-Bas","Argentine","Brésil","Italie"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté la Coupe du Monde 1986 ?",
answers:["Allemagne de l'Ouest","Argentine","France","Brésil"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 1990 ?",
answers:["Argentine","Allemagne de l'Ouest","Italie","Brésil"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 1994 ?",
answers:["Brésil","Italie","Argentine","Allemagne"],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 1998 ?",
answers:["Brésil","France","Italie","Allemagne"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2002 ?",
answers:["Allemagne","Argentine","Brésil","Italie"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2006 ?",
answers:["France","Italie","Allemagne","Brésil"],
correct:1
},

{
category:"football",
difficulty:"expert",
question:"Quel joueur a marqué deux buts en finale de la Coupe du Monde 1958 pour le Brésil à seulement 17 ans ?",
answers:["Garrincha","Pelé","Vavá","Didi"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quelle équipe a perdu la finale de la Coupe du Monde 1950 au stade du Maracanã ?",
answers:["Argentine","Uruguay","Brésil","Espagne"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté le plus de Coupes d'Europe/Ligues des champions ?",
answers:["AC Milan","Liverpool","Real Madrid","Bayern Munich"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté la Ligue des champions en 2019 ?",
answers:["Manchester City","Liverpool","Chelsea","Arsenal"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté la Ligue des champions en 2020 ?",
answers:["PSG","Bayern Munich","Liverpool","Real Madrid"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté la Ligue des champions en 2021 ?",
answers:["Chelsea","Manchester City","Bayern Munich","Real Madrid"],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté la Ligue des champions en 2022 ?",
answers:["Liverpool","Real Madrid","Manchester City","Chelsea"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club français a remporté la Ligue des champions en 1993 ?",
answers:["Monaco","PSG","Marseille","Lyon"],
correct:2
},

{
category:"football",
difficulty:"expert",
question:"Quel club a remporté la première Coupe d'Europe des clubs champions en 1956 ?",
answers:["Real Madrid","Stade de Reims","AC Milan","Benfica"],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel joueur est surnommé CR7 ?",
answers:["Lionel Messi","Cristiano Ronaldo","Neymar","Kylian Mbappé"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel joueur argentin a remporté la Coupe du Monde 2022 ?",
answers:["Ángel Di María","Lionel Messi","Sergio Agüero","Paulo Dybala"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel joueur français a remporté le Ballon d'Or 2022 ?",
answers:["Kylian Mbappé","Karim Benzema","Antoine Griezmann","Paul Pogba"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel ancien joueur brésilien était surnommé O Rei ?",
answers:["Ronaldo","Ronaldinho","Pelé","Romário"],
correct:2
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a remporté le Ballon d'Or 2007 ?",
answers:["Kaká","Cristiano Ronaldo","Lionel Messi","Ronaldinho"],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a remporté le Ballon d'Or 2006 ?",
answers:["Zinedine Zidane","Fabio Cannavaro","Ronaldinho","Thierry Henry"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a remporté le Ballon d'Or 1995 ?",
answers:["George Weah","Ronaldo","Romário","Roberto Baggio"],
correct:0
},

{
category:"football",
difficulty:"expert",
question:"Quel joueur africain est devenu le premier Ballon d'Or africain en 1995 ?",
answers:["Didier Drogba","Samuel Eto'o","George Weah","Abedi Pelé"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Dans quel club Lionel Messi a-t-il commencé sa carrière professionnelle européenne ?",
answers:["FC Barcelone","PSG","Inter Miami","Manchester City"],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel club est surnommé les Red Devils ?",
answers:["Liverpool","Manchester United","Arsenal","Chelsea"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club est surnommé les Merengues ?",
answers:["FC Barcelone","Real Madrid","Atlético Madrid","Valence"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club joue ses matchs à domicile à Anfield ?",
answers:["Liverpool","Chelsea","Arsenal","Everton"],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel club italien joue ses matchs à domicile au stade San Siro avec l'AC Milan ?",
answers:["Juventus","Inter Milan","Napoli","Roma"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club allemand est surnommé Die Roten ?",
answers:["Borussia Dortmund","Bayern Munich","RB Leipzig","Schalke"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quelle sélection a remporté le plus de Coupes du Monde ?",
answers:["Allemagne","Italie","Brésil","Argentine"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Quelle sélection européenne a remporté l'Euro 2016 ?",
answers:["France","Portugal","Allemagne","Espagne"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté l'Euro 2020, joué principalement en 2021 ?",
answers:["Angleterre","Italie","Espagne","France"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quelle sélection a remporté la CAN 2021, compétition disputée en 2022 ?",
answers:["Égypte","Sénégal","Cameroun","Algérie"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quelle nation a remporté la CAN 2023, disputée en 2024 ?",
answers:["Nigeria","Côte d'Ivoire","Sénégal","Maroc"],
correct:1
},

{
category:"football",
difficulty:"expert",
question:"Quelle nation a remporté la première Coupe d'Afrique des Nations en 1957 ?",
answers:["Égypte","Soudan","Éthiopie","Ghana"],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Combien de Ballons d'Or Lionel Messi avait-il remporté à la fin de 2023 ?",
answers:["6","7","8","9"],
correct:2
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a marqué le plus de buts dans l'histoire de la Coupe du Monde ?",
answers:["Pelé","Miroslav Klose","Ronaldo","Lionel Messi"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté trois Coupes du Monde avant 1970 ?",
answers:["Italie","Allemagne","Brésil","Argentine"],
correct:2
},

{
category:"football",
difficulty:"expert",
question:"Quel joueur allemand détient le record de buts en Coupe du Monde avec 16 réalisations ?",
answers:["Thomas Müller","Miroslav Klose","Gerd Müller","Jürgen Klinsmann"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Dans un système 4-3-3, combien de défenseurs sont alignés au départ ?",
answers:["3","4","5","6"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel poste est généralement chargé de protéger le but ?",
answers:["Attaquant","Milieu","Gardien","Ailier"],
correct:2
},

{
category:"football",
difficulty:"hard",
question:"Que signifie généralement le terme 'pressing' en football ?",
answers:[
"Défendre uniquement dans sa surface",
"Mettre une pression collective sur l'adversaire",
"Jouer uniquement avec de longues passes",
"Changer de gardien"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel système de jeu comporte généralement trois défenseurs centraux et deux pistons ?",
answers:["4-4-2","3-5-2","4-3-3","4-2-3-1"],
correct:1
},

{
category:"football",
difficulty:"expert",
question:"Dans le football moderne, quel rôle décrit le mieux un 'regista' ?",
answers:[
"Gardien offensif",
"Milieu organisateur profond",
"Avant-centre physique",
"Défenseur latéral"
],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel entraîneur a dirigé Manchester United pendant la majeure partie des années 1990 et 2000 ?",
answers:[
"José Mourinho",
"Alex Ferguson",
"Arsène Wenger",
"Carlo Ancelotti"
],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel entraîneur est surnommé 'The Special One' ?",
answers:[
"Pep Guardiola",
"José Mourinho",
"Jürgen Klopp",
"Antonio Conte"
],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel entraîneur a remporté la Ligue des champions avec le FC Barcelone en 2009 et 2011 ?",
answers:[
"Pep Guardiola",
"Frank Rijkaard",
"Luis Enrique",
"Ronald Koeman"
],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel entraîneur a remporté la Ligue des champions avec Porto en 2004 ?",
answers:[
"José Mourinho",
"Carlo Ancelotti",
"Jupp Heynckes",
"Rafael Benítez"
],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel entraîneur a remporté la Ligue des champions avec trois clubs différents ?",
answers:[
"Pep Guardiola",
"José Mourinho",
"Carlo Ancelotti",
"Jürgen Klopp"
],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Quel club anglais joue à Old Trafford ?",
answers:[
"Liverpool",
"Manchester United",
"Arsenal",
"Chelsea"
],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club anglais joue à Anfield ?",
answers:[
"Liverpool",
"Manchester City",
"Tottenham",
"Arsenal"
],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel club londonien joue traditionnellement à Stamford Bridge ?",
answers:[
"Arsenal",
"Chelsea",
"West Ham",
"Tottenham"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club est surnommé 'The Citizens' ?",
answers:[
"Manchester United",
"Manchester City",
"Liverpool",
"Newcastle"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club est surnommé 'The Gunners' ?",
answers:[
"Arsenal",
"Chelsea",
"Liverpool",
"Everton"
],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel club espagnol joue au Camp Nou ?",
answers:[
"Real Madrid",
"FC Barcelone",
"Atlético Madrid",
"Valence"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club espagnol est surnommé 'Los Blancos' ?",
answers:[
"FC Barcelone",
"Real Madrid",
"Atlético Madrid",
"Valence"
],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club français est surnommé l'OM ?",
answers:[
"Olympique Lyonnais",
"Olympique de Marseille",
"AS Monaco",
"FC Nantes"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club français joue au Parc des Princes ?",
answers:[
"Marseille",
"Paris Saint-Germain",
"Lyon",
"Monaco"
],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Combien de joueurs une équipe de football aligne-t-elle normalement sur le terrain ?",
answers:["9","10","11","12"],
correct:2
},

{
category:"football",
difficulty:"medium",
question:"Combien de minutes dure normalement un match de football sans prolongation ?",
answers:["80","90","100","120"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel joueur est surnommé 'La Pulga' ?",
answers:["Cristiano Ronaldo","Neymar","Lionel Messi","Kylian Mbappé"],
correct:2
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a marqué le but de la finale de la Coupe du Monde 2014 ?",
answers:["Thomas Müller","Mario Götze","Miroslav Klose","Mesut Özil"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a remporté le Ballon d'Or 2018 ?",
answers:[
"Cristiano Ronaldo",
"Luka Modrić",
"Lionel Messi",
"Antoine Griezmann"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a remporté le Ballon d'Or 2022 ?",
answers:[
"Karim Benzema",
"Lionel Messi",
"Robert Lewandowski",
"Kylian Mbappé"
],
correct:0
},

{
category:"football",
difficulty:"expert",
question:"Quel joueur allemand est devenu le meilleur buteur de l'histoire de la Coupe du Monde en 2014 ?",
answers:[
"Thomas Müller",
"Miroslav Klose",
"Mesut Özil",
"Philipp Lahm"
],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club a remporté la Ligue des champions 2023 ?",
answers:[
"Manchester City",
"Inter Milan",
"Real Madrid",
"AC Milan"
],
correct:0
},

{
category:"football",
difficulty:"expert",
question:"Quel entraîneur est particulièrement associé au tiki-taka du FC Barcelone ?",
answers:[
"Pep Guardiola",
"José Mourinho",
"Diego Simeone",
"Carlo Ancelotti"
],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté la Coupe du Monde 2022 ?",
answers:["France","Brésil","Argentine","Croatie"],
correct:2
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté l'Euro 2012 ?",
answers:["Italie","Espagne","Allemagne","Portugal"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté l'Euro 2008 ?",
answers:["Allemagne","Espagne","Russie","Italie"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel pays a remporté l'Euro 2004 ?",
answers:["Portugal","Grèce","France","Espagne"],
correct:1
},

{
category:"football",
difficulty:"expert",
question:"Quel pays a remporté le tout premier Championnat d'Europe des nations en 1960 ?",
answers:["URSS","Yougoslavie","Espagne","France"],
correct:0
}

];

/* =========================================
   BANK READY
========================================= */

console.log(
"✅ FOOTBALL QUESTION BANK READY:",
FOOTBALL_QUESTIONS.length
);
