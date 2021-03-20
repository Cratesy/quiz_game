const start = document.querySelector(".start-button");

function startQuiz(event) {
  console.log(event.target);
}

start.addEventListener("click", startQuiz);
