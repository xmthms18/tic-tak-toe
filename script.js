/*----- constants -----*/

const playeOne ="X";
const playerTwo ="O";

const COLORS = {
    'null': 'black',
    '1': 'red',
    '-1': 'blue',
};

const winStrikes = [
 
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [7, 5, 3],
    [4, 5, 6],
    [7, 8, 9]
    

];

/*----- state variables -----*/
let board;  // array of 7 column arrays
let turn;  // 1 or -1
let winner;  // null = no winner; 1 or -1 = winner; 'T' = Tie

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const restart = document.querySelector('button');

/*----- event listeners -----*/

restart.addEventListener('click', init);

box.forEach((box) => box.addEventListener("click" ,boxClick));


/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  // To visualize the board's mapping to the DOM,
  board = [
    [null, null, null, 
    null, null, null, 
    null, null, null]
  ];
  turn = 1;
  winner = null;
  render();
}

function playerWin() {
    for(let i = 0; i < winStrikes.length; i++) {
    
    }
}
function boxClick(event) {

}
// visualize all state in the DOM
function render() {
  renderBoard();
  renderMessage();
  // Hide/ showing UI elements

}

function renderBoard() {
    board.forEach(function(cellVal,idx) {
        console.log(cellVal)
        const cellEl = document.getElementById(`${idx+1}`);
        cellEl.style.backgroundColor = COLORS[cellVal];
    });
  }

function renderMessage() {
if (winner === 'T') {
  messageEl.innerText = "Dang, Its a tie..."
  } else if ( winner) {
     messageEl.innerHTML = `Good Job!! <span style =" color: ${COLORS[winner]}"> ${COLORS[winner].toUpperCase()}</span>!`
  } else {
    messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s turn`
  }
 }
