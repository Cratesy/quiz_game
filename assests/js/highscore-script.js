const back = document.querySelector(".back-button");
const clear = document.querySelector(".clear-high-score");

// go back
const backToMainScreen = () => {
  location.href = "index.html";
};

// clear local highScores
const clearHighScore = () => {
  localStorage.clear();
};

// checking if there is highScores
const getHighScoreFromLocal = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return JSON.parse("highScores");
  } else {
    return [];
  }
};

// constructing highScoreTable
const renderHighScoreTable = (highScores) => {};

// loading highScores onload
const onLoad = () => {
  const highScores = getHighScoreFromLocal();
  renderHighScoreTable(highScores);
};

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);

window.addEventListener("load", onload);
