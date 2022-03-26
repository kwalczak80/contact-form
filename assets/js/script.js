document.addEventListener('DOMContentLoaded', function() {
});

let user = document.getElementById('playername');
let home = document.getElementById('home');
let form = document.getElementById('player-form');
let rules = document.getElementById('quiz-rules');

home.addEventListener('submit', function(event){
    this.style.display = 'none';    
    rules.classList.remove('hide-content');
    console.log('Username', user.value);
    console.log(rules);
    event.preventDefault();
});

