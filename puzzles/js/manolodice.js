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