const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

function off(){
    green.classList.remove('ativa');
    yellow.classList.remove('ativa');
    red.classList.remove('ativa');
}

function verdeon(){
    off();
    green.classList.add('ativa');

}
function amareloon(){
    off();
    yellow.classList.add('ativa');

}
function vermelhoon() {
    off();
    red.classList.add('ativa');

}
function ciclo(){
verdeon();
setTimeout(amareloon, 10000);
setTimeout(vermelhoon, 15000);
setTimeout(ciclo,20000);
}
ciclo();

