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

submitA.addEventListener("click", submitAA);
submitB.addEventListener("click", submitBA);
submitC.addEventListener("click", submitCA);

function checkAnswer(x) {
  if (!finished) {
    if (x === myQuestions[cur].correctAnswer) {
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

function submitAA() {
  selected = checkAnswer("a");
  if (selected) {
    submitA.classList.add("correct");
  } else {
    submitA.classList.add("incorrect");
  }
}

function submitBA() {
  selected = checkAnswer("b");
  if (selected) {
    submitB.classList.add("correct");
  } else {
    submitB.classList.add("incorrect");
  }
}

function submitCA() {
  selected = checkAnswer("c");
  if (selected) {
    submitC.classList.add("correct");
  } else {
    submitC.classList.add("incorrect");
  }
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
  question.innerText = "Congratulations!";
  answerrow.classList.remove("row");
  const ad_div = document.createElement("div");
  ad_div.classList.add("col", "result");
  answerrow.appendChild(ad_div);
  const ad = document.createElement("a");
  ad.innerText = "Discord Server Link";
  ad.setAttribute("href", "https://discord.gg/qVYCfzus5C");
  ad_div.appendChild(ad);
  /* 
  If you're looking at this, congratulations! You can get the Minecraft server IP.
  Except we don't have it yet, so you can look here later.

  const ad_div2 = document.createElement("div");
  ad_div2.classList.add("col", "result");
  answerrow.appendChild(ad_div2);
  const ad2 = document.createElement("a");
  ad2.innerText = "Minecraft Server IP";
  ad2.setAttribute("href", "#");
  ad_div2.appendChild(ad2);
  */
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
    question: "This is a sample question.",
    answers: {
      a: "This is an incorrect sample answer.",
      b: "This answer should be clicked on.",
      c: "This is not the right answer."
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
var results = document.getElementById("results");
var incorrect_ans = document.getElementById("incorrect_ans");
var answerrow = document.getElementById("ans");
var correct = 0;
var incorrect = 0;
var cur = -1;
var selected;
reset();
