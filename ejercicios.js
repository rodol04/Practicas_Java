/*2) Realice un algoritmo que permita que un usuario 
cargue dos números enteros diferentes por teclado, y 
de cómo salida, el mayor de ambos.
*/ 

let numero1 = prompt("Ingresa un numero")
let numero2 = prompt("Ingresa otro numero")

if(numero1 > numero2){
    alert("El primer numero que ingresaste que es: "+numero1+" es mayor que el segundo numero "+numero2)
}else{
    alert("El segundo numero que ingresaste que es: "+numero2+" es mayor que el primer numero "+numero1)
}