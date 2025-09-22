let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSecretos = [];
let numeromaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else       //No es correcto
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es menor');
    }
    else {
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarInput();
    return;
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '' ;
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * numeromaximo) + 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSecretos);

    //Si ya se han generado 10 números
    if (listaNumerosSecretos.length === numeromaximo) {
        //Reiniciar el juego
        asignarTextoElemento('p', 'Se han generado todos los números posibles. Reiniciando el juego.');
        listaNumerosSecretos = [];
        //Esperar 2 segundos antes de reiniciar
        return setTimeout(() => { condicionesIniciales(); }, 2000);
    }else {
        //Seguir generando números
        //Si el número generado ya está en la lista
        if (listaNumerosSecretos.includes(numeroSecreto)) {
            //Generar otro número
            return generarNumeroSecreto();
        }else {
            //Si no está en la lista, agregarlo
            listaNumerosSecretos.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Adivina un número entre 1 y ${numeromaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarInput();
    //Reiniciar variables
    condicionesIniciales();
    //Deshabilitar botón
    document.getElementById('reiniciar').setAttribute('disabled', true);
    return;
}

condicionesIniciales();