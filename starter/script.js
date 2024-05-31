'use strict';
// console.log(document.querySelector('.message').textContent = 'correct number');
// document.querySelector('.number').textContent = '23';
// document.querySelector('.guess').value = '10'
// document.querySelector('.score').textContent = '9'
// document.querySelector('.highscore').textContent = '8'

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    const random = Math.trunc(Math.random()*20) +1;
    if(!guess){
        document.querySelector('.message').textContent = 'NO number to guess';
    }else if(guess < random){
        document.querySelector('.message').textContent = 'Too short';
    }else if(guess> random){
        document.querySelector('.message').textContent = 'to great';
    }else{
        document.querySelector('.message').textContent = 'Correct Number';
    }
})
