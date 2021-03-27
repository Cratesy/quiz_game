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
};

const renderHighScoreTable = (highScores) => {
  if (highScores.length === 0) {
    console.log("empty");
  } else {
    console.log("create table");
  }
};

const onLoad = () => {
  const highScores = getHighScoreFromLocal();
  renderHighScoreTable(highScores);
};

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);

window.addEventListener("load", onload);
