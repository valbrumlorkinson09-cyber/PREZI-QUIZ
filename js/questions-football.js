"use strict";

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
category:"football",
difficulty:"hard",
question:"Quel pays a remporté la première Coupe du Monde en 1930 ?",
answers:["Argentine","Uruguay","Brésil","Italie"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté le plus de Ligues des champions ?",
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
question:"Quel club italien joue au stade San Siro avec l'AC Milan ?",
answers:["Juventus","Inter Milan","Napoli","Roma"],
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
question:"Quelle sélection a remporté l'Euro 2016 ?",
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
question:"Que signifie généralement le terme pressing en football ?",
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
question:"Quel système comporte généralement trois défenseurs centraux et deux pistons ?",
answers:["4-4-2","3-5-2","4-3-3","4-2-3-1"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel entraîneur est surnommé The Special One ?",
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
question:"Quel pays a remporté la Coupe du Monde 2006 ?",
answers:["France","Italie","Allemagne","Brésil"],
correct:1
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
question:"Quel pays a remporté la Coupe du Monde 1994 ?",
answers:["Brésil","Italie","Argentine","Allemagne"],
correct:0
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté la Ligue des champions 2018 ?",
answers:["Liverpool","Real Madrid","Juventus","Bayern Munich"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel club a remporté la Ligue des champions 2017 ?",
answers:["Real Madrid","Juventus","Barcelona","Bayern Munich"],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel club a remporté la Ligue des champions 2013 ?",
answers:["Borussia Dortmund","Bayern Munich","Chelsea","Real Madrid"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quel club a remporté la Ligue des champions 2012 ?",
answers:["Chelsea","Bayern Munich","Barcelona","Inter Milan"],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel club a remporté la Ligue des champions 2010 ?",
answers:["Inter Milan","Bayern Munich","Barcelona","Manchester United"],
correct:0
},

{
category:"football",
difficulty:"hard",
question:"Quel joueur a remporté le Ballon d'Or 2019 ?",
answers:["Virgil van Dijk","Lionel Messi","Cristiano Ronaldo","Sadio Mané"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel joueur a remporté le Ballon d'Or 2018 ?",
answers:["Cristiano Ronaldo","Luka Modrić","Lionel Messi","Antoine Griezmann"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté l'Euro 2012 ?",
answers:["Italie","Espagne","Allemagne","Portugal"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté l'Euro 2008 ?",
answers:["Allemagne","Espagne","Russie","Italie"],
correct:1
},

{
category:"football",
difficulty:"medium",
question:"Quel pays a remporté l'Euro 2004 ?",
answers:["Portugal","Grèce","France","Espagne"],
correct:1
},

{
category:"football",
difficulty:"hard",
question:"Quelle sélection détient le plus grand nombre de titres de la Coupe d'Afrique des Nations ?",
answers:["Cameroun","Égypte","Ghana","Nigeria"],
correct:1
}

];

console.log(
"⚽ FOOTBALL QUESTIONS CHARGÉES :",
FOOTBALL_QUESTIONS.length
);
