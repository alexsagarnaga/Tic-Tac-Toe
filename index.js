// control of game what I want my game to essentially do

const gameState = {
players: ['x', 'o'],

}

let currentPlayer = 'x'

const board = document.querySelector('.board')
board.addEventListener('click', function (event) {
    console.log(event)
    // .target.id
    event.target.innerHTML= currentPlayer
    if (currentPlayer === 'x') {
        currentPlayer = 'o' 
    } else if (currentPlayer === 'o') {
        currentPlayer = 'x'  
        }
})



// / functions that I will need to help my game do items expressed above
function myFunction() {
    let x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }
    myFunction ()

function myFunctionTwo() {
    let x = document.getElementById("myTextTwo").value;
    document.getElementById("demoTwo").innerHTML = x; 
 }
        myFunctionTwo ()

function restartFunction () {
    location.reload();
}


