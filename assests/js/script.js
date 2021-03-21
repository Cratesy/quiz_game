const startButtonElement = document.getElementById("start-button");
const startGameDiv = document.getElementById("start-container");
const bodyElement = document.body;

const questions = [
  {
    question: "What does Thor want "'another'" of when he's in the diner??",
    answers:[
      {text: "A cup of coffee", correct: true},
      {text: "A slice of pie", correct: false},
      {text: "A piece of toast", correct: false},
      {text: "A stack of pancakes", correct: false},
    ]
  },
];
const constructGameContainer = () => {
  const gameContainerDiv = document.createElement("div");
  gameContainerDiv.setAttribute("class", "game-container");

  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");

  const answerContainer = document.createElement("div");
  answerContainer.setAttribute("class", "answer-container");

  const button1 = document.createElement("button");
  button1.setAttribute("id", "button1");
  const button2 = document.createElement("button");
  button1.setAttribute("id", "button2");
  const button3 = document.createElement("button");
  button1.setAttribute("id", "button3");
  const button4 = document.createElement("button");
  button1.setAttribute("id", "button4");

  return gameContainerDiv;
};

const startQuiz = () => {
  // replace this with game container div

  // construct the game div in js
  const gameDivElement = constructGameContainer();

  console.log(gameDivElement);

  // remove start-game
  bodyElement.removeChild(startGameDiv);

  bodyElement.appendChild(gameDivElement);

  // insert the game-container
};

startButtonElement.addEventListener("click", startQuiz);
