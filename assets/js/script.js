const startButtonElement = document.getElementById("start-button");
const startGameDiv = document.getElementById("start-container");
const timerSpanElement = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const bodyElement = document.body;
const gameOver = document.getElementById("game-over");

let timerValue = 60;
let index = 0;
let timerScore = "";
// question choices and correctAnswer array
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

// reusable choices container / answers
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

// seeing if your answer is right or wrong
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

// to make the main game container with question and choices in
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

// looping through the questions array until its completed
const renderQuestion = () => {
  if (index < questions.length) {
    const questionContainer = constructGameContainer(questions[index]);

    quizContainer.appendChild(questionContainer);
  } else {
    gameOverContainerRenderInput();
    currentScore = timerValue;
  }
};

// getting the input from user and score from time remaining
const captureUserInput = (event) => {
  event.preventDefault();

  const userInput = document.getElementById("input-text");
  const userInputValue = userInput.value;
  const scoreTime = timerValue + 1;
  const finalHighScore = {
    userInputValue,
    scoreTime,
  };
  const highScores = getHighScoresFromLocalStorage();
  highScores.push(finalHighScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "high-score.html";
};

// Get high scores from local storage
const getHighScoresFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
};

// gameOver container
const gameOverContainerRenderInput = () => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("id", "done");
  const h2 = document.createElement("h2");
  h2.textContent = "GameOver, Thank you for playing!";
  divContainer.append(h2);

  const timerScore = document.createElement("div");

  timerScore.setAttribute("timerValue", timerValue);

  timerScore.textContent = timerValue;

  const userForm = document.createElement("form");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "submit";

  const userInput = document.createElement("input");
  userInput.setAttribute("id", "input-text");
  userInput.setAttribute("type", "text");

  userForm.addEventListener("submit", captureUserInput);

  userForm.append(timerScore);
  userForm.append(userInput);
  userForm.append(submitButton);
  divContainer.append(userForm);
  gameOver.appendChild(divContainer);

  return divContainer;
};

// timer container
const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0 || index >= questions.length) {
      clearInterval(timer);

      //remove quiz container
      const quizCardContainer = document.getElementById("quiz-container");
      bodyElement.removeChild(quizCardContainer);
    }
  };
  const timer = setInterval(timerTick, 1000);
};

// start quiz
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
