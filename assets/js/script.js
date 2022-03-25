document.addEventListener('DOMContentLoaded', function() {
});

let user = document.getElementById('playername');
let home = document.getElementById('home');
let form = document.getElementById('player-form');
form.addEventListener('submit', function(event){
    home.style.display = 'none';
    console.log('Username', user.value);
    event.preventDefault();
});