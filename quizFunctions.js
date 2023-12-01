var correctAnwsers = ["Princess and Ice Wizard", "RubyDung", "Crystal Hearts & Life Fruits", "1932 and 2025", "Mortal Kombat 3", "Mangle", "miHoYo", "Nearly 2 years", "Dynamike", "The Joker", "Metal Gear Rising: Revengeance", "Lethal Company",  "Geometry Dash", "Hidden Boss in Part 3", "JP Ver. Pokemon: Red & Green", "To get used to the mouse", "Huntress", "Resident Evil Gaiden", "Half Life", "Infinity Ward quits for due to low payment"]
var incorrectQuestions = []
var questionNum = 1;
var points = 0
var totalPoints = 20;
var takingQuiz = true;

// The questions and answers
let question = document.getElementById("question");
let answerA = document.getElementById("choiceA");
let answerB = document.getElementById("choiceB");
let answerC = document.getElementById("choiceC");
let answerD = document.getElementById("choiceD");
let results = document.getElementById("results");

// Changes the question, mainly activates when the user clicks on an answer
function questionChange(){
    if (questionNum === 1) {
        //The Question
        question.innerText = "1) What were the first two Legendary cards added to Clash Royale?";
        //The Answers
        answerA.innerText = "The Log and Mega Knight"
        answerB.innerText = "Princess and Ice Wizard"
        answerC.innerText = "Prince and Wall Breakers"
        answerD.innerText = "The Night Witch and Sparky"
    } else if (questionNum === 2) {
        question.innerText = "Which game was Cave Game by Notch based on?"

        answerA.innerText = "Murder Miners"
        answerB.innerText = "Minecraft"
        answerC.innerText = "RubyDung"
        answerD.innerText = "Terraria"
    } else if (questionNum === 3) {
        question.innerText = "Which items increase Health permanently in Terarria?"

        answerA.innerText = "Crystal Hearts & Life Fruits"
        answerB.innerText = "Mana Crystals & Vital Crystals"
        answerC.innerText = "Crystal Hearts & Mana Crystals"
        answerD.innerText = "Vital Crystals & Heart Fruits"
    } else if (questionNum === 4) {
        question.innerText = "When was Black Ops 2 based on?"

        answerA.innerText = "1984 and 2025"
        answerB.innerText = "1932 and 2025"
        answerC.innerText = "1895 and 2015"
        answerD.innerText = "1954 and 2027"
    } else if (questionNum === 5) {
        question.innerText = "Which Mortal Kombat game didn't have Scorpion?"

        answerA.innerText = "Mortal Kombat: Armageddon"
        answerB.innerText = "Mortal Kombat 3"
        answerC.innerText = "Mortal Kombat (2011)"
        answerD.innerText = "Mortal Kombat: Deception"
    } else if (questionNum === 6) {
        question.innerText = "Which animatronic caused the bite of '87?"

        answerA.innerText = "Foxy"
        answerB.innerText = "Freddy"
        answerC.innerText = "Toy Bonnie"
        answerD.innerText = "Mangle"
    } else if (questionNum === 7) {
        question.innerText = "Which company made Genshin Impact"

        answerA.innerText = "miHoYo"
        answerB.innerText = "Toylogic"
        answerC.innerText = "Toshiba"
        answerD.innerText = "505 Games"
    } else if (questionNum === 8) {
        question.innerText = "How long was the Stranger Things chapter gone in Dead By Daylight?"

        answerA.innerText = "2 Years"
        answerB.innerText = "Almost 4 years"
        answerC.innerText = "Nearly 2 years"
        answerD.innerText = "3 years"
    } else if (questionNum === 9) {
        question.innerText = "Which Brawler first died in the SPSD cams in Brawl Stars?"

        answerA.innerText = "Crow"
        answerB.innerText = "Leon"
        answerC.innerText = "Shelly"
        answerD.innerText = "Dynamike"
    } else if (questionNum === 10) {
        question.innerText = "What Non-Mortal Kombat character was re-entered to the Mortal Kombat cast?"

        answerA.innerText = "Pennywise"
        answerB.innerText = "Homelander"
        answerC.innerText = "The Joker"
        answerD.innerText = "Batman"
    } else if (questionNum === 11) {
        question.innerText = "Which game first introduced Armstrong?"

        answerA.innerText = "Metal Gear Solid 3: Snake Eater"
        answerB.innerText = "Metal Gear Solid: Peave Walker"
        answerC.innerText = "Metal Gear Rising: Revengeance"
        answerD.innerText = "CoD: Black Ops 3"
    } else if (questionNum === 12) {
        question.innerText = "Which game is a popular Beta Version game on Steam?"

        answerA.innerText = "CoD: Modern Warfare 3 (2023)"
        answerB.innerText = "CoD: Modern Warfare 2 (2022)"
        answerC.innerText = "Battlefield V"
        answerD.innerText = "Lethal Company"
    } else if (questionNum === 13) {
        question.innerText = "Which rhythm game hasn't recieved an update in some time? (HINT: release date isn't confirmed in October)"

        answerA.innerText = "Geometry Dash: Subzero"
        answerB.innerText = "Geometry Dash"
        answerC.innerText = "Minecraft"
        answerD.innerText = "Terraria"
    } else if (questionNum === 14) {
        question.innerText = "What does the code 'MYCOLOG1ST12' refers to?"

        answerA.innerText = "A puzzle to solve"
        answerB.innerText = "A part of the secret ending"
        answerC.innerText = "A card with numbers"
        answerD.innerText = "Hidden Boss in Part 3"
    } else if (questionNum === 15) {
        question.innerText = "Which version of Pokemon contains a creepypasta of Lavender Town?"

        answerA.innerText = "US Ver. Pokemon: Red & Green"
        answerB.innerText = "US Ver. Pokemon: Blue & Green"
        answerC.innerText = "RUS ver. Pokemon: Crystal Version"
        answerD.innerText = "JP Ver. Pokemon: Red & Green"
    } else if (questionNum === 16) {
        question.innerText = "Solitaire was made back in the 18th century yet still played to this day. What was it's purpose on Windows computer?"

        answerA.innerText = "To bring back memories"
        answerB.innerText = "To help others with organization"
        answerC.innerText = "To raise gambling addictions"
        answerD.innerText = "To get used to the mouse"
    } else if (questionNum === 17) {
        question.innerText = "Which survivor has homing ammo in Risk of Rain 2?"

        answerA.innerText = "Huntress"
        answerB.innerText = "MUL-T"
        answerC.innerText = "Void Fiend"
        answerD.innerText = "Captain"
    } else if (questionNum === 18) {
        question.innerText = "Which game that is possibly rated M was nearly added to the Gameboy Color?"

        answerA.innerText = "Super Mario 128"
        answerB.innerText = "Super Mario Land"
        answerC.innerText = "Resident Evil Gaiden"
        answerD.innerText = "Sonic The Hedgehog"
    } else if (questionNum === 19) {
        question.innerText = "Which game has these other side stories, known to be an official game? (HINT: Opposing Force, Blue Shift, Decay)"

        answerA.innerText = "Portal"
        answerB.innerText = "Half Life"
        answerC.innerText = "Left 4 Dead"
        answerD.innerText = "Lost Coast"
    } else if (questionNum === 20) {
        question.innerText = "Modern Warfare 2 was supposed to have bug fix updates. Why was it stopped?"

        answerA.innerText = "Activision abandoned that promise it"
        answerB.innerText = "Infinity Ward quits for due to low payment"
        answerC.innerText = "Sledgehammer Games wasn't up for it"
        answerD.innerText = "Treyarch has released WaW, surpassed MW2"
    }
}

