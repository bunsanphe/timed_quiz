var startButton = document.querySelector("#start");
var questionContainer = document.querySelector("#question-container");
var questionTag = document.getElementById("questions");
var answerTag = document.getElementById("answer-btns");
var timerContentTag = document.getElementById("timer-content")
var timerTag = document.getElementById("timer");
var containerTag = document.querySelector(".container-lg");
var introTag = document.getElementById("intro");
var submitFormTag = document.getElementById("submitForm");
var submitButton = document.getElementById("submit-button");
var restartButton = document.getElementById("restart-button");
var clearScoreButton = document.getElementById("clearScore-button");
var initTag = document.getElementById("user");
var scoreboardTag = document.getElementById("scoreboard");
//current time left
var totalTime = 0;
//current elaspe
var elapseTime = 10;
var interval;
var questionsAnswers = [
    {   question: "Some psychologists, echoing Watson, point out that consciousness is subjective and 'if you can measure it...'",
        answers: [
            {text: "'you are in fact studying behavior'", correct: true},
            {text: "'then, and only then, will you have a science'", correct: false},
            {text: "'that will only be the beginning of a long, uncertain validation process'", correct: false},
            {text: "'you just have neural activity, not consciousness'", correct: false},
            ]
        },        
    {   question: "What is true of NON-REM sleep, in contrast to REM sleep?",
        answers: [
            {text: "slower and more regular breathing", correct: true},
            {text: "no mental activity", correct: false},
            {text: "total relaxation of muscles below the neck", correct: false},
            {text: "desynchrony or noise on the EEG", correct: false},
            ]
        },
    {   question: "What is the hypnagogic state?",
        answers: [
            {text: "the state of transition into sleep", correct: true},
            {text: "a state closely resembling hypnotism", correct: false},
            {text: "a state during which it is particularly easy to talk to someone in their sleep", correct: false},
            {text: "a state halfway between sleep and hypnosis", correct: false},
            ]
        },
    {   question: "What is a lucid dream?",
        answers: [
            {text: "a dream where you know you are dreaming", correct: true},
            {text: "a dream with unusually clear meaning", correct: false},
            {text: "what Pieron called a limpid dream", correct: false},
            {text: "a dream vision of the future", correct: false},
            ]
        },    
    {   question: "Most psychologists agree hypnosis involves...",
        answers: [
            {text: "hypersuggestibility", correct: true},
            {text: "synchronization of brain waves", correct: false},
            {text: "eye fatigue", correct: false},
            {text: "the locus coeruleus", correct: false},
            ]
        },
    {   question: "Which would be categorized as a 'leading question' when interviewing somebody under hypnosis?",
        answers: [
            {text: "Did the robber seem nervous?", correct: true},
            {text: "What did you do last night?", correct: false},
            {text: "What do you remember?", correct: false},
            {text: "Do you remember the face of the intruder?", correct: false},
            ]
        },
    {   question: "Many forms of meditation involve...",
        answers: [
            {text: "stopping or ignoring the inner voice", correct: true},
            {text: "hypnosis by an expert, to get started", correct: false},
            {text: "the period of calmness right after a meal", correct: false},
            {text: "explorations of the thought processes, using the inner voice", correct: false},
            ]
        },
    {   question: "Which of the following is a narcotic?",
        answers: [
            {text: "morphine", correct: true},
            {text: "cocaine", correct: false},
            {text: "marijuana", correct: false},
            {text: "PCP", correct: false},
            ]
        },
    {   question: "Alcohol myopia is said to be...",
        answers: [
            {text: "a reason alcohol consumption is a risk factor for sexually transmitted diseases", correct: true},
            {text: "a factor which makes social interaction seem larger and close up", correct: false},
            {text: "the reason for blurry vision during intoxication", correct: false},
            {text: "similar in effect to marijuana myopia", correct: false},
            ]
        },
    {   question: "What is anandamide?",
        answers: [
            {text: "a brain chemical which appears in the frontal lobes and hippocampus", correct: true},
            {text: "the active ingredient in nitrous oxide", correct: false},
            {text: "a chemical which counteracts or antagonizes the effect of marijuana", correct: false},
            {text: "a hallucinogenic designer drug", correct: false},
            ]
        },    
        
];
//VARIABLES Potential HTML
//Things in code
//Start button
//Start / Total seconds

//current time html element
//form /input to allow us to add our initials
//questions - list array
    //questions
    //list of possible answers
    //correct answer

var randomQuestions;
var currentQuestionIndex;
//when the user clicks the start button we need to start the timer and prompt the first question
startButton.addEventListener("click", start);

//when the user clicks the start button we need to start the timer and prompt the first question
function start() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    timerContentTag.classList.remove("hide");
    randomQuestions = questionsAnswers.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    setNextQuestion();

    //timer fx
    var timerInterval = setInterval(function() {
        elapseTime--;
        timerTag.textContent = elapseTime

        if(elapseTime === 0) {
            clearInterval(timerInterval);
            gameEnd()
        }
    }, 1000);
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    displayQuestion(randomQuestions[currentQuestionIndex])
}

function displayQuestion(question) {
    questionTag.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerTag.appendChild(button);
    })
}

function resetState() {
    while(answerTag.firstChild) {
        answerTag.removeChild(answerTag.firstChild);
    }
}

//validate answer
function selectAnswer(e) {
    var selectedAnswerButton = e.target;
    var correctAnswer = selectedAnswerButton.dataset.correct;
    // Array.from(answerTag.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })
    if ((randomQuestions > currentQuestionIndex.length + 1) && correctAnswer) {
        //log correct 
        currentQuestionIndex++
        setNextQuestion()
        
    }
    else if (randomQuestions === currentQuestionIndex.length) {
        gameEnd()
    }
    else {
        //reduce timer
        // function setNewInterval() {
        //     var secondsLeft;
        //     secondsLeft = 
        // }
        // var timerInterval = setInterval(function() {
            // timerTag.textContent = totalTime - 10;


            // timerTag.textContent = totalTime
    
        //     if(totalTime === 0) {
        //         clearInterval(timerInterval);
        //         gameEnd()
        //     }
        // }, 1000);
        //go to next question
        currentQuestionIndex++
        setNextQuestion()
    }
}

// function setCorrect {
//     var correctCounter = 0
    
// }

restartButton.addEventListener("click", start);


function gameEnd(){
    //game end fx
    questionContainer.classList.add("hide");
    timerContentTag.classList.add("hide");
    introTag.classList.add("hide");
    submitFormTag.classList.remove("hide");
    scoreboardTag.classList.remove("hide");


    // clearScoreButton.addEventListener("click", function () {

    // };
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        var init = document.querySelector("#initialInput").value;
        localStorage.setItem("initialInput", init);
        localStorage.setItem("score", score);
        renderInit()
    })
        //display score
        //provide an input to enter our initials
        //when the user submits their initials
    //add their high score to local storage
}


function renderInit(){
    var init = localStorage.getItem("initialInput");
    initTag.textContent = init;
}

//ACTIONS

//when the user clicks an answer button, we need to
    //validate if it's correct
        //if it's not correct, we need to remove additional time from the clock
    //presented with another question
//we need to use an interval to create a countdown - setInterval(callback, 1000)
    //increment elaspe time
    //calculate new current time left by subtracting totalTime - elaspeTime
    //check if timer has reached 0
        //end the game
    //update the time left number in the html