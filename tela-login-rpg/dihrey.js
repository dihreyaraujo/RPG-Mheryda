window.onload = function () {
    if(todoBody.innerHTML.length < 11) {
        todoBody.innerHTML = JSON.parse(localStorage.getItem('salva-edita'));
    }
    forcaValor.innerText = JSON.parse(localStorage.getItem('atr-força'));
    bonusForca.innerText = JSON.parse(localStorage.getItem('bonus-for'));
    
    destrezaValor.innerText = JSON.parse(localStorage.getItem('atr-destreza'));
    bonusDes.innerText = JSON.parse(localStorage.getItem('bonus-des'));
    
    valorConst.innerText = JSON.parse(localStorage.getItem('atr-const'));
    bonusConst.innerText = JSON.parse(localStorage.getItem('bonus-const'));

    valorInt.innerText = JSON.parse(localStorage.getItem('atr-int'));
    bonusInt.innerText = JSON.parse(localStorage.getItem('bonus-int'));

    valorSab.innerText = JSON.parse(localStorage.getItem('atr-sabedoria'));
    bonusSab.innerText = JSON.parse(localStorage.getItem('bonus-sab'));

    valorCar.innerText = JSON.parse(localStorage.getItem('atr-carisma'));
    bonusCar.innerText = JSON.parse(localStorage.getItem('bonus-car'));

    forca.value = JSON.parse(localStorage.getItem('atr-força'));
    des.value = JSON.parse(localStorage.getItem('atr-destreza'));
    cons.value = JSON.parse(localStorage.getItem('atr-const'));
    int.value = JSON.parse(localStorage.getItem('atr-int'));
    sab.value = JSON.parse(localStorage.getItem('atr-sabedoria'));
    car.value = JSON.parse(localStorage.getItem('atr-carisma'));

    personEdit.value = JSON.parse(localStorage.getItem('personagem'));
    classEdit.value = JSON.parse(localStorage.getItem('classeNivel'));
    anteceEdit.value = JSON.parse(localStorage.getItem('antecedente'));
    jogadorEdit.value = JSON.parse(localStorage.getItem('jogador'));
    racaEdit.value = JSON.parse(localStorage.getItem('raça'));
    tendEdit.value = JSON.parse(localStorage.getItem('tendencia'));
    peEdit.value = JSON.parse(localStorage.getItem('pe'));
    
    insp.value = JSON.parse(localStorage.getItem('inspiracao'));
    ca.value = JSON.parse(localStorage.getItem('ca'));
    bp.value = JSON.parse(localStorage.getItem('proficiencia'));
    iniciativa.value = JSON.parse(localStorage.getItem('iniciativa'));
    pv.value = JSON.parse(localStorage.getItem('pv'));

    inspiracaoValor.innerText = JSON.parse(localStorage.getItem('inspiracao'));
    caValor.innerText = JSON.parse(localStorage.getItem('ca'));
    proficienciaValor.innerText = JSON.parse(localStorage.getItem('proficiencia'));
    iniciativaValor.innerText = JSON.parse(localStorage.getItem('iniciativa'));
    pvValor.innerText = JSON.parse(localStorage.getItem('pv'));   
}

const editarBtn = document.getElementById('editarbtn');
const editarInput = document.getElementById('editar');
editarInput.style.display = 'none';

editarBtn.addEventListener('click', function () {
    if(editarInput.style.display == 'none') {
        editarInput.style.display = 'block';
        editarBtn.style.color = 'yellow';
    }
    else if(editarInput.style.display == 'block') {
        editarInput.style.display = 'none';
        editarBtn.style.color = 'white';
    }
})


const persoName = document.getElementById('name');

// texto edit
const todoBody = document.getElementById('todobody')

const personEdit = document.getElementById('person-edit');
const classEdit = document.getElementById('class-edit');
const anteceEdit = document.getElementById('antece-edit');
const jogadorEdit = document.getElementById('jogador-edit');
const racaEdit = document.getElementById('raça-edit');
const tendEdit = document.getElementById('tend-edit');
const peEdit = document.getElementById('pe-edit');

const btnSalva = document.getElementById('salvar');

function criaPerson() {
    let person = document.createElement('h2');
    person.innerText = personEdit.value;
    person.style.position = 'absolute';
    person.style.top = '310px';
    person.style.left = '530px';
    person.classList.add('criado');
    todoBody.appendChild(person);
    localStorage.setItem('personagem', JSON.stringify(person.innerText));
}

