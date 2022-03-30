const questionsTemplate = [
	{
		question: "Coffee Beans are Technically",
		answers: ["Seeds", "Legumes", "Beans", "Cherry like Berries"],
		correctAnswer: "Seeds",
		givenAnswer: "",
	},
	{
		question: "What is the Home of Coffee Lovers",
		answers: ["America", "Finland", "Germany", "England"],
		correctAnswer: "Finland",
		givenAnswer: "",
	},
	{
		question: "A Hot Dog bun is similar to a ",
		answers: [
			"a roll",
			"a partially sliced bun",
			"Submarine sandwich",
			"Sandwich rolls",
		],
		correctAnswer: "Submarine sandwich",
		givenAnswer: "",
	},
	{
		question: "Hotdogs - place of origin",
		answers: ["France", "Finland", "Norway", "Germany/United States"],
		correctAnswer: "Germany/United States",
		givenAnswer: "",
	},
	{
		question: "The worlds biggest waffle",
		answers: [
			"Is 8ft long and weighted 50 kg",
			"Weights 3 African elephants",
			"Is unweighable",
			"Does not exist",
		],
		correctAnswer: "Is 8ft long and weighted 50 kg",
		givenAnswer: "",
	},
	{
		question: "The hot dog shaped like vehicle is called the ",
		answers: ["Pickle Dog", "Wienermobile", "Moon Juice", "SPAM Musubi"],
		correctAnswer: "Wienermobile",
		givenAnswer: "",
	},
	{
		question: "The Hamburger Hall of Fame is housed in ",
		answers: [
			"New Orleans, Louisiana.",
			"London, England.",
			"Seymour, Wisconsin.",
			"Portland, Maine. ",
		],
		correctAnswer: "Seymour, Wisconsin.",
		givenAnswer: "",
	},
	{
		question:
			"Ice cream headaches are also called",
		answers: ["washygot fredakes", "Throbbing Head", "Headexplodies", "Brain Freez"],
		correctAnswer: "Brain Freez",
		givenAnswer: "",
	},
	{
		question: "Poor-Knights is an alternative name for ",
		answers: ["French Toste", "Hamburgers", "Sandwichers", "Pancakes"],
		correctAnswer: "French Toste",
		givenAnswer: "",
	},
	{
		question: "The origins of French-fries run back to",
		answers: ["France", "Belgium", "China", "India"],
		correctAnswer: "Belgium",
		givenAnswer: "",
	},
];

let questions;

var currentQuestion = 0;

/**
 * Loads the question on the form
 */
function loadQuestion() {
	if (currentQuestion === 0) {
		questions = Array.from(questionsTemplate);
		questions.sort((a, b) => 0.5 - Math.random());
	}
	document.getElementById("questionNumber").innerHTML =
		"Question " + (currentQuestion + 1);
	document.getElementById("question01").innerHTML =
		questions[currentQuestion].question;
	document.getElementById("Q1-1L").innerHTML =
		questions[currentQuestion].answers[0];
	document.getElementById("Q1-2L").innerHTML =
		questions[currentQuestion].answers[1];
	document.getElementById("Q1-3L").innerHTML =
		questions[currentQuestion].answers[2];
	document.getElementById("Q1-4L").innerHTML =
		questions[currentQuestion].answers[3];

	document.getElementById("Q1-1").value = questions[currentQuestion].answers[0];
	document.getElementById("Q1-2").value = questions[currentQuestion].answers[1];
	document.getElementById("Q1-3").value = questions[currentQuestion].answers[2];
	document.getElementById("Q1-4").value = questions[currentQuestion].answers[3];
}

// const btn = document.getElementById("submitButton");

// console.log(radioButtons);

var points = 0;

function getRadioValue(radioButtons) {
	console.log("Get radio value function called!");
	console.log(radioButtons);
	if (seconds === 999) {
		startTimer();
	}

	let selectedAnswer;

	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selectedAnswer = radioButton.value;
			questions[currentQuestion].givenAnswer = radioButton.value;
			console.log(selectedAnswer);
		}
		radioButton.disabled = true;
	}

	if (selectedAnswer === questions[currentQuestion].correctAnswer) {
		document.getElementsByTagName("body")[0].style.background = "#00420e";
		points += 2;
	} else {
		document.getElementsByTagName("body")[0].style.background = "#4b0000";
		points--;
	}
	document.getElementById("points").innerHTML = points + " Points";

	if (document.getElementById("nextButton").style.visibility === "hidden") {
		document.getElementById("nextButton").style.visibility = "visible";
	}
}

/**
 * Steps taken when the next button is pressed
 */
