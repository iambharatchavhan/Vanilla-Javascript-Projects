const compChoice = document.getElementById('comp-choice');
const yourChoice = document.getElementById('user-choice');
const result = document.getElementById('result');

let autoCompChoice;
let theResult;
let userChoice;
// const btnRock = document.getElementById("rock")
// const btnPaper = document.getElementById("paper")
// const btnScissors = document.getElementById("scissors")

const allBtns = document.querySelectorAll('.btns');

// console.log(allBtns);
//^ All three buttons grabed
//^ of all buttons we can specific botton using target 
allBtns.forEach(button => button.addEventListener('click',(e)=>{
       userChoice = e.target.id;
    //   console.log(userChoice);
      yourChoice.innerHTML = userChoice;
      autoComputerChoice()
      getResult ()
}) )

function autoComputerChoice (){
    const randomNumber = Math.floor(Math.random() * 3) +1 // or all buttons length
    // console.log(randomNumber);
  if(randomNumber === 1){
    autoCompChoice = "rock"
  }
  if(randomNumber === 2){
    autoCompChoice = "scissors"
  }
  if(randomNumber === 3){
    autoCompChoice = "paper"
  }
  compChoice.innerHTML = autoCompChoice;
}

function getResult (){
   
  if(autoCompChoice === userChoice){
    theResult = "Draw"
  }
  if(autoCompChoice === "rock" && userChoice === "paper"){
    theResult = "You win"
  }
  if(autoCompChoice === "rock" && userChoice === "scissors"){
    theResult = "You Loose"
  }
  if(autoCompChoice === "paper" && userChoice === "scissors"){
    theResult = "You Win"
  }
  if(autoCompChoice === "paper" && userChoice === "rock"){
    theResult = "You Loose"
  }
  if(autoCompChoice === "scissors" && userChoice === "rock"){
    theResult = "You win"
  }
  if(autoCompChoice === "scissors" && userChoice === "paper"){
    theResult = "You loose"
  }
  
  result.innerHTML = theResult;

}