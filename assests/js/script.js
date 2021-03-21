const start = document.querySelector(".start-button");
const QuizArray = function startQuiz(event) {
  console.log(event.target);
};

start.addEventListener("click", startQuiz);