function pressNext() {
	if (currentQuestion < 9) {
		currentQuestion++;
		loadQuestion();
		document.getElementById("Q1-1").disabled = false;
		document.getElementById("Q1-2").disabled = false;
		document.getElementById("Q1-3").disabled = false;
		document.getElementById("Q1-4").disabled = false;
		document.getElementsByTagName("body")[0].style.background = "#091921";
		document.getElementById("Q1-1").checked = false;
		document.getElementById("Q1-2").checked = false;
		document.getElementById("Q1-3").checked = false;
		document.getElementById("Q1-4").checked = false;
	} else {
		document.getElementById("quizForm").style.display = "none";
		endQuiz();
	}

	if (document.getElementById("nextButton").style.visibility === "visible") {
		document.getElementById("nextButton").style.visibility = "hidden";
	}
}

var seconds = 999;
var timeTaken;

function startTimer() {
	seconds = 60;

	// Set 60 seconds to the timer
	var countDownDate = new Date().getTime() + 60000;

	var x = setInterval(() => {
		// Get current timestamp
		var now = new Date().getTime();

		// Get the difference in the timetamps
		var distance = countDownDate - now;

		// get remaining seconds
		seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"
		document.getElementById("timer").innerHTML = seconds + "s Remaining";

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("timer").innerHTML = "Time Up!";
		}

		if (seconds === 0) {
			endQuiz();
		}
	}, 1000);
	if (seconds < 1) {
		endQuiz();
	}
}

function endQuiz() {
	document.getElementsByTagName("body")[0].style.background = "#091921";
	document.getElementById("quizForm").style.display = "none";
	document.getElementById("pointsContainer").style.display = "none";
	document.getElementById("timerContainer").style.display = "none";
	document.getElementsByClassName("container")[0].innerHTML =
		"<h1>Game Over!</h1>";

	timeTaken = 60 - seconds;

	var endGameHtml = `
		<h1>Game Over!</h1><br/>
		<h2>Time Taken: ${timeTaken}s</h2>
		<h2>Points: ${points}</h2><br/<br>
		`;

	for (let i = 0; i <= 9; i++) {
		endGameHtml += `
			<div>
				<div>
					<h2 id="questionNumber">Question ${i + 1}: ${questions[i].question}</h2>
				</div><br/>

				<span class="btnn"><input type="radio" class="btn" value=""
					${questions[i].givenAnswer === questions[i].answers[0] ? "checked" : "disabled"}
				">
					<label class="${summaryAnwerClass(i, 0)}" for="Q1-1" >${
			questions[i].answers[0]
		}</label></span><br/>

				<span class="btnn"><input type="radio" class="btn" value=""
					${questions[i].givenAnswer === questions[i].answers[1] ? "checked" : "disabled"}
				>
					<label class=" ${summaryAnwerClass(i, 1)}" for="Q1-2" >${
			questions[i].answers[1]
		}</label></span><br/>

				<span class="btnn"><input type="radio" class="btn" value=""
					${questions[i].givenAnswer === questions[i].answers[2] ? "checked" : "disabled"}
				>
					<label class="${summaryAnwerClass(i, 2)}" for="Q1-3" >${
			questions[i].answers[2]
		}</label></span><br/>

				<span class="btnn"><input type="radio" class="btn" value=""
					${questions[i].givenAnswer === questions[i].answers[3] ? "checked" : "disabled"}
				>
					<label class=" ${summaryAnwerClass(i, 3)}" for="Q1-4" id="Q1-4L">${
			questions[i].answers[3]
		}</label></span>
			</div><br/>
		`;
	}
	endGameHtml += `
	<div class="control">
		<button id="resetButton" onclick="resetQuiz()">Restart Quiz</button>
	</div>
	`;
	console.log(endGameHtml);

	document.getElementsByClassName("container")[0].innerHTML = endGameHtml;
}

function resetQuiz() {
	location.reload();
}

function summaryAnwerClass(qNum, aNum) {
	if (questions[qNum].correctAnswer === questions[qNum].answers[aNum]) {
		return "correctAnswer";
	} else {
		return "wrongAnswer";
	}
}


// nav bar js Pasindu
// navbar light mode

const lightMode = document.getElementById('light-mode');


lightMode.onclick = () => {
  if (lightMode.classList.contains('fa-sun')) {
    lightMode.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.add('active');
  } else {
    lightMode.classList.replace('fa-moon', 'fa-sun');
    document.body.classList.remove('active');
  }
}

// navbar menu toggle

const menuToggle = document.getElementById('menu-toggle');


menuToggle.onclick = () => {
  if (menuToggle.classList.contains('fa-bars')) {
    menuToggle.classList.replace('fa-bars', 'fa-xmark');
    document.querySelector('.navbar').classList.add('active');
  } else {
    menuToggle.classList.replace('fa-xmark', 'fa-bars');
    document.querySelector('.navbar').classList.remove('active');

  }
}


window.onscroll = () => {
  document.querySelector('.navbar').classList.remove('active');
  menuToggle.classList.replace('fa-xmark', 'fa-bars');
} 



// navbar search panel

document.getElementById('search-icon').onclick = () => {
  document.getElementById('search-form').classList.add('active');

}
document.getElementById('search-toggle').onclick = () => {
  document.getElementById('search-form').classList.remove('active');

}