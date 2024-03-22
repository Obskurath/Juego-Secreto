let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

let asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


let verificarIntento = () => {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

//Obtener por Id desde querySelector
/*function limpiarCaja () {
    let valorCaja = document.querySelector('#valorUsuario')  
    valorCaja.value = '';
} */


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';// Forma sencilla de cambiar el valor
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todo s los números 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Fin del juego');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}
//En este caso se ocupa named function en vez de arrow function, debido a que si la dejamos en arrow el generarNumeroSecreto(); de la línea 1, no es capaz de leerla, pero como named function si es capaz (Tambien se podría solamente mover el arrow function arriba del generarNumeroSecreto(); para que sea capaz de leerla)

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja 
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos 
    condicionesIniciales();
    // Deshabilitar el boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //Te pide el atributo y el valor de este atributo 
}

condicionesIniciales();