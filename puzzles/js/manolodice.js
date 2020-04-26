var clicks = [];
var code = ['blue', 'blue', 'yellow', 'red', 'green', 'yellow', 'blue'];
var audRed = new Audio('audio/red.mp3');
var audBlue = new Audio('audio/blue.mp3');
var audGreen = new Audio('audio/green.mp3');
var audYellow = new Audio('audio/yellow.mp3');
var audReset = new Audio('audio/reset.mp3');
var audCurrent = new Audio();

function redClick() {
    audCurrent.pause();
    audCurrent = audRed;
    audCurrent.play();
    clicks.push('red');
    checkCode();
}

function blueClick() {
    audCurrent.pause();
    audCurrent = audBlue;
    audCurrent.play();
    clicks.push('blue');
    checkCode();
}

function greenClick() {
    audCurrent.pause();
    audCurrent = audGreen;
    audCurrent.play();
    clicks.push('green');
    checkCode();
}

function yellowClick() {
    audCurrent.pause();
    audCurrent = audYellow;
    audCurrent.play();
    clicks.push('yellow');
    checkCode();
}

function reset() {
    audCurrent.pause();
    audCurrent = audReset;
    audCurrent.play();
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
    window.alert('Hay que pulsar los botones siguiendo una secuencia determinada de colores.\nEl botón RESET te permitirá empezar de cero la secuencia si quieres volver a intentarlo.');
}

function pista2() {
    window.alert('Manolo Mocasín siempre decía que hay un zapato para cada situación en la vida.\n¿Quizás haya un zapato para esta situación?');
}

function pista3() {
    window.alert('Quizás haya algún zapato en la página web cuya descripción incluya una cantidad inusual de colores\n¿Qué zapatos podrían ser?');
}