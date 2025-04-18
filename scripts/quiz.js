// QUESTIONS

const questionsList = [
    {
        question: "What is the capital of Barbados?",
        answers: [
            {option: "Kingston", correct: false},
            {option: "Bridgetown", correct: true},
            {option: "Port au Spain", correct: false},
            {option: "London", correct: false}
        ]
    },
    {
        question: "What is the capital of South Korea?",
        answers: [
            {option: "Busan", correct: false},
            {option: "Pyongyang", correct: false},
            {option: "Seoul", correct: true},
            {option: "Incheon", correct: false}
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            {option: "River Thames", correct: false},
            {option: "River Nile", correct: true},
            {option: "Amazon River", correct: false},
            {option: "Rio Grande", correct: false}
        ]
    },
    {
        question: "What is the largest Caribbean country?",
        answers: [
            {option: "Trinidad and Tobago", correct: false},
            {option: "Peurto Rico", correct: false},
            {option: "Cuba", correct: true},
            {option: "Jamaica", correct: false}
        ]
    },
    {
        question:"Which country does this flag '🇦🇹' represent?",
        answers: [
            {option: "Latvia", correct: false},
            {option: "Denmark", correct: false},
            {option: "Netherlands", correct: false},
            {option: "Austria", correct: true}
        ]
    },
    {
        question:"Which country does this flag '🇩🇯' represent?",
        answers: [
            {option: "Djibouti", correct: true},
            {option: "Nigeria", correct: false},
            {option: "Tanzania", correct: false},
            {option: "Kenya", correct: false}
        ]
    },
    {
        question:"Which country does this flag '🇹🇻' represent?",
        answers: [
            {option: "Samoa", correct: false},
            {option: "Papa New Guinea", correct: false},
            {option: "Phillipines", correct: false},
            {option: "Tuvalu", correct: true}
        ]
    },
    {
        question:"Which country does this flag '🇲🇸' represent?",
        answers: [
            {option: "British Antarctic Territory", correct: false},
            {option: "Montserrat", correct: true},
            {option: "Falkland Islands", correct: false},
            {option: "Hawai'i", correct: false}
        ]
    },
    {
        question: "How many countries does China share a border with",
        answers: [
            {option: "3", correct: false},
            {option: "14", correct: true},
            {option: "6", correct: false},
            {option: "10", correct: false}
        ]
    },
    {
        question: "How many islands officially make up the Indonesian Archipelago?",
        answers: [
            {option: "5", correct: false},
            {option: "15,076", correct: false},
            {option: "289", correct: false},
            {option: "17,508", correct: true}
        ]
    },
    {
        question: "Which of these colors is not present on the Mexican flag?",
        answers: [
            {option: "Orange", correct: true},
            {option: "Brown", correct: false},
            {option: "Pink", correct: false},
            {option: "Green", correct: false}
        ]
    },
    {
        question: "The ocean is divided into how many individual oceans?",
        answers: [
            {option: "5", correct: false},
            {option: "4", correct: false},
            {option: "7", correct: true},
            {option: "6", correct: false}
        ]
    },
    {
        question: "In which country is the world's tallest mountain above sea level?",
        answers: [
            {option: "Mt. Fuji", correct: false},
            {option: "Mt. Kilomanjaro", correct: false},
            {option: "Mt. Everest", correct: true},
            {option: "Mt. Snowdon", correct: false}
        ]
    },
    {
        question: "Which country was the Dodo bird indigenous to?",
        answers: [
            {option: "Mauritius", correct: true},
            {option: "Madagascar", correct: false},
            {option: "Ecuador", correct: false},
            {option: "Australia", correct: false}
        ]
    },
    {
        question: "Which country has the highest biodiversity index?",
        answers: [
            {option: "USA", correct: false},
            {option: "Colombia", correct: false},
            {option: "Thailand", correct: false},
            {option: "Brazil", correct: true}
        ]
    }
];


// GENERAL VARIABLES

const startButton = document.getElementById("start-button");
const instructionsButton = document.getElementById("instructions-button");
const returnToMainMenu = document.getElementById("return-to-menu-button")
const nextButton = document.getElementById("next-button");

const startScreen = document.getElementById("start-screen");
const instructionsScreen = document.getElementById("instructions-container");
const gameScreen = document.getElementById("game-screen");
const resultsDashboard = document.getElementById("results-dashboard");

const questionDisplayed = document.getElementById("question-goes-here");
const answersDisplayed = document.getElementById("answers-container");
const questionsLimitPerGame = 15;

let randomizedQuestionsList = [];
let currentQuestionIndex = 0;
let score = 0;


// EVENT LISTENERS

startButton.addEventListener("click", startGame);
instructionsButton.addEventListener("click", instructions);
nextButton.addEventListener("click", nextQuestion);


// FUNCTIONS

function startGame(){
    console.log("The game has started!");
    startScreen.classList.add("hide");
    gameScreen.classList.remove("hide");
}

function instructions(){
    startScreen.classList.add("hide");
    instructionsScreen.classList.remove("hide");

    // if (startButton.click === true){
    //     instructionsScreen.classList.remove("show");
    //     gameScreen.classList.add("show");
    // } else if (returnToMainMenu === true) {
    //     instructionsScreen.classList.remove("show");
    //     startScreen.classList.add("show");
    // }
};

returnToMainMenu

function nextQuestion(){
    for ()

};

function showQuestion(){

};

function selectAnswer(){
    checkAnswer()
}

function checkAnswer(){

};



