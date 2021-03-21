const back = document.querySelector(".back-button");
const clear = document.querySelector(".clear-high-score");

function backToMainScreen(event) {
  history.go(-1);
  console.log(event.target);
}
function clearHighScore(event) {
  console.log(event.target);
}

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);
