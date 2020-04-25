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

function pista1() {
    window.alert('La respuesta está escondida en el texto.');
}

function pista2() {
    window.alert('A estas alturas, ya deberías saber que cada puzzle se corresponde con un zapato.\nEl zapato que se corresponde con este puzzle dice: "El último paso es el que debe darse con mayor cuidado".\n¿Qué puede significar?');
}

function pista3() {
    window.alert('Un tópico es esconder pistas en la primera letra de cada oración de un texto.\nPero eso sería muy poco original, ¿no?');
}