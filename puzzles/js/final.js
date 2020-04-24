const irrelevantConst = 'burgos';

function check() {
    let input = document.getElementById('input').value;
    input = input.trim().toLowerCase();
    if (input === irrelevantConst) {
        document.getElementById('incorrect').classList.add('transparent');
        window.alert('¡Superado!');
        document.body.innerHTML = `<h1><a href="completado.html">¡Enhorabuena! ¡Has completado el juego!</a></h1>`;
    } else {
        document.getElementById('incorrect').classList.remove('transparent');
    }
}

window.onload = function() {
    document.getElementById('input').onkeyup = function(ev) {
        if (ev.key == 'Enter') {
            check();
        }
    };
}
