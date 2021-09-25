const submitA = document.getElementById("1");
const submitB = document.getElementById("2");
const submitC = document.getElementById("3");
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

function randInt(low, high) {
  return Math.floor(Math.random() * high) + low - 1;
}

submitA.addEventListener("click", submitAA);
submitB.addEventListener("click", submitBA);
submitC.addEventListener("click", submitCA);

function checkAnswer(x) {
  if (!finished) {
    if (x === myQuestions[cur].correctAnswer) {
      results.innerText = "Correct";
    } else {
      results.innerText = "Incorrect";
    }
    reset();
  }
}

function submitAA() {
  checkAnswer("a");
}

function submitBA() {
  checkAnswer("b");
}

function submitCA() {
  checkAnswer("c");
}

function reset() {
  cur += 1;
  if (cur !== myQuestions.length) {
    nextQ(cur);
  } else {
    completeQuiz();
  }
}

function nextQ(cur) {
  submitA.innerText = myQuestions[cur].answers.a;
  submitB.innerText = myQuestions[cur].answers.b;
  submitC.innerText = myQuestions[cur].answers.c;
  question.innerText = myQuestions[cur].question;
}

function completeQuiz() {
  submitA.remove();
  submitB.remove();
  submitC.remove();
  question.innerText = "Finished quiz";
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
    question: "I _____",
    answers: {
      a: "dead",
      b: "forgor 💀",
      c: "remember the 21st night of september"
    },
    correctAnswer: "b"
  },
  {
    question: 'What programming language is \nprint("Hello, world!")',
    answers: {
      a: "Python",
      b: "C",
      c: "JavaScript"
    },
    correctAnswer: "a"
  }
];
myQuestions = shuffleArray(myQuestions);
var finished = false;
var used = [];
var results = document.getElementById("results");
var cur = -1;
reset();
