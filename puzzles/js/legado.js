const sol = 'diamantes';

function check() {
    let input = document.getElementById('input').value;
    input = input.trim().toLowerCase();
    if (input === sol) {
        document.getElementById('incorrect').classList.add('transparent');
        window.alert('¡Superado!\nFragmento obtenido: "(69-81)alos catando."');
        document.body.innerHTML = `<h1><a href="tendencias.html">Habrá que seguir, ¿no?</a></h1>`;
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
