
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

function checkAnswer(i) {
    let submitBtn = document.getElementById("submit-btn");
    submitBtn.addEventListener("click", () => {
        let selctedAnswer = document.getElementsByClassName("selected");
        let text = selctedAnswer[0].getAttribute("value");
        console.log(text);
        if (text === i) {
            alert(`Weldone!`);
        } else if (text !== i) {
            alert(`Nope`);
        }
    })
}

/**
 * runs the difculty level the user selects.
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
}

/**
 * generates  random easy questions and answers
 */
function easyMode() {

/**
 * gets a random question from qAEasySet
 */
function loadQuestion() {
    let questionGen = Math.floor(Math.random() * qAEasySet.length);
    let corectAns = qAEasySet[questionGen]["corectAnswer"];
    let answers = document.getElementById("answer-container");
    document.getElementById("question").innerHTML = qAEasySet[questionGen]["question"];
     answers.innerHTML = 
        `<input type=button id="btn0" class="answer-btn" value="${qAEasySet[questionGen]["answers"][0]}">
        <input type=button id="btn1" class="answer-btn" value="${qAEasySet[questionGen]["answers"][1]}">
        <input type=button id="btn2" class="answer-btn" value="${qAEasySet[questionGen]["answers"][2]}">
        <input type=button id="btn3" class="answer-btn" value="${qAEasySet[questionGen]["answers"][3]}">`
    userAnswer();
    checkAnswer(corectAns);
    qAEasySet.splice(questionGen,1);
};
loadQuestion();
};

