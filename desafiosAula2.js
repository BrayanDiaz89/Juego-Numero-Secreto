//1)Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    return console.log('Hola mundo!!');
}
saludo();

//2) Crear una función que reciba un nombre como parámetro y muestre
//"¡Hola, [nombre]!" en la consola.

function saludoNombre(nombre){
    return console.log(`Hola, ${nombre}`);
}

saludoNombre('Artu');

//3) Crear una función que reciba un número como parámetro 
//y devuelva el doble de ese número

function numeroAl2(numero){
    return numero * 2;
}

let resultado = numeroAl2(5);
console.log(`Resultado: ${resultado}`);

//4)  Crear una función que reciba tres números como parámetros y
//devuelva su promedio.

function promedio3Numeros(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
}

let resultadoProm = promedio3Numeros(2.1,3.5,3.3);
console.log(`Resultado promedio: ${resultadoProm}`);

//5) Crear una función que reciba dos números como parámetros y
//devuelva el mayor de ellos.


// forma larga de hacerlo
function numeroMayor(num1,num2,num3){
    if (num1 > num2){
        return num1;
    } else if(num1 === num2){
        return 'Los números son iguales';
    }else{
        return num2;
    }
}

let numero = numeroMayor(29,12);
console.log(`El número mayor es el ${numero}`);

//forma corta (Operador ternario y concatenado) código resumido de 9 lineas a 4 lineas
function numeroMayor2(num3,num4){
    return num3 === num4 ? 'Los números son iguales.' : num3 > num4 ? num3 : num4; //Sin concatenar, "sin igualdad" return num3 > num4 ? num3 : num4;
}
console.log(`Sda opción número mayor es: ${numeroMayor2(39,25)}`);

//6) Crear una función que reciba un número como parámetro y devuelva
//el resultado de multiplicar ese número por sí mismo.

function cuadrado(x){
    return x * x
}
console.log(`El número cuadrado es: ${cuadrado(3)}`);

//Solución con función anómia (Arrow Function) bajamos a 2 lineas de código

const cuadradoFlecha = x => x * x;
console.log(`Cuadrado con función simple (flecha): ${cuadradoFlecha(5)}`);

//existe la función con math.pow(variable,numeroaelevar)



