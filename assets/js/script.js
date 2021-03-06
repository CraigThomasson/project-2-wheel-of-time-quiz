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

// will shuffle the questions before being called.
shuffle(easyQuestions);
shuffle(mediumQuestions);
shuffle(hardQuestions);

/**
 * picks the correct question set for the selected game mode
 */
let questionSet = [];
function chooseQuestionList(modeSelect) {
    if (modeSelect === "easyMode") {
        questionSet = easyQuestions;
    }
    if (modeSelect ==="mediumMode") {
        questionSet = mediumQuestions;
    }
    if (modeSelect ==="hardMode") {
        questionSet = hardQuestions;
    }
}

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
}

/**
 * this adds the selected class to an answer button when clicked by the user.
 * also passes correct answer and mode to the checkanswer function.
 */
function userAnswer(correctAns, mode) {
    let answers = document.getElementsByClassName("answer-btn");
    for (let answer of answers) {
        answer.addEventListener("click", () => {
            answer.classList.add("selected");
            checkAnswer(correctAns, mode);
        });
    }
}

/**
 * checks if selected answer is correct on click of answer button
 * and responds with correct or incorrect answer box.
 */
function checkAnswer(correctAns, mode) {
    let selctedAnswer = document.getElementsByClassName("selected");
    let text = selctedAnswer[0].getAttribute("value");
    if (text === correctAns) {
        correctBox(mode);
        correctScore();
        questionCounter(); 
    } else {
        incorrectBox(correctAns, mode);
        incorrectScore();
        questionCounter();
    }
}

/**
 * hides question box and shows correct answer box and text when called.
 * adds event listener to next button
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
        endQuiz();
        runGame(mode);
    });
}

/**
 * hides question box and shows incorrect answer box and text when called.
 * adds event listener to next button
 */
function incorrectBox (correctAns ,mode) {
    let incorrectMsg = document.getElementById("correct-span");
    incorrectMsg.innerText = correctAns;
    let incorrectAnswerBox = document.getElementById("incorrect");
    let answerBox = document.getElementById("answer-card");
    incorrectAnswerBox.style.display = "block";
    answerBox.style.display = "none";
    let next = document.getElementById("incorrect-next-btn");
    next.addEventListener("click", () => {
        answerBox.style.display = "block";
        incorrectAnswerBox.style.display = "none";
        endQuiz();
        runGame(mode);
    });
}

/**
 * runs the difficulty level the user selects.
 * uses chooseQuestionlist function to generate correct question list
 * uses loadQuestion function to load questions and answers on to the html
 */
function runGame(gameDif) {
let difButtons = document.getElementById("dif-container");
difButtons.style.display = "none"; //hides difficulty buttons when game is running.  
    if (gameDif === "easy") {
        let mode = "easy";
        chooseQuestionList("easyMode");
        loadQuestion(mode);
    } else if (gameDif === "medium") {
        let mode = "medium";
        chooseQuestionList("mediumMode");
        loadQuestion(mode);
    } else if (gameDif === "hard") {
        let mode = "hard";
        chooseQuestionList("hardMode");
        loadQuestion(mode);
    } 
}

/**
 * loads questions and answers from chosen question set.
 * gets questions and answers from the shuffled question set.
 * runs user answer function to check questions.
 * passed mode and correct answer to userAnswer function
 */
 function loadQuestion(mode) {
    let answers = document.getElementById("answer-container");
    let i = parseInt(document.getElementById("question-counter").innerText);
    let correctAns = questionSet[i]["corectAnswer"];
    let img = questionSet[i]["img"];
    document.getElementById("answer-card").style.backgroundImage = `url(${img})`;
    document.getElementById("question").innerHTML = questionSet[i]["question"];
    answers.innerHTML = 
        `<div class="row justify-content-center">
        <input type=button id="btn0" aria-label="${questionSet[i]["answers"][0]}" class="col-10 col-sm-4 answer-btn span-2" value="${questionSet[i]["answers"][0]}">
        <input type=button id="btn1" aria-label="${questionSet[i]["answers"][1]}" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][1]}">
        </div>
        <div class="row justify-content-center">
        <input type=button id="btn2" aria-label="${questionSet[i]["answers"][2]}" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][2]}">
        <input type=button id="btn3" aria-label="${questionSet[i]["answers"][3]}" class="col-10 col-sm-4 answer-btn" value="${questionSet[i]["answers"][3]}">
        </div>`;
    userAnswer(correctAns, mode);
}

/**
 * code taken from code institute love maths project.
 * gets current score from DOM and increments by 1
 */
function correctScore() {
    let score = parseInt(document.getElementById("correct-score").innerText);
    document.getElementById("correct-score").innerText = ++score;
}

/**
 * code taken from code institute love maths project.
 * gets current incorrect score from DOM and increments by 1
 */
function incorrectScore() {
    let score = parseInt(document.getElementById("incorrect-score").innerText);
    document.getElementById("incorrect-score").innerText = ++score;
}

/**
 * updates the question counter
 */
function questionCounter () {
    let count = parseInt(document.getElementById("question-counter").innerText);
    document.getElementById("question-counter").innerText = ++count;
}

/**
 * brings up the end card when the desired amount of questions have been answered.
 * adds event listener to button and resets the page when clicked.
 */
function endQuiz() {
    let count =  parseInt(document.getElementById("question-counter").innerText);
    let correctAnswerBox = document.getElementById("correct");
    let answerBox = document.getElementById("answer-card");
    let incorrectAnswerBox = document.getElementById("incorrect");
    let endBox = document.getElementById("end-box");
    let total = parseInt(document.getElementById("correct-score").innerText);
    let questionCard = document.getElementById("question-card");
    resetQuiz();
    document.getElementById("total").innerText = total;
    if (count == 5) {
        questionCard.style.display = "none";
        endBox.style.display = "block";
        correctAnswerBox.style.display = "none";
        answerBox.style.display = "none";
        incorrectAnswerBox.style.display = "none";
    }
}

/**
 * this reloads the page when restart button is clicked.
 */
function resetQuiz() {
    let reset = document.getElementById("restart");
    reset.addEventListener("click", () => {
        location.reload();
    });
}