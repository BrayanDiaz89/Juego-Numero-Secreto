//código reducido, práctica anterior:
/*
  en la función asignarTextoElemento(parametros) redujimos esto:
    let titulo = document.querySelector('h1');
   titulo.innerHTML = 'Juego del número secreto'; 
   de dos lineas de código, bajamos a una sola que es:
   asignarTextoElemento('h1','Juego del número secreto.'); / con la función asignarTextoElemento()
*/

//variable global
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo=5;
let numeroMaximoIntentos=3;
//verificamos si lo está generando en la función

//creamos una función con parámetros, para que la función sea genérica o general
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//función, para que se ejecute al darle click en un botón
function verificarIntento(){
console.log(`Número intentos: ${intentos}`);

    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(intentos >= numeroMaximoIntentos && numUsuario != numeroSecreto){
        asignarTextoElemento('.texto__parrafo','Perdiste. Haz superado el número máximo de intentos.');
        habilitarReIntento();
    }else{

    if(numUsuario === numeroSecreto){
        asignarTextoElemento('.texto__parrafo',`Acertaste el número secreto en ${intentos} ${(intentos > 1) ? 'intentos' : 'intento'}`);
        habilitarReIntento();
    } else {
        //condición (no acertó)
        if(numUsuario > numeroSecreto){
        asignarTextoElemento('.texto__parrafo','El número secreto es menor');
        }
        else{
        asignarTextoElemento('.texto__parrafo','El número secreto es mayor');
        }
        intentos++;
        limpiarTextbox();
        }
    }
}

function habilitarIntento(){
    document.querySelector('#iniciar').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function habilitarReIntento(){
    document.querySelector('#iniciar').setAttribute('disabled','true');
    document.querySelector('#reiniciar').removeAttribute('disabled');
}

function limpiarTextbox(){
    /*let valorTextBox = document.querySelector('#valorUsuario');
    return valorTextBox.value = '';*/
    return document.querySelector('#valorUsuario').value = '';
}

//Función para retornar el número secreto random
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    
    console.log('Arreglo: ', listaNumerosSorteados);
    console.log('número secreto: ', numeroGenerado);

    // Ya se sortearon todos los números??
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('.texto__parrafo', 'Ya se sortearon todos los números posibles. Para volver a jugar (Reinicia/F5)');
        // Detener el juego aquí si se desea
        return -1; // Retornamos un valor especial para indicar que todos los números se sortearon
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){ 
    //utilizando la función los parametros "elemento" y "texto" separados con ,
    /*if (listaNumerosSorteados.length == numeroMaximo){ 
        asignarTextoElemento('.texto__parrafo','Ya se sortearon todos los números posibles.');
    } else{*/
    numeroSecreto = generarNumeroSecreto();
    if(numeroSecreto !== -1){
    asignarTextoElemento('h1','Juego del número secreto.');
    asignarTextoElemento('.texto__parrafo',`Indica un número, del 1 al ${numeroMaximo}`);
    habilitarIntento();
    intentos = 1;
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarTextbox();
    //Indicar mensaje de intervalo de números
    //generar un nuevo número randomico
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#iniciar').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

//numero maximo de juego antes de activarse, nuevo juego





