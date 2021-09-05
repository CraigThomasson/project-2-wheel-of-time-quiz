
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

let easyQuestions = [
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
    answers: ["Harp", "Flute", "Fiddle", "Triangle"],
    corectAnswer: "Flute"
    },
    {
    question: "What does Perin bring with him from master Luhhan’s smithy when leaving Emond’s Field?",
    answers: ["War pick", "Heron marked blade", "Blacksmiths hammer", "Half moon axe"],
    corectAnswer: "Half moon axe"
    },
    {
    question: "Which of these colours does not belong to and Ajar of the White Tower?",
    answers: ["green", "Purple", "Blue", "Red"],
    corectAnswer: "Purple"
    },
    {
    question: "Hopper is a…? ",
    answers: ["Tiger", "Rabbit", "Frog", "Wolf"],
    corectAnswer: "Wolf"
    }
];

let questionSet = [];
let questionGen = "";
function chooseQuestionList(modeSelect) {
    if (modeSelect === "easymode") {
        questionSet = easyQuestions;
        console.log("question set", questionSet);
    };
}

let answerSet = [];
function chooseAnswerList(modeSelect) {
    if (modeSelect === "easymode") {
        answerSet = [
            {
            corectAnswer: "Warder"
            },
            {
            corectAnswer: "Ruby-hilted dagger"
            },
            {
            corectAnswer: "Flute"
            },
            {
            corectAnswer: "Half moon axe"
            },
            {
            corectAnswer: "Purple"
            },
            {
            corectAnswer: "Wolf"
            }
        ];
    }
}

/**
 * this adds the selected class to a anserbutton when clicked by the user.
 * it also calls the clearselected function to remove the selected class from other buttons.
 */
function userAnswer(corectAns, mode) {
    let answers = document.getElementsByClassName("answer-btn")
    for (let answer of answers) {
        answer.addEventListener("click", () => {
            clearSelected();
            answer.classList.add("selected");
            checkAnswer(corectAns, mode);
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
function checkAnswer(corectAns, mode) {
    
    let selctedAnswer = document.getElementsByClassName("selected");
    let text = selctedAnswer[0].getAttribute("value");
    if (text === corectAns) {
        correctBox(mode);
        correctScore();
        questionCounter(); 
    } else {
        incorrectBox(mode);
        incorrectScore();
        questionCounter();
    }
};

/**
 * hides question box and shows correct answer box and text when called.
 */
function correctBox (mode) {
    let correctAnswerBox = document.getElementById("correct");
    let answerBox = document.getElementById("answer-card");
    correctAnswerBox.style.display = "block";
    answerBox.style.display = "none";
    let next = document.getElementById("next-btn");
    next.addEventListener("click", () => {
        answerBox.style.display = "block";
        correctAnswerBox.style.display = "none";
        endQuiz()
        runGame(mode);
    })
};

/**
 * hides question box and shows incorrect answer box and text when called.
 */
function incorrectBox (mode) {
    let incorrectAnswerBox = document.getElementById("incorrect");
    let answerBox = document.getElementById("answer-card");
    incorrectAnswerBox.style.display = "block";
    answerBox.style.display = "none";
    let next = document.getElementById("incorrect-next-btn");
    next.addEventListener("click", () => {
        answerBox.style.display = "block";
        incorrectAnswerBox.style.display = "none";
        endQuiz()
        runGame(mode);
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
 function loadQuestion(questions, questionRandom, corectAns, mode) {
    let answers = document.getElementById("answer-container");
    document.getElementById("question").innerHTML = questions[questionRandom]["question"];
    answers.innerHTML = 
        `<input type=button id="btn0" class="answer-btn" value="${questions[questionRandom]["answers"][0]}">
        <input type=button id="btn1" class="answer-btn" value="${questions[questionRandom]["answers"][1]}">
        <input type=button id="btn2" class="answer-btn" value="${questions[questionRandom]["answers"][2]}">
        <input type=button id="btn3" class="answer-btn" value="${questions[questionRandom]["answers"][3]}">`;
    userAnswer(corectAns, mode);
    easyQuestions.splice(questionRandom,1);
    console.log("loadquestion", questionSet);
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

function questionCounter () {
    let count = parseInt(document.getElementById("question-counter").innerText);
    document.getElementById("question-counter").innerText = ++count;
};

/**
 * brings up the end card when the desiered amount of questions have been answerd.
 */
function endQuiz() {
    let count =  parseInt(document.getElementById("question-counter").innerText);
    let correctAnswerBox = document.getElementById("correct");
    let answerBox = document.getElementById("answer-card");
    let incorrectAnswerBox = document.getElementById("incorrect");
    let endBox = document.getElementById("end-box")
    resetQuiz()
    document.getElementById("total").innerText = count;
    if (count == 5) {
        endBox.style.display = "block";
        correctAnswerBox.style.display = "none";
        answerBox.style.display = "none";
        incorrectAnswerBox.style.display = "none";
    }
};

/**
 * this reloads the page when called
 */
function resetQuiz() {
    let reset = document.getElementById("restart")
    reset.addEventListener("click", () => {
        location.reload();
    })
};

/**
 * generates  random easy questions and answers
 */
function easyMode() {
    let mode = "easy"
    chooseQuestionList("easymode")
    chooseAnswerList("easymode")
    questionGen = Math.floor(Math.random() * questionSet.length);
    let corectAns = questionSet[questionGen]["corectAnswer"];
    loadQuestion(questionSet, questionGen, corectAns, mode);
    console.log("leasymoad", questionSet);
};

