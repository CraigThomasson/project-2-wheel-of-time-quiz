
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
function userAnswer() {
    let answers = document.getElementsByClassName("answer-btn")
    for (let answer of answers) {
        answer.addEventListener("click", () => {
            clearSelected();
            answer.classList.add("selected");
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
function checkAnswer(i) {
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", () => {
        let selctedAnswer = document.getElementsByClassName("selected");
        let text = selctedAnswer[0].getAttribute("value");
        if (text === i) {
            correctBox()
            
        } else if (text !== i) {
            incorrectBox();
        }
    })
};

/**
 * hides question box and shows correct answer box and text when called.
 */
function correctBox () {
    let correctAnswerBox = document.getElementById("correct");
    let answerBox = document.getElementById("answer-card");
    correctAnswerBox.style.display = "block";
    answerBox.style.display = "none";
    let next = document.getElementById("next-btn")
    next.addEventListener("click", () => {
        answerBox.style.display = "block";
        correctAnswerBox.style.display = "none";
    })
};

/**
 * hides question box and shows incorrect answer box and text when called.
 */
function incorrectBox () {
    let incorrectAnswerBox = document.getElementById("incorrect");
    let answerBox = document.getElementById("answer-card");
    incorrectAnswerBox.style.display = "block";
    answerBox.style.display = "none";
}

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
    userAnswer();
    checkAnswer(c);
    qAEasySet.splice(g,1);
};

/**
 * generates  random easy questions and answers
 */
function easyMode() {
let questionSet= qAEasySet;
let questionGen = Math.floor(Math.random() * questionSet.length);
let corectAns = questionSet[questionGen]["corectAnswer"];
loadQuestion(questionSet, corectAns, questionGen);
};

