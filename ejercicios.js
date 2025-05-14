
/*
//EJERCICIO 1
let numero1 = prompt("Ingresa un numero")
let numero2 = prompt("Ingresa otro numero")

if(numero1 == numero2){
    alert("El primer numero que ingresaste que es: "+numero1+" es igual que el segundo numero: "+numero2)
}else{
    alert("El primer numero que ingresaste que es: "+numero1+" es diferente que el segundo numero: "+numero2)
}
*/


/*
//EJERCICIO 2
let numero1 = prompt("Ingresa un numero")
let numero2 = prompt("Ingresa otro numero")

if(numero1 > numero2){
    alert("El primer numero que ingresaste que es: "+numero1+" es mayor que el segundo numero "+numero2)
}else{
    alert("El segundo numero que ingresaste que es: "+numero2+" es mayor que el primer numero "+numero1)
}
*/



/*
//EJERCICIO 3
let num1 = prompt("Ingresa un numero")
let num2 = prompt("ingresa otro numero")

num1 = parseFloat(num1)
num2 = parseFloat(num2)


if (num1 < num2){
    alert("El orden es el siguiente: "+num1+" "+num2);
} else if(num1 > num2){
    alert("El orden es el siguiente: "+num2+" "+num1);
}else{
    alert("Son iguales: "+num1+" "+num2);
}
*/

/*
//EJERCICIO 4
let num1 = prompt("Ingresa un numero")
let num2 = prompt("ingresa otro numero")

num1 = parseFloat(num1)
num2 = parseFloat(num2)

function sumar(num1, num2){
    return num1 + num2
}
let resultado = sumar(num1, num2)

alert("El resultado de la suma de "+num1+" "+num2+" es igual a: "+resultado)
*/


/*
for (let billie=0; billie<=20; billie++) {
    alert("billie te amo: "+billie)
   }
*/

let nombre = prompt("¿Cual es tu nombre?")

while(nombre==null || nombre==""){
    nombre = prompt("¿Cual es tu nombre?");
    
}

let edad = prompt("¿Cual es tu edad?")

while(edad==null || edad==""){
    edad = prompt("¿Cual es tu edad?");
    
}

edad = parseFloat(edad);

function multiplicar(edad){
    return edad * 365
}

let resultado = multiplicar(edad)


//alert("Hola "+nombre+" segun tu edad haz vivido un total de: "+resultado+" dias")

document.getElementsByClassName("resultado").innerHTML=("Hola "+nombre+" segun tu edad haz vivido un total de: "+resultado+" dias")
