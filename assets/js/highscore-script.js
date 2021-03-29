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
    return JSON.parse("highScores");
  } else {
    return [];
  }
};

// constructing highScoreTable
const renderHighScoreTable = () => {
  const tr = tableBody.createElement("tr");
  // const td = document.createElement("td");
  // td.textContent = rank;
  const tdInput = tr.createElement("td");
  tdInput.textContent = userInputValue;
  const tdScore = tr.createElement("td");
  tdScore.textContent = scoreTime;
  // td.append(td);
  tr.append(tr);
  tdInput.append(tdInput);
  tdScore.append(tdScore);
  return tr;
};

// loading highScores onload
const onLoad = () => {
  const highScores = getHighScoreFromLocal();
  renderHighScoreTable(highScores);
};

back.addEventListener("click", backToMainScreen);
clear.addEventListener("click", clearHighScore);

window.addEventListener("load", onload);
