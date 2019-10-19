var time;
var intervalId;
var currentQuestion = "";
var questionsArr = [];
var askedQuestions = [];
var correct = 0;
var incorrect = 0;
var resultsTimeout;

var q1 = {
    title: "Which one of these Astronauts was not on the Apollo 11 mission?",
    a1: "Buzz Aldrin",
    a2: "Neil Armstrong",
    a3: "Michael Collins",
    a4: "Gene Simmons",
    answer: "Gene Simmons",
};

var q2 = {
    title: "The red supergiant star Betelgeuse belongs to which constellation?",
    a1: "Orion",
    a2: "Cygnus",
    a3: "Ursa Major",
    a4: "Scorpio",
    answer: "Orion",
};

var q3 = {
    title: "What is the largest planet in our solar system?",
    a1: "Jupiter",
    a2: "Earth",
    a3: "Saturn",
    a4: "Pluto",
    answer: "Jupiter",
};

var q4 = {
    title: "How many planets are there in the solar system?",
    a1: "Four",
    a2: "Seven",
    a3: "Twelve",
    a4: "Nine",
    answer: "Nine",
};

var q5 = {
    title: "Olympus Mons is a volcano, taller than Mt. Everest on what planet?",
    a1: "Neptune",
    a2: "Mars",
    a3: "Mercury",
    a4: "Venus",
    answer: "Mars",
};

var q6 = {
    title: "Our solar system is located in which galaxy?",
    a1: "The Milky Way",
    a2: "Andromeda",
    a3: "The Twix Factory",
    a4: "Galaxius Giganticus",
    answer: "The Milky Way",
};

var q7 = {
    title: "How old is the Earth?",
    a1: "4000 Years",
    a2: "4.5 Billion Years",
    a3: "1.2 Million Years",
    a4: "65 Million Years",
    answer: "4.5 Billion Years",

};

var q8 = {
    title: "The first man-made object to orbit the earth was called?",
    a1: "Laika",
    a2: "Discovery",
    a3: "Sputnik",
    a4: "Apollo",
    answer: "Sputnik",
};

var q9 = {
    title: "Ganymede is a moon orbiting which planet?",
    a1: "Saturn",
    a2: "Uranus",
    a3: "Mars",
    a4: "Jupiter",
    answer: "Jupiter",
};

var q10 = {
    title: "What is Saturn's largest moon?",
    a1: "Europa",
    a2: "Mimas",
    a3: "Enceladus",
    a4: "Titan",
    answer: "Titan"
};

questionsArr.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);

$("#question-container").css("display", "none");
$("#countdown-timer").css("display", "none");
$("#result-box").css("display", "none");
$("#result").css("display", "none");
$("#answer").css("display", "none");
$("#reset-game").css("display", "none");


console.log(questionsArr);
console.log(currentQuestion);


function newQuestion() {

    time = 10;
    randomNum = Math.floor(Math.random() * questionsArr.length);
    currentQuestion = questionsArr[randomNum];
    $("#countdown-timer").text("You have " + time + " seconds left");
    $("#question-container").css("display", "initial");
    $("#countdown-timer").css("display", "initial");
    $("#result-box").css("display", "none");
    $("#result").css("display", "none");
    $("#answer").css("display", "none");
    $("#reset-game").css("display", "none");
    if (intervalId && intervalId >= 0) {
        clearInterval(intervalId);
    }

    if (questionsArr.length == 0) {
        clearInterval(intervalId);
        $("#question-container").css("display", "none");
        $("#countdown-timer").css("display", "none");
        $("#result-box").css("display", "initial");
        $("#result").css("display", "initial");
        $("#answer").css("display", "initial");
        $("#result-box").css("display", "initial");
        $("#result").html("Here's how you did:<br>");
        $("#answer").html("You answered correctly " + correct + " times<br>" + "You answered incorrectly " + incorrect + " times");
        $("#reset-game").css("display", "initial");
        return;
    } else {
        intervalId = setInterval(countdown, 1000);
        $("#question-box").text(currentQuestion.title);
        $("#a1").text(currentQuestion.a1);
        $("#a2").text(currentQuestion.a2);
        $("#a3").text(currentQuestion.a3);
        $("#a4").text(currentQuestion.a4);
        $("#start-game").css("display", "none");
    }
}


function countdown() {
    time--;
    $("#countdown-timer").text("You have " + time + " seconds left");
    if (time === 0) {
        clearInterval(intervalId);
        // clockRunning = false;
        incorrect++;
        $("#question-container").css("display", "none");
        $("#countdown-timer").css("display", "none");
        $("#result-box").css("display", "initial");
        $("#result").css("display", "initial");
        $("#answer").css("display", "initial");
        $("#result").html("Incorrect! <br>");
        $("#answer").text("The answer was: " + currentQuestion.answer);
        askedQuestions.push(questionsArr[randomNum]);
        questionsArr.splice(randomNum, 1);
        console.log(questionsArr);
        console.log(askedQuestions);

        resultsTimeout = setTimeout(function () {
            newQuestion();
        }, 3000);;
    }
}

$(".answer-option").on("click", function () {

    askedQuestions.push(questionsArr[randomNum]);
    questionsArr.splice(randomNum, 1);

    if ($(this).text() === currentQuestion.answer) {
        correct++;
        console.log("Correct Guesses: " + correct);
        $("#question-container").css("display", "none");
        $("#countdown-timer").css("display", "none");
        $("#result-box").css("display", "initial");
        $("#result").css("display", "initial");
        $("#answer").css("display", "initial");
        $("#result").html("Correct! <br>");
        $("#answer").text("Nice Job, you smart person, you");

        resultsTimeout = setTimeout(function () {
            newQuestion();
        }, 1500);
    } else {
        incorrect++;
        console.log("Incorrect Guesses: " + incorrect);
        $("#question-container").css("display", "none");
        $("#countdown-timer").css("display", "none");
        $("#result-box").css("display", "initial");
        $("#result").css("display", "initial");
        $("#answer").css("display", "initial");
        $("#result").html("Incorrect! <br>");
        $("#answer").text("The answer was: " + currentQuestion.answer);

        resultsTimeout = setTimeout(function () {
            newQuestion();
        }, 1500);
    }
    console.log(questionsArr);
    console.log(askedQuestions);


});

function resetGame() {
    questionsArr.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10);
    newQuestion();

}



