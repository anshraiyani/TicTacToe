let turn="X";

document.addEventListener("DOMContentLoaded", () => {

  let boxes = document.querySelectorAll(".box");
  let turnBox = document.querySelector('.turn');
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.innerText === "") {
        box.innerText = turn;
        turn=changeTurn();
        turnBox.innerText=`Turn for ${turn}`
      }
    });
  });

    let resetBtn = document.querySelector('.reset')
    resetBtn.addEventListener("click",function resetBox(){
        boxes.forEach((box)=>{
            box.innerText=""
            turnBox.innerText="Turn for X"
            turn="X"
        })
    })
});

function changeTurn(){
    return turn==="X"?"O":"X";
}