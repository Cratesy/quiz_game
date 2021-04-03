const back = document.querySelector(".back-button");
const clear = document.querySelector(".clear-high-score");
const tableBody = document.getElementById("tbody");

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
    return JSON.parse(highScores);
  } else {
    return [];
  }
};

// constructing highScoreTable
const renderHighScoreRow = (highScore) => {
  const tr = document.createElement("tr");
  const tdInput = document.createElement("td");
  const tdScore = document.createElement("td");
  tdInput.textContent = highScore.userInputValue;
  tdScore.textContent = highScore.scoreTime;
  tr.append(tdInput);
  tr.append(tdScore);
  tableBody.append(tr);
};

// loading highScores onload
const onLoad = () => {
  const highScores = getHighScoreFromLocal();
  highScores.forEach(renderHighScoreRow);
};

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);
window.addEventListener("load", onLoad);
