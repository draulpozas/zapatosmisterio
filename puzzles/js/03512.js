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
        ev.dataTransfer.setData('prevParentId', node.parentElement.id);
    }

    return node;
}

function addDropEvents() {
    numbersNode.ondragover = function(ev) {
        ev.preventDefault();
    }
    numbersNode.ondrop = function(ev) {
        ev.preventDefault();
        let n = ev.dataTransfer.getData('n');
        let prevParentId = ev.dataTransfer.getData('prevParentId');
        
        if (prevParentId != 'numbers') {
            numbersNode.appendChild(createNumberNode(n));
            removeNumber(document.getElementById(prevParentId), n);
        }
    }

    document.querySelectorAll('.container').forEach(container => {
        container.ondragover = function(ev) {
            ev.preventDefault();
        }
        container.ondrop = function(ev) {
            ev.preventDefault();
            let n = ev.dataTransfer.getData('n');
            let prevParentId = ev.dataTransfer.getData('prevParentId');
            container.dataset.n = n;
            container.innerHTML = '';
            
            if (container.id != prevParentId) {
                container.appendChild(createNumberNode(n));
                removeNumber(document.getElementById(prevParentId), n);
            }

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

function removeNumber(parentNode, n) {
    let numberNodes = parentNode.childNodes;
    numberNodes.forEach(node => {
        if (node.innerHTML && node.innerHTML.includes(n)) {
            node.remove();
        }
    });
}

function pista1() {
    window.alert('¡Mirad para arriba, que caen judías!');
}

function pista2() {
    window.alert('En la url.');
}