const submitters = {
	a: document.getElementById("1"),
	b: document.getElementById("2"),
	c: document.getElementById("3")
}
const question = document.getElementById("q");

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

submitters.a.addEventListener("click", function () { submit('a') });
submitters.b.addEventListener("click", function () { submit('b') });
submitters.c.addEventListener("click", function () { submit('c') });

function submit(choice) {
	var chosen_correct = checkAnswer(choice);
	if(chosen_correct) {
		submitters[choice].classList.add("correct");
		setTimeout(function() {
			submitters[choice].classList.remove("correct");
		}, 1000);

	} else {
    	submitters[choice].classList.add("incorrect");
		setTimeout(function() {
			submitters[choice].classList.remove("incorrect");
		}, 1000);
	}
	
}
function checkAnswer(x) {
	if (!finished) {
		if (x === myQuestions[q_number].correctAnswer) {
			correct += 1;
			results.innerText = correct;
			reset();
			return true;
		} else {
			reset();
			incorrect += 1;
			incorrect_ans.innerText = incorrect;
			return false;
		}
	}
}

function reset() {
	q_number += 1;
	if (q_number !== myQuestions.length) {
		nextQ(q_number);
	} else {
		completeQuiz();
	}
}

function nextQ(next_question) {
	submitters.a.innerText = myQuestions[next_question].answers.a;
	submitters.b.innerText = myQuestions[next_question].answers.b;
	submitters.c.innerText = myQuestions[next_question].answers.c;
	question.innerText = myQuestions[next_question].question;
}

function completeQuiz() {
	submitters.a.remove();
	submitters.b.remove();
	submitters.c.remove();
	question.innerText = "Congratulations!";
	answerrow.classList.remove("row");
	const ad_div = document.createElement("div");
	ad_div.classList.add("col", "result");
	answerrow.appendChild(ad_div);
	const ad = document.createElement("a");
	ad.innerText = "Discord Server Link";
	ad.setAttribute("href", "https://discord.gg/qVYCfzus5C");
	ad_div.appendChild(ad);
	const reload = document.createElement("a");
	reload.innerText = "Restart?";
	reload.classList.add("reset");
	reload.setAttribute("href", "");
	answerrow.appendChild(reload);
	finished = true;
}

var myQuestions = [
	{
		question: "What is '2' + '2' in JavaScript?",
		answers: {
			a: "4",
			b: "'fish'",
			c: "'22'"
		},
		correctAnswer: "c"
	},
	{
		question: "Which programming language is real?",
		answers: {
			a: "Understand",
			b: "Hexcells",
			c: "Brainf--k"
		},
		correctAnswer: "c"
	},
	{
		question: 'What programming language is \nprint("Hello, world!")',
		answers: {
			a: "Python",
			b: "C",
			c: "JavaScript"
		},
		correctAnswer: "a"
	},
	{
		question: "What is the HTTP response code for Not Found?",
		answers: {
			a: "400",
			b: "404",
			c: "418"
		},
		correctAnswer: "b"
	},
	{
		question: "What is the file extention for a text file?",
		answers: {
			a: ".txt",
			b: "There is none!",
			c: ".text"
		},
		correctAnswer: "a"
	},
	{
		question: "Who is considered to be the founding father of computers?",
		answers: {
			a: "Bill Gates",
			b: "Linus Torvalds",
			c: "Alan Turing"
		},
		correctAnswer: "c"
	}
];
myQuestions = shuffleArray(myQuestions);
var finished = false;
var results = document.getElementById("results");
var incorrect_ans = document.getElementById("incorrect_ans");
var answerrow = document.getElementById("ans");
var correct = 0;
var incorrect = 0;
var q_number = -1;
var selected;
reset();
