
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

let mediumQuestions = [
    {
    question: "What is the name of the army that follows Matrim cauthon?",
    answers:["The band of the red hammer", "The band of the red heron", "The band of the red hand", "The band of the red wheel"],
    corectAnswer: "The band of the red hand"
    },
    {
    question:"How many sisters does Matt have?",
    answers: ["One", "Two", "Three", "four"],
    corectAnswer: "Two"
    },
    {
    question: "meduim question",
    answers: ["Harp", "Flute", "Fiddle", "Triangle"],
    corectAnswer: "Flute"
    },
    {
    question: "meduim question",
    answers: ["War pick", "Heron marked blade", "Blacksmiths hammer", "Half moon axe"],
    corectAnswer: "Half moon axe"
    },
    {
    question: "medium question",
    answers: ["green", "Purple", "Blue", "Red"],
    corectAnswer: "Purple"
    },
    {
    question: "medium question ",
    answers: ["Tiger", "Rabbit", "Frog", "Wolf"],
    corectAnswer: "Wolf"
    }
];

shuffle(easyQuestions)
shuffle(mediumQuestions)

/**
 * pics the correct question set for the selected game mode
 */
let questionSet = [];
function chooseQuestionList(modeSelect) {
    if (modeSelect === "easyMode") {
        questionSet = easyQuestions;
    }
    if (modeSelect ==="mediumMode") {
        questionSet = mediumQuestions;
    }
    if (modeSelect ==="hardmMode") {
        questionSet = hardQuestions;
    };
};

/**
 * fisher-yeates shuffle
 * this will randomly shuffle question and answer array
 */
function shuffle(array) {
    // Loop from the last element to the second element
    for(let i = array.length - 1; i > 0; i--) {
    // Generate random index from remaining unshuffled elements
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements
    [array[i], array[j]] = [array[j], array[i]];
    }
    };

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
 function loadQuestion(questionSet, mode) {
    let answers = document.getElementById("answer-container");
    let i = parseInt(document.getElementById("question-counter").innerText);
    console.log(i);
    console.log(questionSet)
    let correctAns = questionSet[i]["corectAnswer"];
    console.log(correctAns);
    document.getElementById("question").innerHTML = questionSet[i]["question"];
    answers.innerHTML = 
        `<div class="row justify-content-center">
        <input type=button id="btn0" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][0]}">
        <input type=button id="btn1" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][1]}">
        </div>
        <div class="row justify-content-center">
        <input type=button id="btn2" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][2]}">
        <input type=button id="btn3" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][3]}">
        </div>`;
    userAnswer(correctAns, mode);
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
 * updates the question counter
 */
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
    chooseQuestionList("easyMode")
    questionSet
    loadQuestion(questionSet, mode,);
};

/**
 * generates  random medium questions and answers
 */
function mediumMode() {
    let mode = "medium"
    chooseQuestionList("mediumMode")
    questionSet
    loadQuestion(questionSet, mode,);
};

/**
 * generates  random hard questions and answers
 */
function hardMode() {
    let mode = "hard"
    chooseQuestionList("hardMode")
    questionSet
    loadQuestion(questionSet, mode,);
};

