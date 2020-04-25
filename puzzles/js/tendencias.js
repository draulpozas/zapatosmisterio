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
        document.body.innerHTML = `<h1><a href="detalle.html">Ya estás cerca...</a></h1>`;
    }
}

function getColors() {
    let colors = '';

    document.querySelectorAll("button").forEach(btn => {
        colors += btn.classList.toString();
    });

    return colors;
}

function pista1() {
    window.alert('Los botones tienen que crear una secuencia de colores determinada. Busca dónde puedes encontrar una secuencia de colores.');
}

function pista2() {
    window.alert('Hasta ahora los zapatos eran las pistas, pero hay que tener en cuenta las tendencias.\n¡Quizás no valgan todos los zapatos!');
}

function pista3() {
    window.alert('Dos de los zapatos marcados como "novedad" sirven, pero uno hay que ignorarlo.\nSería buena idea ignorar aquél que no guste mucho al público.');
}