// Activates when the answer is submitted, even if the answer is wrong
function answerSubmitted (event) {
    let answer = event.target.innerText
    console.log(answer);
    if (correctAnwsers.includes(answer)){
        points = points+1;
        console.log(points);
    } else {
        incorrectQuestions.push(questionNum);
    }
    if (questionNum === 20 && takingQuiz === true) {
        let percentage = points/totalPoints * 100
        let pointsText = document.createElement("p");
        let grade = "F";
        let gradeText = document.createElement("p");
        let gradeLetterTalk = "";
        let gradeSymbolTalk = "";
        let gradeTalkText = document.createElement("p");
        let incorrectParts = document.createElement("p");

        incorrectParts.innerText = "These are the questions you've gotten wrong: " + incorrectQuestions;

        if(percentage >= 97){
            grade = "A+"
            incorrectParts.innerText = "No wrong answers, perfect score!";
        } else if(percentage >= 94 && percentage <= 96){
            grade = "A"
        } else if(percentage >= 90 && percentage <= 93){
            grade = "A-"
        } else if(percentage >= 87 && percentage <= 89){
            grade = "B+"
        } else if(percentage >= 84 && percentage <= 86){
            grade = "B"
        } else if(percentage >= 80 && percentage <= 83){
            grade = "B-"
        } else if(percentage >= 77 && percentage <= 79){
            grade = "C+"
        } else if(percentage >= 74 && percentage <= 76){
            grade = "C"
        } else if(percentage >= 70 && percentage <= 73){
            grade = "C-"
        } else if(percentage >= 67 && percentage <= 69){
            grade = "D+"
        } else if(percentage >= 64 && percentage <= 66){
            grade = "D"
        } else if(percentage >= 60 && percentage <= 63){
            grade = "D-"
        } else {
            grade = "F"
        }

        gradeText.innerText = "Your score is " + points + " Out of 20 Points. You got an " + grade + ", " + percentage + "%"

        if (grade.charAt(0) === "A"){
            gradeLetterTalk = "Great Job! You've passed! "
            if (grade.charAt(1) === "+"){
                gradeSymbolTalk = "Now you can boast about being a gamer buddy! Perfect Score B)"
            } else if (grade.charAt(1) === "-"){
                gradeSymbolTalk = "With a minus, it's safe to say you still did a good job in this quiz."
            } else {
                gradeSymbolTalk = "In between is still a good score, better than a minus and lower than a plus."
            }
        } else if (grade.charAt(0) === "B"){
            gradeLetterTalk = "Good Job! You've passed and got close to an A! "
            if (grade.charAt(1) === "+"){
                gradeSymbolTalk = "When I said close to an A, I mean you got a B+ which is really good too."
            } else if (grade.charAt(1) === "-"){
                gradeSymbolTalk = "With a minus, it's safe to say you are close to average grades but did a neat job here."
            } else {
                gradeSymbolTalk = "In between is still a good score, unless you wanna be near or in the As due to being an A student."
            }
        } else if (grade.charAt(0) === "C"){
            gradeLetterTalk = "Neat work, you got an average which is good.  "
            if (grade.charAt(1) === "+"){
                gradeSymbolTalk = "That's good to be near the B's. Maybe it could work in real life too."
            } else if (grade.charAt(1) === "-"){
                gradeSymbolTalk = "Woah! That's close to the D's area. Be careful in the college area of Video Games."
            } else {
                gradeSymbolTalk = "Directly in between all the grades. I guess being in the middle can really help."
            }
        } else if (grade.charAt(0) === "D"){
            gradeLetterTalk = "You are close to an F, wanna try for a better grade? "
            if (grade.charAt(1) === "+"){
                gradeSymbolTalk = "More closer to a C so it's alright. You're be fine for Video Game High rather than its college though."
            } else if (grade.charAt(1) === "-"){
                gradeSymbolTalk = "Now you're really on the line man. You do gotta try much better if you want. Close call indeed."
            } else {
                gradeSymbolTalk = "In between a higher rating and a complete failure. Gotta like the good ol' close calls"
            }
        } else if (grade.charAt(0) === "F"){
            gradeLetterTalk = "You might wanna retake to try and boast a better grade. It's better to retake for a better score than a weaker one. Reload and try again."
        }
        gradeTalkText.innerText = gradeLetterTalk + gradeSymbolTalk;

        gradeText.classList.add("results");
        gradeText.classList.add("gradeResults");
        gradeTalkText.classList.add("results");
        gradeTalkText.classList.add("gradeTalk");
        incorrectParts.classList.add("results");
        incorrectParts.classList.add("incorrectParts");

        results.appendChild(gradeText);
        results.appendChild(gradeTalkText);
        results.appendChild(incorrectParts);

        takingQuiz = false;

    } else if (takingQuiz === true){
        questionNum++;
        questionChange();
    }
}

questionChange();
answerA.addEventListener("click", answerSubmitted);
answerB.addEventListener("click", answerSubmitted);
answerC.addEventListener("click", answerSubmitted);
answerD.addEventListener("click", answerSubmitted);