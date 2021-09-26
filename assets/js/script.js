
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

// will shuffel the questions before being called latter in the code 
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
 * checks if selected answer is correct on click of submit button
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
let difButtons = document.getElementById("dif-container")
difButtons.style.display = "none";   
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
    let img = questionSet[i]["img"]
    document.getElementById("answer-card").style.backgroundImage = `url(${img})`
    document.getElementById("question").innerHTML = questionSet[i]["question"];
    
    answers.innerHTML = 
        `<div class="row justify-content-center">
        <input type=button id="btn0" class="col-10 col-sm-4 answer-btn span-2" value="${questionSet[i]["answers"][0]}">
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
    let total = parseInt(document.getElementById("correct-score").innerText)
    resetQuiz()
    document.getElementById("total").innerText = total;
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

