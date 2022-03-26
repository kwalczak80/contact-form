document.addEventListener('DOMContentLoaded', function() {
});

let timer = 20;
let interval = 0;
let user = document.getElementById('playername');
let home = document.getElementById('home');
let form = document.getElementById('player-form');
let rules = document.getElementById('quiz-rules');
let quizStartButton = document.getElementById('quiz-start');
let quiz = document.getElementById('quiz');

home.addEventListener('submit', function(event){
    this.style.display = 'none';    
    rules.classList.remove('hide-content');
    document.getElementById('welcome-player').innerHTML="Hi "+user.value;
    let p = document.createElement('p');
    p.innerHTML ="In this quiz, you will be able to test your knowledge of the Arduino microcontroller. You will be asked to answer 10 questions related to the Arduino board, programming techniques, and general knowledge about the components that can be connected to the Arduino."
    document.getElementById('quiz-information').appendChild(p);
    console.log('Username', user.value);
    event.preventDefault();
});

quizStartButton.addEventListener('click', function() {
    rules.classList.add('hide-content');
    quiz.classList.remove('hide-content');
});

let countDownTimer = ()=> {
    if (timer === 0)
    {
        clearInterval(interval);
    }
    else
    {
        timer--;
        console.log(timer);
    }
}

setInterval(countDownTimer, 1000);




