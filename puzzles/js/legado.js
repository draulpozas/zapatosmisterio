const sol = 'diamantes';

function check() {
    let input = document.getElementById('input').value;
    input = input.trim().toLowerCase();
    if (input === sol) {
        window.alert('¡Superado!\nFragmento obtenido: "(69-81)alos catando."');
        document.body.innerHTML = `<h1><a href="tendencias.html">Habrá que seguir, ¿no?</a></h1>`;
    }
}