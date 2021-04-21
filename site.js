
let questions = [
  {
    id: 1,
    question: "Which are two types of Coupling Circuits?",
    answer: "Electrical and Magnetic",
    options: [
      "Electrical and Magnetic",
      "Magnetic and Inductive",
      "LCR and Magnetic",
      "Electrical and LCR"
    ]
  },
  {
    id: 2,
    question: "Dot convention technique is used to know…",
    answer: "Voltage Polarity",
    options: [
      "Current Amplification",
      "Current Polarity",
      "Voltage Polarity",
      "Equivalent inductance"
    ]
  },
  {
    id: 3,
    question: "An electric circuit is said to be a coupled circuit",
    answer: "Mutual inductance between coils",
    options: [
      "when coils are series",
      "Conductivity in the coils",
      "Mutual inductance between coils",
      "Coils are connected to external source"
    ]
  },
  {
    id: 4,
    question: "Mutual inductance between two magnetically coupled coils depends on the",
    answer: "All of the above",
    options: [
      "Permeability of the core material",
      "Cross-sectional area of their common core",
      "Number of turns of the coils",
      "All of the above"
    ]
  },
  {
    id: 5,
    question: "Mutual Inductance occurs between:",
    answer: "Coils",
    options: [
      "Electric Devices",
      "Capacitors",
      "Resistors",
      "Coils"
    ]
  },
  {
    id: 6,
    question: "Dot convention occurs due to:",
    answer: "Mutual Inductance b/w Inductors",
    options: [
      "Polarity in the Inductors",
      "Self-Inductance b/w Coils",
      "Alternating Current in Circuit",
      "Mutual Inductance b/w Inductors"
    ]
  },
  {
    id: 7,
    question: "The maximum value of mutual inductance of 2 inductively coupled coils with self inductance La = 49 mH and Lb = 81 mH is ______________",
    answer: "63 mH",
    options: [
      "20 mH",
      "13 mH",
      "23 mH",
      "63 mH"
    ]
  },
  {
    id: 8,
    question: "Electrical coupling occurs, when there exists",
    answer: "Physical connection between two coils",
    options: [
      "Physical connection between two coils",
      "Parallel combination of inductors",
      "Dotted terminal",
      "Series combination of inductors"
    ]
  },



];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
