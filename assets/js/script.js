
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
    });

function userAnswer() {
    let answers = document.getElementsByClassName("answer-btn")
    for (let answer of answers) {
        answer.addEventListener("click", () => {
            answer.classList.add("selected");
        })
    };
}

function runGame(gameDif) {
    if (gameDif === "easy") {
        easyMode();
    } else if (gameDif === "medium") {
        mediumMode();
    } else if (gameDif === "hard") {
        hardMode();
    } else {
        alert(`unknow difaculty: ${gameDif}`)
        throw `unkown game difaculty; ${gameDif}. aborting!`
    }
}

/**
 * generates a random easy question and answer
 */
function easyMode() {

let qAEasySet = 
[
  {
    question: "What name is given to someone bonded to an Aes Sedai?",
    answers:["Warder", "Asha'man", "Guardian", "Grey man"],
    corectAnswer: 0
  },
  {
    question:"What item does Matt take from Shadar Logoth?",
    answers: ["Gold coin", "Silver dice set", "Ruby-hilted dagger", "Crystal sward "],
    corectAnswer: 2 
    },
  {
    question: "Rand learns to play which instrument?",
    answers: ["Harp", "Flute", "fiddle", "Triangle"],
    corectAnswer: 0
  }
];

/**
 * gets a random question from qAEasySet
 */
function loadQuestion() {
    let questionGen = Math.floor(Math.random() * qAEasySet.length);
    let answers = document.getElementById("answer-container");
    document.getElementById("question").innerHTML = qAEasySet[questionGen]["question"];
     answers.innerHTML = 
        `<button id="btn0" class="answer-btn">${qAEasySet[questionGen]["answers"][0]}</button>
        <button id="btn1" class="answer-btn">${qAEasySet[questionGen]["answers"][1]}</button>
        <button id="btn2" class="answer-btn">${qAEasySet[questionGen]["answers"][2]}</button>
        <button id="btn3" class="answer-btn">${qAEasySet[questionGen]["answers"][3]}</button>`
    qAEasySet.splice(questionGen,1);
    userAnswer();
    console.log(qAEasySet)
};
loadQuestion();
};

