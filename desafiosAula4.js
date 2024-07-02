//1) Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

//2) Crea una lista de lenguajes de programación llamada
//"lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

//3) Agrega a la lista "lenguagesDeProgramacion los
// siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

//variables para la función
let nombreArreglo ='';
let elemento = 0;
let numeroElementos=0;
//función que agrega elementos a un arreglo
function añadirValorAArreglos(nombreArreglo, elemento){
        arregloUsuario = parseInt(prompt('A cuál lista deseas añadir: 1=lenguajesDeProgramacion o 2=listaGenerica'));
        if (arregloUsuario === 1){
            nombreArreglo = lenguajesDeProgramacion;
            elemento = prompt('¿Qué valor deseas añadir?');
        } else if(arregloUsuario === 2){
            nombreArreglo = listaGenerica;
            elemento = parseInt(prompt('Qué número deseas añadir a la lista?'));
        }
        return nombreArreglo.push(elemento);
}
let añadir = parseInt(prompt('Desea añadir elementos a alguna lista? 1=si != no'));
if (añadir !== 1){
    alert('Continúa la ejecución del programa...');
}else{
    numeroElementos = parseInt(prompt('¿Cuántos elementos desea agregar a su lista?'));
    let i = 1;
    while(i <= numeroElementos){
        añadirValorAArreglos();
        i++;
    }
}
/*
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');*/

//4) Crea una función que muestre en la consola todos los 
//elementos de la lista "lenguagesDeProgramacion.

function verLenguajesProgramacion(){
    console.log('Lenguajes:', lenguajesDeProgramacion);
}

//5) Crea una función que muestre en la consola todos los elementos 
//de la lista "lenguagesDeProgramacion en orden inverso.

function verLenguajesInverso(){
    let arregloInverso = lenguajesDeProgramacion.slice().reverse();
    console.log('Lenguajes inversos:', arregloInverso);
}

//6) Crea una función que calcule el promedio de los elementos en una
//lista de números.

function calcularPromedio(arreglo){
    if (arreglo.length === 0) return 0;
    let suma = arreglo.reduce((acumulador,valorActual) => acumulador + valorActual,0);
    return suma / arreglo.length;
}


//7) Crea una función que muestre en la consola el número más grande y el
//número más pequeño en una lista.

function numeroMaxANDMin(arreglo){
    let maximo = Math.max(...arreglo);
    let minimo = Math.min(...arreglo);
    return {
        maximo,
        minimo
    };
}
// le asignamos a las variables el resultado de la funcion
let {maximo, minimo} = numeroMaxANDMin(listaGenerica);


//8) Crea una función que devuelva la suma de
//todos los elementos en una lista.

function sumaLista(arreglo){
    let suma = arreglo.reduce((acumulador,valorActual) => acumulador + valorActual,0);
    return suma;
    }

//9) Crea una función que devuelva la posición en la lista donde se
//encuentra un elemento pasado como parámetro, o -1 si no existe en 
//la lista.

function valorABuscar(arreglo, lenguajeBuscado){
    return arreglo.find(elemento => elemento === lenguajeBuscado);
}

let valorBuscado = parseInt(prompt('Deseas buscar algún lenguaje, en nuestra lista? 1=Si !=1 No'));
if (valorBuscado !== 1){
    console.log('El usuario no desea buscar lenguajes.');
} else{
    lenguajeUser = prompt('Qué lenguaje deseas buscar?');
    valorABuscar(lenguajesDeProgramacion,lenguajeUser);
}

//10) Crea una función que reciba dos listas de números del mismo tamaño
//y devuelva una nueva lista con la suma de los elementos uno a uno.

let listaNumeros = [5,3,8];

function sumaEntreListas(lista1,lista2){
    if (lista1.length !== lista2.length){
        return 'Listas no iguales de tamaño, imposible sumar.';
    }
    let resultadoSuma = [];

    for (let i=0 ; i < lista1.length ; i++){
        resultadoSuma.push(lista1[i] + lista2[i]);
    }
    return resultadoSuma;
}

//11) Crea una función que reciba una lista de números y devuelva una
//nueva lista con el cuadrado de cada número.

function nuevaListaCuadrado(){
    let cantNumeros = parseInt(prompt('Lista al cuadrado. Cuántos números deseas ingresar a la lista?'));
    let i = 0;
    let listaCuadrado = [];
    while (i < cantNumeros){
        let numero = parseInt(prompt(`Dato #${i+1}`));
        listaCuadrado.push(numero*numero);
        i++;
    }
    return listaCuadrado;
}

verLenguajesProgramacion();
verLenguajesInverso();
console.log(`Lista genérica:`, listaGenerica);
console.log(`El promedio de lista genérica es: ${calcularPromedio(listaGenerica)}`);
console.log(`El número máximo de la lista es: ${maximo} y el número mínimo es: ${minimo}`);
console.log(`La suma de los valores de la lista es: ${sumaLista(listaGenerica)}`);
console.log(`Lenguaje buscado: ${lenguajeUser}, encontrado: ${valorABuscar(lenguajesDeProgramacion,lenguajeUser)}`);
console.log(`La suma entre las lista genérica y lista números es: `,sumaEntreListas(listaNumeros,listaGenerica));
console.log(`Se creo la lista al cuadrado`, nuevaListaCuadrado());


