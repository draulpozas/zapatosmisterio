var clock1string = '';
var clock2string = '';
var clock3string = '';
var clock4string = '';
var targetClock;
var targetString;

window.onload = init;

function init() {
    document.getElementById('input').onkeyup = function(ev) {
        if (ev.key == 'Enter') {
            check();
        }
    };

    generateStrings();
    
    window.addEventListener('wheel', function(ev) {
        if (ev.deltaY > 0) {
            forwards();
        } else if (ev.deltaY < 0) {
            backwards();
        }
    });

    document.querySelectorAll('.reloj').forEach(function(reloj, i) {
        reloj.onmouseover = function() {
            targetClock = reloj;
            switch (i) {
                case 0:
                    targetString = clock1string;
                    break;
                case 1:
                    targetString = clock2string;
                    break;
                case 2:
                    targetString = clock3string;
                    break;
                case 3:
                    targetString = clock4string;
                    break;
                default:
                    break;
            }
        }
        reloj.onmouseout = function() {
            targetClock = null;
        }
        reloj.getElementsByClassName('mins')[0].style.transform = 'rotate(0deg)';
        reloj.getElementsByClassName('horas')[0].style.transform = 'rotate(0deg)';
    });
}

function forwards() {
    let mins = targetClock.getElementsByClassName('mins')[0];
    let horas = targetClock.getElementsByClassName('horas')[0];
    mins.style.transform = `rotate(${getRotateValue(mins) + 30}deg)`;
    horas.style.transform = `rotate(${getRotateValue(horas) + 2.5}deg)`;
    updateClockPos(2);
    updateScreen();
}

function backwards() {
    let mins = targetClock.getElementsByClassName('mins')[0];
    let horas = targetClock.getElementsByClassName('horas')[0];
    mins.style.transform = `rotate(${getRotateValue(mins) - 30}deg)`;
    horas.style.transform = `rotate(${getRotateValue(horas) - 2.5}deg)`;
    updateClockPos(-2);
    updateScreen();
}

function getRotateValue(node) {
    return parseFloat(node.style.transform.split('(')[1].split('d'));
}

function updateClockPos(n) {
    let pos = parseInt(targetClock.dataset.pos);
    pos += n;
    pos = pos >= 288 ? 0 : pos;
    pos = pos < 0 ? pos+288 : pos;
    targetClock.dataset.pos = pos;
}

function updateScreen() {
    let screen = targetClock.getElementsByClassName('screen')[0];
    screen.innerHTML = targetString.substr(targetClock.dataset.pos, 2);
}

function generateStrings() {
    let options = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
    for (let i = 0; i < 288; i++) {
        clock1string += options.charAt(Math.random()*options.length);
    }
    for (let i = 0; i < 288; i++) {
        clock2string += options.charAt(Math.random()*options.length);
    }
    for (let i = 0; i < 288; i++) {
        clock3string += options.charAt(Math.random()*options.length);
    }
    for (let i = 0; i < 288; i++) {
        clock4string += options.charAt(Math.random()*options.length);
    }
}

function irrelevantFunction() { // I'd name it "getCode" but anyone could type "getCode()" in the console and get the code, and that would be quite embarrassing!
    let code = '';

    code += clock1string.substr(228, 2);
    code += clock2string.substr(64, 2);
    code += clock3string.substr(80, 2);
    code += clock4string.substr(126, 2);

    return code;
}

function check() {
    let input = document.getElementById('input').value;
    if (input == irrelevantFunction()) {
        document.getElementById('incorrect').classList.add('transparent');
        window.alert('¡Superado!\nFragmento obtenido: "(1-31)De los sos ojos tan fuertemient"');
        document.body.innerHTML = '<h1><a href="final.html">Todo está preparado.</a></h1>';
    } else {
        document.getElementById('incorrect').classList.remove('transparent');
    }
}