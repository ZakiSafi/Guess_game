'use strict';
// console.log(document.querySelector('.message').textContent = 'correct number');
// document.querySelector('.number').textContent = '23';
// document.querySelector('.guess').value = '10'
// document.querySelector('.score').textContent = '9'
// document.querySelector('.highscore').textContent = '8'

let random = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    console.log(random);
    
    // when there is no guess 
    if(!guess){
        document.querySelector('.message').textContent = 'NO number to guess';
    }
    // when the guess is less than the random value
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
    // when the guess is greater than the random number
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
    // when the guess is equal to the random number
    else{
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.number').textContent = random;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
})
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    random = Math.trunc(Math.random()*20) +1;

})