function criaClass() {
    let classEdi = document.createElement('p');
    classEdi.innerText = classEdit.value;
    classEdi.style.fontSize = '1.2em'
    classEdi.style.position = 'absolute';
    classEdi.style.top = '275px';
    classEdi.style.left = '830px';
    classEdi.classList.add('criado');
    todoBody.appendChild(classEdi);
    localStorage.setItem('classeNivel', JSON.stringify(classEdi.innerText));
}

function criaAntecedente() {
    let antece = document.createElement('p');
    antece.innerText = anteceEdit.value;
    antece.style.fontSize = '1.2em'
    antece.style.position = 'absolute';
    antece.style.top = '275px';
    antece.style.left = '1010px';
    antece.classList.add('criado');
    todoBody.appendChild(antece);
    localStorage.setItem('antecedente', JSON.stringify(antece.innerText));
}

function criaJogador() {
    let jogador = document.createElement('p');
    jogador.innerText = jogadorEdit.value;
    jogador.style.fontSize = '1.2em'
    jogador.style.position = 'absolute';
    jogador.style.top = '275px';
    jogador.style.left = '1210px';
    jogador.classList.add('criado');
    todoBody.appendChild(jogador);
    localStorage.setItem('jogador', JSON.stringify(jogador.innerText));
}

function criaRaca() {
    let raca = document.createElement('p');
    raca.innerText = racaEdit.value;
    raca.style.fontSize = '1.2em'
    raca.style.position = 'absolute';
    raca.style.top = '355px';
    raca.style.left = '870px';
    raca.classList.add('criado');
    todoBody.appendChild(raca);
    localStorage.setItem('raça', JSON.stringify(raca.innerText));
}

function criaTend() {
    let tend = document.createElement('p');
    tend.innerText = tendEdit.value;
    tend.style.fontSize = '1.2em'
    tend.style.position = 'absolute';
    tend.style.top = '355px';
    tend.style.left = '1030px';
    tend.classList.add('criado');
    todoBody.appendChild(tend);
    localStorage.setItem('tendencia', JSON.stringify(tend.innerText));
}

function criaPe() {
    let pe = document.createElement('p');
    pe.innerText = peEdit.value;
    pe.style.fontSize = '1.2em'
    pe.style.position = 'absolute';
    pe.style.top = '355px';
    pe.style.left = '1230px';
    pe.classList.add('criado');
    todoBody.appendChild(pe);
    localStorage.setItem('pe', JSON.stringify(pe.innerText));
}

function removeParagrafos() {
    let todo = document.getElementById('todobody');
    todobody.innerHTML = '';
}

btnSalva.addEventListener('click', function() {
    removeParagrafos();
    criaPerson();
    criaClass();
    criaAntecedente();
    criaJogador();
    criaRaca();
    criaTend();
    criaPe();
    localStorage.setItem('salva-edita', JSON.stringify(todoBody.innerHTML));
    criaForca();
    criaDes();
    criaConst();
    criaInt();
    criaSab();
    criaCar();
    
    criaInsp();
    criaCa();
    criaProf();
    criaIniciativa();
    criaPv();

    salvaValue()
})

function salvaValue() {
    forca.value = JSON.parse(localStorage.getItem('atr-força'));
    des.value = JSON.parse(localStorage.getItem('atr-destreza'));
    cons.value = JSON.parse(localStorage.getItem('atr-const'));
    int.value = JSON.parse(localStorage.getItem('atr-int'));
    sab.value = JSON.parse(localStorage.getItem('atr-sabedoria'));
    car.value = JSON.parse(localStorage.getItem('atr-carisma'));
    personEdit.value = JSON.parse(localStorage.getItem('personagem'));
    classEdit.value = JSON.parse(localStorage.getItem('classeNivel'));
    anteceEdit.value = JSON.parse(localStorage.getItem('antecedente'));
    jogadorEdit.value = JSON.parse(localStorage.getItem('jogador'));
    racaEdit.value = JSON.parse(localStorage.getItem('raça'));
    tendEdit.value = JSON.parse(localStorage.getItem('tendencia'));
    peEdit.value = JSON.parse(localStorage.getItem('pe'));
    insp.value = JSON.parse(localStorage.getItem('inspiracao'));
    ca.value = JSON.parse(localStorage.getItem('ca'));
    bp.value = JSON.parse(localStorage.getItem('proficiencia'));
    iniciativa.value = JSON.parse(localStorage.getItem('iniciativa'));
    pv.value = JSON.parse(localStorage.getItem('pv'));
}

//numero edit

const forca = document.getElementById("for-edit");
const des = document.getElementById("des-edit");
const cons = document.getElementById("cons-edit");
const int = document.getElementById("int-edit");
const sab = document.getElementById("sab-edit");
const car = document.getElementById("car-edit");

