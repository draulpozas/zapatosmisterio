const sol = 'blueredredyellowbluered';

function switchClass(n) {
    let btn = document.querySelectorAll("button")[n];
    let cls = btn.classList.toString();
    btn.classList.remove(cls);
    switch (cls) {
        case 'red':
            cls = 'blue';
            break;
        case 'blue':
            cls = 'yellow';
            break;
        case 'yellow':
            cls = 'green';
            break;
        case 'green':
            cls = 'red';
            break;
        default:
            break;
    }
    btn.classList.add(cls);
}

function check() {
    let colors = getColors();
    if (colors == sol) {
        window.alert('¡Superado!\nFragmento obtenido: "(32-57)re llorando tornava la cab"');
        document.body.innerHTML = `<h1><a href=".html">Ya estás cerca...</a></h1>`;
    }
}

function getColors() {
    let colors = '';

    document.querySelectorAll("button").forEach(btn => {
        colors += btn.classList.toString();
    });

    return colors;
}