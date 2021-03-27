const startButtonElement = document.getElementById("start-button");
const startGameDiv = document.getElementById("start-container");
const timerSpanElement = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const bodyElement = document.body;
const gameOver = document.getElementById("game-over");

let timerValue = 60;
let index = 0;

const questions = [
  {
    title: "The condition in an if/else statement is enclosed within??",
    choices: ["curly brackets", "parentheses", "square brackets", "quotes"],
    correctAnswer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store??",
    choices: [
      "other arrays",
      "numbers and strings",
      "booleans",
      "all of the above",
    ],
    correctAnswer: "all of the above",
  },
  {
    title: "What does DOM stand for ??",
    choices: [
      "do objects more",
      "document object model",
      "don't open me",
      "down operation movement",
    ],
    correctAnswer: "document object model",
  },
  {
    title: "What does CSS stand for ??",
    choices: [
      "cascading style sheet",
      "can't style stuff",
      "could style stuff",
      "colour style sheet",
    ],
    correctAnswer: "cascading style sheet",
  },
  {
    title: "Href is used to link what??",
    choices: ["websites", "images", "CSS", "all of the above"],
    correctAnswer: "all of the above",
  },
];

const createChoices = (choices) => {
  const parentDiv = document.createElement("div");

  const createChoicesAndAppend = (choice) => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.textContent = choice;

    div.appendChild(button);

    parentDiv.appendChild(div);
  };
  choices.forEach(createChoicesAndAppend);

  return parentDiv;
};

const verifyChoice = (event) => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      quizContainer.removeChild(document.getElementById("question"));
      renderQuestion();
    } else {
      alert("Wrong answer");
      timerValue -= 5;
    }
  }
};

const constructGameContainer = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);

  divContainer.addEventListener("click", verifyChoice);

  return divContainer;
};

const renderQuestion = () => {
  if (index < questions.length) {
    const questionContainer = constructGameContainer(questions[index]);

    quizContainer.appendChild(questionContainer);
  } else {
    gameOverContainerRenderInput();
  }
};

const gameOverContainerRenderInput = () => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "done");
  const h2 = document.createElement("h2");
  h2.textContent = "GameOver";
  const userName = divContainer.append(h2);
  return divContainer;
};

const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

const startQuiz = () => {
  // remove start-game button
  bodyElement.removeChild(startGameDiv);

  //create question container
  const question = constructGameContainer(questions[0]);

  // construct the game
  quizContainer.appendChild(question);

  // start timer here
  startTimer();
};

startButtonElement.addEventListener("click", startQuiz);