function bonusMod(valor, bonus) {
    if(valor.innerText == '8' || valor.innerText == '9') {
        bonus.innerText = '-1'
    }
    else if(valor.innerText == '10' || valor.innerText == '11') {
        bonus.innerText = '0'
    }
    else if(valor.innerText == '12' || valor.innerText == '13') {
        bonus.innerText = '+1'
    }
    else if(valor.innerText == '14' || valor.innerText == '15') {
        bonus.innerText = '+2'
    }
    else if(valor.innerText == '16' || valor.innerText == '17') {
        bonus.innerText = '+3'
    }
    else if(valor.innerText == '18' || valor.innerText == '19') {
        bonus.innerText = '+4'
    }
    else if(valor.innerText == '20' || valor.innerText == '21') {
        bonus.innerText = '+5'
    }
}

function criaForca() {
    forcaValor.innerText = forca.value;
    bonusMod(forcaValor, bonusForca);
    localStorage.setItem('atr-força', JSON.stringify(forcaValor.innerText));
    localStorage.setItem('bonus-for', JSON.stringify(bonusForca.innerText));
}

function criaDes() {
    destrezaValor.innerText = des.value;
    bonusMod(destrezaValor, bonusDes);
    localStorage.setItem('atr-destreza', JSON.stringify(destrezaValor.innerText));
    localStorage.setItem('bonus-des', JSON.stringify(bonusDes.innerText));
}

function criaConst() {
    valorConst.innerText = cons.value;
    bonusMod(valorConst, bonusConst);
    localStorage.setItem('atr-const', JSON.stringify(valorConst.innerText));
    localStorage.setItem('bonus-const', JSON.stringify(bonusConst.innerText));
}

function criaInt() {
    valorInt.innerText = int.value;
    bonusMod(valorInt, bonusInt);
    localStorage.setItem('atr-int', JSON.stringify(valorInt.innerText));
    localStorage.setItem('bonus-int', JSON.stringify(bonusInt.innerText));
}

function criaSab() {
    valorSab.innerText = sab.value;
    bonusMod(valorSab, bonusSab);
    localStorage.setItem('atr-sabedoria', JSON.stringify(valorSab.innerText));
    localStorage.setItem('bonus-sab', JSON.stringify(bonusSab.innerText));
}

function criaCar() {
    valorCar.innerText = car.value;
    bonusMod(valorCar, bonusCar);
    localStorage.setItem('atr-carisma', JSON.stringify(valorCar.innerText));
    localStorage.setItem('bonus-car', JSON.stringify(bonusCar.innerText));
}

const forcaValor = document.getElementById('valor-força');
const bonusForca = document.querySelector('.bonus-for');

const destrezaValor = document.getElementById('valor-destreza');
const bonusDes = document.querySelector('.bonus-des');

const valorConst = document.getElementById('valor-constituicao');
const bonusConst = document.querySelector('.bonus-cons');

const valorInt = document.getElementById('valor-inteligencia');
const bonusInt = document.querySelector('.bonus-int');

const valorSab = document.getElementById('valor-sabedoria');
const bonusSab = document.querySelector('.bonus-sab');

const valorCar = document.getElementById('valor-carisma');
const bonusCar = document.querySelector('.bonus-car');

//battle fight

const insp = document.getElementById("insp-edit");
const bp = document.getElementById("bp-edit");
const ca = document.getElementById("ca-edit");
const iniciativa = document.getElementById("iniciativa-edit");
const pv = document.getElementById("pv-edit");

const inspiracaoValor = document.getElementById('insp-valor');
const caValor = document.getElementById('ca-valor');
const iniciativaValor = document.getElementById('iniciativa-valor')
const proficienciaValor = document.getElementById('prof-valor');
const pvValor = document.getElementById('pv-valor');

function criaInsp() {
    inspiracaoValor.innerText = insp.value;
    localStorage.setItem('inspiracao', JSON.stringify(inspiracaoValor.innerText));
}

function criaCa() {
    caValor.innerText = ca.value;
    localStorage.setItem('ca', JSON.stringify(caValor.innerText));
}

function criaProf() {
    proficienciaValor.innerText = bp.value;
    localStorage.setItem('proficiencia', JSON.stringify(proficienciaValor.innerText));
}

function criaIniciativa() {
    iniciativaValor.innerText = iniciativa.value;
    localStorage.setItem('iniciativa', JSON.stringify(iniciativaValor.innerText));
}

function criaPv() {
    pvValor.innerText = pv.value;
    localStorage.setItem('pv', JSON.stringify(pvValor.innerText));
}




