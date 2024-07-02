/*Has sido contratado(a) para desarrollar una calculadora que calcula el promedio y así 
verificar la situación de aprobación de un estudiante en función de sus cuatro notas. El promedio 
requerido para aprobar es de mínimo 5. Tu tarea es implementar dos funciones en JavaScript:

calcularPromedio(nota1, nota2, nota3, nota4) => Esta función recibe las cuatro notas del estudiante como 
parámetros y devuelve el promedio calculado con base en esas notas. verificarAprobacion(promedio) => Esta 
función recibe el promedio del estudiante como parámetro y devuelve "Aprobado" si el promedio es mayor o igual a 5,
 en caso contrario, devuelve "Reprobado".
*/

function calcularPromedio(nota1,nota2,nota3,nota4){
    return (nota1+nota2+nota3+nota4)/4;
}
let promedio = calcularPromedio(5,9,10,2);
console.log(`El promedio del estudiante fue: ${promedio}`);

function verificarAprobacion(promedio){
    return promedio >= 5 ? 'Aprobó' : 'Reprobó';
}
console.log(`El estudiante ha ${verificarAprobacion(promedio)}`);

//1)Crea una función que calcule el índice de masa corporal (IMC) de una 
//persona a partir de su altura en metros y peso en kilogramos,
//que se recibirán como parámetros.

function masaCorporal(peso,metros){
	return peso/(metros*metros);
}
let calculo = masaCorporal(68,1.65);
console.log(`El IMC es de: ${calculo}`);

//2)Crea una función que calcule el valor del factorial de un número 
//pasado como parámetro.

function valorFactorial(numero){

    if (numero < 0){
        return 'El factorial no está definido para números negativos.';
    } else if (numero === 0){   
        return 1; 
    } else{
        let resultado = 1;
        for(let contador = 1; contador <= numero; contador ++){
            resultado *= contador; // Equivalente a: resultado = resultado * contador
        }
        return resultado;
    }
}
console.log(`El número factorial es: ${valorFactorial(3)}`);


//3) Crea una función que convierta un valor en dólares, pasado como 
//parámetro, y devuelva el valor equivalente en reales(moneda brasileña, 
//si deseas ppuedes hacerlo con el valor del dólar en tu país). Para esto, 
//considera la cotización del dólar igual a R$4,80.

//solución inicial hecha por mi
let cantDolares = parseFloat(prompt('¿Cuántos dolares deseas convertir a pesos Colombianos?'));

console.log(typeof(cantDolares));
function dolarAPesosColombianos(cantDolares){
    let precioDolar = 4146.50;
    return cantDolares * precioDolar;
}
alert(`La cantidad ${cantDolares} dólares, en pesos colombianos es: ${dolarAPesosColombianos(cantDolares)}`);

//solución más técnica con ayuda de IA, pero hecha por mi
let cantDolar = parseFloat(prompt('¿Cuántos dolares deseas convertir a pesos Colombianos?'));

function dolarAPesos(cantDolar){
    const precio = 4146.50;
    if (isNaN(cantDolar) || cantDolar <= 0){
        return null; 
    }
    let resultado = cantDolar * precio;
    return resultado.toFixed(2);
}
let resultadoConversion = dolarAPesos(cantDolar);

if (resultadoConversion == null){
    alert('Por favor digite una cantidad válida de dólares.');
} else{
    alert(`La conversión de ${cantDolar} dólares, es $${resultadoConversion} pesos colombianos.`);
}

//4) Crea una función que muestre en pantalla el área y el perímetro de 
//una sala rectangular, utilizando la altura (corrijo LONGITUD) 
//y la anchura que se proporcionarán como parámetros. area m2 perimetro m

//Solución con dos funciones:
function hallarArea(anchura,longitud){
    const area = anchura * longitud;
    return area;
}
function hallarPerimetro(anchura,longitud){
    const perimetro = (2*(anchura+longitud));
    return perimetro;
}
console.log(`El área es de: ${hallarArea(5,10)}m^2. El perímetro es de: ${hallarPerimetro(5,10)}m`);

//Solución con una función, ayuda de IA:
function calcularAreaYPerimetro(anchur, longitudd) {
    if (anchur <= 0 || longitudd <= 0) {
        return 'Por favor, introduce valores positivos para la anchura y la longitud.';
    }
    const are = anchur * longitudd;
    const perimetr = 2 * (anchur + longitudd);
    return {
        are: are,
        perimetr: perimetr
    };
}
// Ejemplo de uso
const anchur = 5;
const longitudd = 10;

const resultados = calcularAreaYPerimetro(anchur, longitudd);

if (typeof resultados === 'object') {
    console.log(`El área es de: ${resultados.are} m^2. El perímetro es de: ${resultados.perimetr} m.`);
} else {
    console.log(resultados); // Si se produjo un error, se muestra el mensaje de error
}

//5) Crea una función que muestre en pantalla el área y el perímetro de una
//sala circular, utilizando su radio que se proporcionará como parámetro. 
//Considera Pi = 3,14.

function hallarAreaPerimetroCircular(radio){
    const pi = 3.14;
    const areaCirculo = pi * (radio*radio);
    const perimetroCirculo = (2 * pi * radio);
    return{
        areaCirculo: areaCirculo,
        perimetroCirculo: perimetroCirculo
    };
}
const radio = 6;

let resultado = hallarAreaPerimetroCircular(radio);
console.log(`El área del círculo es: ${resultado.areaCirculo}. El perímetro del círculo es: ${resultado.perimetroCirculo}`);

//6)Crea una función que muestre en pantalla la tabla de multiplicar de 
//un número dado como parámetro.

let numeroUser = parseInt(prompt('Digite el número al que deseas ver su tabla de multiplicar: '));

function tablaDeMultiplicar(numeroUser){
    if (isNaN(numeroUser) || numeroUser <= 0){
        return 'Digite un valor numérico válido.';
    }
         //primera solución:
    /*
    let i = 0;
    let resultado = 0;
    do{
        i++;
        resultado = numeroUser * i;
        console.log(`${numeroUser}x${i}=${resultado}.`);
    }while (i < 10);
        */

    //Segunda solución, ayuda con ia
    let resultado = '';
    let multiplicador = 0  

    while (multiplicador < 10){
        multiplicador++;
        let producto = numeroUser * multiplicador;
        resultado += `${numeroUser}x${multiplicador}=${producto}.\n`;
    }
    return resultado;
}

console.log(`Tabla de multiplicar del número ${numeroUser}`);
console.log(`${tablaDeMultiplicar(numeroUser)}`);


