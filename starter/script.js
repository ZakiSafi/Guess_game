'use strict';
// console.log(document.querySelector('.message').textContent = 'correct number');
// document.querySelector('.number').textContent = '23';
// document.querySelector('.guess').value = '10'
// document.querySelector('.score').textContent = '9'
// document.querySelector('.highscore').textContent = '8'

const random = Math.trunc(Math.random()*20) +1;
document.querySelector('.number').textContent = random;
let score = 20;
document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    console.log(random);
    if(!guess){
        document.querySelector('.message').textContent = 'NO number to guess';
    }
    else if(guess < random){
        if(score  >1){
            document.querySelector('.message').textContent = 'Too short';
        score--;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lose the game!';
            document.querySelector('.score').textContent = score -1;

        }
        
    }
    else if(guess> random){
        if(score >1){
            document.querySelector('.message').textContent = 'to great';
            score--;
            document.querySelector('.score').textContent = score-1;
        }
        else{
            document.querySelector('.message').textContent = 'You lose the game!';
            document.querySelector('.score').textContent = score -1;
        }
    }
    else{
        document.querySelector('.message').textContent = 'Correct Number';
    }
})
