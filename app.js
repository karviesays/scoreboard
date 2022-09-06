const homeScoreBoard = document.querySelector("#home-score");
const guestScoreBoard = document.querySelector("#guest-score");
const hightLight = document.querySelector(".highlight");
const homeAdd1 = document.querySelector("#home-add1");
const homeAdd2 = document.querySelector("#home-add2");
const homeAdd3 = document.querySelector("#home-add3");

const guestAdd1 = document.querySelector("#guest-add1");
const guestAdd2 = document.querySelector("#guest-add2");
const guestAdd3 = document.querySelector("#guest-add3");
const newGame = document.querySelector("#new-game");
let homeScore = 0;
let guestScore = 0;

function homeAddOne() {
  homeScore++;
  homeScoreBoard.textContent = homeScore;
  isLeading(homeScore, guestScore);
}
function homeAddTwo() {
  homeScore += 2;
  homeScoreBoard.textContent = homeScore;
  isLeading(homeScore, guestScore);
}
function homeAddThree() {
  homeScore += 3;
  homeScoreBoard.textContent = homeScore;
  isLeading(homeScore, guestScore);
}

function guestAddOne() {
  guestScore++;
  guestScoreBoard.textContent = guestScore;
  isLeading(homeScore, guestScore);
}
function guestAddTwo() {
  guestScore += 2;
  guestScoreBoard.textContent = guestScore;
  isLeading(homeScore, guestScore);
}
function guestAddThree() {
  guestScore += 3;
  guestScoreBoard.textContent = guestScore;
  isLeading(homeScore, guestScore);
}
homeAdd1.addEventListener("click", homeAddOne);
homeAdd2.addEventListener("click", homeAddTwo);
homeAdd3.addEventListener("click", homeAddThree);
guestAdd1.addEventListener("click", guestAddOne);
guestAdd2.addEventListener("click", guestAddTwo);
guestAdd3.addEventListener("click", guestAddThree);

isLeading(homeScore, guestScore);

function isLeading(home, guest) {
  if (guest > home) {
    guestScoreBoard.style.color = "#0077b6";
    homeScoreBoard.style.color = "#f94f6d";
  } else if (guest < home) {
    homeScoreBoard.style.color = "#0077b6";
    guestScoreBoard.style.color = "#f94f6d";
  } else {
    guestScoreBoard.style.color = "#f94f6d";
    homeScoreBoard.style.color = "#f94f6d";
  }
}

function resetGame() {
  homeScore = 0;
  guestScore = 0;
  homeScoreBoard.textContent = 0;
  guestScoreBoard.textContent = 0;
  homeScoreBoard.style.color = "#f94f6d";
  guestScoreBoard.style.color = "#f94f6d";
}
newGame.addEventListener("click", resetGame);
