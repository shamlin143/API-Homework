var timeleft = 25;
var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Finished";
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
}, 2500);

var questions = [
    ["How many pounds do you think Smalls weighs?", "200", '155', "180", "155"],
    ["How many pounds do you think Hunter weighs?", "63", "72", "87", "87"],
    ["How many pounds do you think Molly weighs?", "10", "15", "12", "10"]
];

var i = 0;
var optionOneEl = document.getElementById("opt1");
var optionTwoEl = document.getElementById("opt2");
var optionThreeEl = document.getElementById("opt3");
var optionFourEl = document.getElementById("next");

optionOneEl.addEventListener("click", checkAnswers);
optionTwoEl.addEventListener("click", checkAnswers);
optionThreeEl.addEventListener("click", checkAnswers);
optionFourEl.addEventListener("click", changeQuestion);
document.getElementById("dogques").innerHTML = questions[i][0];
function renderQuestions() {
    dogquiz.opt1.value = questions[i][1];
    dogquiz.opt2.value = questions[i][2];
    dogquiz.opt3.value = questions[i][3];
    optionOneEl.textContent = questions[i][1]
    optionTwoEl.textContent = questions[i][2]
    optionThreeEl.textContent = questions[i][3]
    document.getElementById("dogques").innerHTML = questions[i][0];
}


function changeQuestion() {
    i = i + 1
    renderQuestions()
}

function checkAnswers() {
    console.log(this)
    var answer = this.textContent;
     '155' == '155'
    if (answer == questions[i][questions.length - 1]) {
        alert("Correct Weight you must have a dog")
        changeQuestion()
        renderQuestions()
    }
    else {
        alert("Wrong Weight do you even have a dog")
        changeQuestion()
    }
}
 
function choices() {
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        var answers = window.prompt(questions[i].prompt);
        if (response == questions[i].answer) {
            score++;
            alert("Correct you must love dogs");
        } else {
            alert("Wrong Do you even have a dog!")
        }
    }
    alert("you got" + score + "/" + questions.lenght);
}

renderQuestions()