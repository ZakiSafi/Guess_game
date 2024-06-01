'use strict';

let random = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;
const displaymesage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    console.log(random);
    
    // when there is no guess 
    if(!guess){
        displaymesage('NO number to guess')

    }
    // when the guess is not equal to random number
    else if(guess != random){
        if(score >1){
            displaymesage(guess >random ? 'To great' :'Too short')

            score--;
            document.querySelector('.score').textContent = score;


        }
        else{
            displaymesage('You lose the game!');
            document.querySelector('.score').textContent = score -1;
        }
    }
    // when the guess is equal to the random number
    else{
        displaymesage('correct number')
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
    displaymesage('Start guessing')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    random = Math.trunc(Math.random()*20) +1;

})
