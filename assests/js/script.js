const startButtonElement = document.getElementById("start-button");
const startGameDiv = document.getElementById("start-container");
const timerSpanElement = document.getElementById("timer");
const bodyElement = document.body;

let timerValue = 60;

const questions = [
  {
    title: "What does Thor want 'another' of when he's in the diner??",
    choices: [
      "A cup of coffee",
      "A slice of pie",
      "A piece of toast",
      "A stack of pancakes",
    ],
    correctAnswer: "A cup of coffee",
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

const constructGameContainer = (question) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "question");
  divContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);

  divContainer.append(h2, choices);
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
  // remove start-game
  bodyElement.removeChild(startGameDiv);

  // construct the game div in js
  const gameDivElement = constructGameContainer();

  // remove start-game
  bodyElement.removeChild(startGameDiv);

  // start timer here
  startTimer();
};

startButtonElement.addEventListener("click", startQuiz);
