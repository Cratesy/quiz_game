const back = document.querySelector(".back-button");
const clear = document.querySelector(".clear-high-score");

const backToMainScreen = () => {
  location.href = "index.html";
};

const clearHighScore = () => {
  localStorage.clear();
};

const getHighScoreFromLocal = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
  console.log(highScores);
};

const onLoad = () => {
  const highScores = getHighScoreFromLocal();
};

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);

window.addEventListener("load", onload);
