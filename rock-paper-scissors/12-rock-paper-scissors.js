const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
document.querySelector('.js-rock')
.addEventListener('click', ()=> {PlayGame('rock')});

document.querySelector('.js-paper')
.addEventListener('click', ()=> {PlayGame('paper')});

document.querySelector('.js-scissors')
.addEventListener('click', ()=> {PlayGame('scissors')});

document.body
.addEventListener('keydown', (event)=>{
  if(event.key === 'r'){
    PlayGame('rock');
  }else if(event.key === 'p'){
    PlayGame('paper');
  }else if(event.key === 's'){
    PlayGame('scissors');
  }
});

let isAutoplay = false;
let intervalId;
function autoPlay(){
  const AutoButton = document.querySelector('.js-auto-button');
  if(!isAutoplay){
    intervalId = setInterval(function(){
      const playerMove = PickComputerMove();
      PlayGame(playerMove);
    }, 1000);
    isAutoplay = true;
  }else{
    clearInterval(intervalId);
    isAutoplay = false;
  }
}
updateScore();
function PlayGame(Player){
let ComputerMove = PickComputerMove();
let result = '';
if(Player === 'rock'){
    if(ComputerMove === 'rock'){
      result = 'Tie';
    } else if(ComputerMove === 'paper'){
      result = 'You lose';
    } else if(ComputerMove === 'scissors'){
      result = 'You win';
    }
}else if(Player === 'paper'){
    if(ComputerMove === 'rock'){
      result = 'You win';
    } else if(ComputerMove === 'paper'){
      result = 'Tie';
    } else if(ComputerMove === 'scissors'){
      result = 'You lose';
    }
} else if(Player === 'scissors'){
    if(ComputerMove === 'rock'){
      result = 'You lose';
    } else if(ComputerMove === 'paper'){
      result = 'You win';
    } else if(ComputerMove === 'scissors'){
      result = 'Tie';
    }
}
if(result === 'You win'){
  score.wins += 1;
} else if(result === 'You lose'){
  score.loses += 1;
} else if(result === 'Tie'){
  score.ties += 1;
}
localStorage.setItem('score', JSON.stringify(score));
updateScore();
document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = 
`You <img src="images/${Player}.png" class="img-img" alt=""> : 
<img src="images/${ComputerMove}.png" class="img-img" alt=""> Computer`;
}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `Win: ${score.wins}, Lose: ${score.loses}, Tie: ${score.ties}`;
}


function PickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'paper';
} else if(randomNumber >= 2/3 && randomNumber < 1){
  computerMove = 'scissors';
}
return computerMove;
}