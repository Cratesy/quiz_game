const back = document.querySelector(".back-button");
const clear = document.querySelector(".clear-high-score");
const username = document.getElementById("username");

const backToMainScreen = () => {
  location.href = "index.html";
};

const clearHighScore = () => {
  localStorage.clear();
};

const getHighScoreFromLocal = () => {
  const highScores = localStorage.getItem("highScores");
};

const onLoad = () => {
  getHighScoreFromLocal();
};

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);
