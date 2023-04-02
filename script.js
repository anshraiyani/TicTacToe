let turn = "X";
let gameover=false;

let message = document.querySelector('.message')


let boxes = document.querySelectorAll(".box");
let turnBox = document.querySelector(".turn");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turn;
      checkWin()
      turn = changeTurn();
      if(!gameover){
        turnBox.innerText = `Turn for ${turn}`;
      }
    }
  });
});

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", ()=>{
  resetBox()
});

function resetBox(){
  resetBtn.innerText="RESET"
  turnBox.style.display=""
  boxes.forEach((box) => {
    box.innerText = "";
  });
  turnBox.innerText = "Turn for X";
  turn = "X";
  message.innerText=""
}

function changeTurn() {
  return turn === "X" ? "O" : "X";
}

function checkWin(){
  let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],    
    [0,4,8],    
    [2,4,6]    
  ]

  win.forEach((w)=>{
    if( (boxes[w[0]].innerText === boxes[w[1]].innerText) && (boxes[w[2]].innerText === boxes[w[1]].innerText) && boxes[w[0]].innerText !== "" ){
      message.textContent=boxes[w[0]].innerText + " Won!!"
      resetBtn.innerText="Play Again"
      turnBox.style.display="none"
      gameover=true
    }
  })
}