// control of game what I want my game to essentially do

const gameState = {
  players: ["x", "o"],
};

let currentPlayer = "x";

const board = document.querySelector(".board");
board.addEventListener("click", function (event) {
  console.log(event);

  if (currentPlayer === "x" && event.target.innerHTML === "") {
    event.target.innerHTML = currentPlayer;
    currentPlayer = "o";
  } else if (currentPlayer === "o" && event.target.innerHTML === "") {
    event.target.innerHTML = currentPlayer;
    currentPlayer = "x";
  }
});

// / functions that I will need to help my game do items expressed above
function myFunction() {
  let x = document.getElementById("p1Input").value;
  document.getElementById("demo").innerHTML =
    x + " : " + " You Are Mighty Token 'X'";
}
myFunction();

function myFunctionTwo() {
  let o = document.getElementById("p2Input").value;
  document.getElementById("demoTwo").innerHTML =
    o + " : " + " You Are Mighty Token 'O'";
}
myFunctionTwo();

function restartFunction() {
  let grid = [...document.querySelectorAll(".cell")];

  grid.forEach((item) => (item.innerHTML = ""));
}
