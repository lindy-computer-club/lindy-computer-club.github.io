function randInt(low, high) {
  return Math.floor(Math.random() * high + low);
}

const submitA = document.getElementById("1");
submitA.addEventListener("click", submitAA);
function submitAA() {
  if ("a" === myQuestions[cur].correctAnswer) {
    console.log("Nice!");
    results.innerText = "Correct";
  } else {
    console.log("Bald");
    results.innerText = "Incorrect";
  }
  reset();
}

const submitB = document.getElementById("2");
submitB.addEventListener("click", submitBA);
function submitBA() {
  if ("b" === myQuestions[cur].correctAnswer) {
    console.log("Nice!");
    results.innerText = "Correct";
  } else {
    console.log("Bald");
    results.innerText = "Incorrect";
  }
  reset();
}

const submitC = document.getElementById("3");
submitC.addEventListener("click", submitCA);
function submitCA() {
  if ("c" === myQuestions[cur].correctAnswer) {
    console.log("Nice!");
    results.innerText = "Correct";
  } else {
    console.log("Bald");
    results.innerText = "Incorrect";
  }
  reset();
}

function reset() {
  cur = randInt(1, 3) - 1;
  nextQ(cur);
}

function nextQ(j) {
  let popup = document.getElementById("1");
  popup.innerText = myQuestions[j].answers.a;
  popup = document.getElementById("2");
  popup.innerText = myQuestions[j].answers.b;
  popup = document.getElementById("3");
  popup.innerText = myQuestions[j].answers.c;
  popup = document.getElementById("q");
  popup.innerText = myQuestions[j].question;
}

const myQuestions = [
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
    question: "What is '2' + '2' in JavaScripts?",
    answers: {
      a: "'22'",
      b: "'fish'",
      c: "among us"
    },
    correctAnswer: "a"
  },
  {
    question: "What is '2' + '2' in JavaScriptsdasdsada?",
    answers: {
      a: "4",
      b: "'22'",
      c: "'cool man'"
    },
    correctAnswer: "b"
  }
];

var results = document.getElementById("results");
var cur;
reset();
