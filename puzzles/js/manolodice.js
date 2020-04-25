var clicks = [];
var code = ['blue', 'blue', 'yellow', 'red', 'green', 'yellow', 'blue'];

function redClick() {
    clicks.push('red');
    checkCode();
}

function blueClick() {
    clicks.push('blue');
    checkCode();
}

function greenClick() {
    clicks.push('green');
    checkCode();
}

function yellowClick() {
    clicks.push('yellow');
    checkCode();
}

function reset() {
    clicks = [];
}

function checkCode() {
    console.log(clicks);
    if (clicksAreCorrect()) {
        window.alert('¡Superado!\nFragmento obtenido: "(58-64)eça e e"');
        document.body.innerHTML = '<h1><a href="legado.html">Debe de haber alguna explicación...</a></h1>';
    }
}

function clicksAreCorrect() {
    let correct = true;
    if (clicks.length == code.length) {
        for (let i = 0; i < clicks.length; i++) {
            if (clicks[i] != code[i]) {
                correct = false;
            }
        }
    } else {
        correct = false;
    }
    

    return correct;
}

function pista1() {
    window.alert('Hay que pulsar los botones en un orden concreto para pasar.\nEl botón RESET te permitirá volver a empezar.');
}

function pista2() {
    window.alert('Manolo Mocasín siempre decía que hay un zapato para cada situación en la vida.\n¿Quizás haya un zapato para esta situación?');
}

function pista3() {
    window.alert('Quizás haya algún zapato en la página web cuya descripción incluya una cantidad inusual de colores\n¿Qué zapatos podrían ser?');
}