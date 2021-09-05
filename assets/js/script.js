
//loads game and event listeners. 
//code largely influenced by code institutes love maths project
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("dif-btn");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")) {
                let gameDif = this.getAttribute("data-type");
                runGame(gameDif);
            }
        });
    }
    }
);

let qAEasySet = 
[
    {
    question: "What name is given to someone bonded to an Aes Sedai?",
    answers:["Warder", "Asha'man", "Guardian", "Grey man"],
    corectAnswer: "Warder"
    },
    {
    question:"What item does Matt take from Shadar Logoth?",
    answers: ["Gold coin", "Silver dice set", "Ruby-hilted dagger", "Crystal sward "],
    corectAnswer: "Ruby-hilted dagger"
    },
    {
    question: "Rand learns to play which instrument?",
    answers: ["Harp", "Flute", "fiddle", "Triangle"],
    corectAnswer: "Flute"
    }
];

/**
 * this adds the selected class to a anserbutton when clicked by the user.
 * it also calls the clearselected function to remove the selected class from other buttons.
 */
function userAnswer(c, g) {
    let answers = document.getElementsByClassName("answer-btn")
    for (let answer of answers) {
        answer.addEventListener("click", () => {
            clearSelected();
            answer.classList.add("selected");
            checkAnswer(c ,g);
        })
    };
};

/**
 * clears the selcted class from buttons if a sibling button is clicked.
 */
function clearSelected() {
    let answers = document.getElementsByClassName("answer-btn")
    for (let answer of answers) {
        let sibs = answer.parentElement.children;
            for (let sib of sibs) {
                if (sib.classList === "answer-btn selected");
                sib.classList.remove("selected");
            };
    };
};

/**
 * checks is selected answer is correct on click of submit button
 * and responds with correct or incorrect answer box.
 */
function checkAnswer(i, t) {
    
    let selctedAnswer = document.getElementsByClassName("selected");
    console.log(selctedAnswer)
    let text = selctedAnswer[0].getAttribute("value");
    console.log("i:", i, " text:", text);
    console.log(qAEasySet);
    if (text === i) {
        correctBox(t);
        correctScore();      
    } else {
        incorrectBox(t);
        incorrectScore();
    }
    
};

/**
 * hides question box and shows correct answer box and text when called.
 */
function correctBox (t) {
    let correctAnswerBox = document.getElementById("correct");
    let answerBox = document.getElementById("answer-card");
    correctAnswerBox.style.display = "block";
    answerBox.style.display = "none";
    let next = document.getElementById("next-btn");
    next.addEventListener("click", () => {
        answerBox.style.display = "block";
        correctAnswerBox.style.display = "none";
        runGame(t);
    })
};

/**
 * hides question box and shows incorrect answer box and text when called.
 */
function incorrectBox (t) {
    let incorrectAnswerBox = document.getElementById("incorrect");
    let answerBox = document.getElementById("answer-card");
    incorrectAnswerBox.style.display = "block";
    answerBox.style.display = "none";
    let next = document.getElementById("incorrect-next-btn");
    next.addEventListener("click", () => {
        answerBox.style.display = "block";
        incorrectAnswerBox.style.display = "none";
        runGame(t);
    })
};

/**
 * runs the dificulty level the user selects.
 */
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
};

/**
 * gets a random question from selected question set
 */
 function loadQuestion(q, c, g) {
    let answers = document.getElementById("answer-container");
    document.getElementById("question").innerHTML = q[g]["question"];
     answers.innerHTML = 
        `<input type=button id="btn0" class="answer-btn" value="${q[g]["answers"][0]}">
        <input type=button id="btn1" class="answer-btn" value="${q[g]["answers"][1]}">
        <input type=button id="btn2" class="answer-btn" value="${q[g]["answers"][2]}">
        <input type=button id="btn3" class="answer-btn" value="${q[g]["answers"][3]}">`
};

/**
 * code taken from code institiue love maths project.
 * gets current score from DOM and increments by 1
 */
function correctScore() {
    let score = parseInt(document.getElementById("correct-score").innerText);
    document.getElementById("correct-score").innerText = ++score;
};

/**
 * code taken from code institiue love maths project.
 * gets current incorect score from DOM and increments by 1
 */
function incorrectScore() {
    let score = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++score;
};

/**
 * generates  random easy questions and answers
 */
function easyMode() {
let questionSet= qAEasySet;
let questionGen = Math.floor(Math.random() * questionSet.length);
let corectAns = questionSet[questionGen]["corectAnswer"];
let easy = "easy";
loadQuestion(questionSet, corectAns, questionGen);
userAnswer(corectAns, easy);
qAEasySet.splice(questionGen,1);

};

