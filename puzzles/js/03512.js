var numbers = [];
var numbersNode;

window.onload = init;

function init() {
    numbers = [0,1,2,3,4,5,6,7,8,9];
    numbersNode = document.getElementById('numbers');
    displayNumbers();
    addDropEvents();
}

function displayNumbers() {
    do {
        let i = Math.floor(Math.random * numbers.length);
        let n = numbers.splice(i, 1);
        numbersNode.appendChild(createNumberNode(n));
    } while (numbers.length > 0);
}

function createNumberNode(n) {
    let node = document.createElement('div');

    node.classList.add('number');
    node.innerHTML = ''+n;
    node.id = 'n'+n;
    node.draggable = true;
    node.ondragstart = function(ev) {
        ev.dataTransfer.setData('n', ''+n);
    }

    return node;
}

function addDropEvents() {
    document.querySelectorAll('.container').forEach(container => {
        container.ondragover = function(ev) {
            ev.preventDefault();
        }
        container.ondrop = function(ev) {
            container.innerHTML = '';
            container.appendChild(createNumberNode(parseInt(ev.dataTransfer.getData('n'))));
            container.dataset.n = ev.dataTransfer.getData('n');
            readCode();
        }
    });
}

function readCode() {
    let code = '';
    document.querySelectorAll('.container').forEach(container => {
        code += container.dataset.n;
    });
    if (code == '03512') {
        window.alert('¡Superado!\nHas obtenido un nuevo fragmento: "(65-68)stav"\n¡Apunta estos fragmentos!');
        document.body.innerHTML = '<h1><a href="manolodice.html">Ir a la siguiente prueba.</a></h1>';
    }
}