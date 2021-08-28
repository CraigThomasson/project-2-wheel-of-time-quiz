
//loads game and event listeners. 
//code largely influenced by code institutes love maths project
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameDif = this.getAttribute("data-type");
                runGame(gameDif);
            }
        });
    }

    document.getElementById("answer-container").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer()
        }
    })

    runGame("easyMode");

});

function runGame(gameDif)


/**
 * generates a random easy question and answer
 */
function easyMode() {

let questionsEasy = [
    "What name is given to someone bonded to an Aes Sedai?",
    "What item does Matt take from Shadar Logoth?",
    "Rand learns to play which instrument?"
];

let answersEasy = [
    ["Warder", "Asha'man", "Guardian", "Grey man"],
    ["Gold coin", "Silver dice set", "Ruby-hilted dagger", "Crystal sward "],
    ["Harp", "Flute", "fiddle", "Triangle"]
];

/**
 * gets a random question from questionEasy
 */
function loadQuestion() {
    let questionGen = Math.floor(Math.random() * questionsEasy.length);
    document.getElementById("question").innerHTML = questionsEasy[questionGen];
}

/**
 * get the maching answers for the question
 */
function loadAnswers() {
    let answers = document.getElementById("answer-container");
    if (document.getElementById("question").innerText === questionsEasy[0]) {
        answers.innerHTML = `<button id="btn0" class="answer-btn">${answersEasy[0][0]}</button>
        <button id="btn1" class="answer-btn">${answersEasy[0][1]}</button>
        <button id="btn2" class="answer-btn">${answersEasy[0][2]}</button>
        <button id="btn3" class="answer-btn">${answersEasy[0][3]}</button>`
    }   
    else if (document.getElementById("question").innerText === questionsEasy[1]) { 
        answers.innerHTML = `<button id="btn0" class="answer-btn">${answersEasy[1][0]}</button>
        <button id="btn1" class="answer-btn">${answersEasy[1][1]}</button>
        <button id="btn2" class="answer-btn">${answersEasy[1][2]}</button>
        <button id="btn3" class="answer-btn">${answersEasy[1][3]}</button>`
    }
    else if (document.getElementById("question").innerText === questionsEasy[2]) {
        answers.innerHTML = `<button id="btn0" class="answer-btn">${answersEasy[2][0]}</button>
        <button id="btn1" class="answer-btn">${answersEasy[2][1]}</button>
        <button id="btn2" class="answer-btn">${answersEasy[2][2]}</button>
        <button id="btn3" class="answer-btn">${answersEasy[2][3]}</button>`
    }
};

loadQuestion();

loadAnswers();
};

easyMode();