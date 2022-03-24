document.addEventListener('DOMContentLoaded', function() {
});

let = user = getElemenyById('playername');
let form = document.getElementById('player-form');
form.addEventListener('submit', function(event){
    this.style.display = 'none';
    clonsole.log('Username', user.value);
    event(pervent.Default);
})