// Operadores de comparación
// igual (a == a)
// mayor que ( a> b)
// distinto (a != b)
// mayor o igual (a >= b)

var numero = prompt("ingrese su edad");
if(numero >= 18 && numero < 21) {
    alert("usted es mayor de edad pero menor a 21");
}else if(numero >= 21) {
    alert("eres mayor, ya te van a salir canas");
} else if(numero < 18) {
    alert('estas peque')
}

// ejercicio
// el usuario debe ingresar una operacion matematica
// luego va a ingresar dos numeros (primero uno y luego otro)
//ejecutar la operación matemática y mostrarla por pantalla

var operacion = prompt("ingrese una operación matemática usando los siguientes términos:suma, resta, multi, divi");
var numero1 = prompt("ingrese un número")
var numero2 = prompt("ingrese un número")
var resultado = 0;
if(operacion == 'suma') {
    resultado = parseInt(numero1) + parseInt(numero2);
    alert(resultado) }
else if (operacion == 'resta') {
    resultado = parseInt(numero1) - parseInt(numero2);
    alert(resultado)
}
else if (operacion == 'multi') {
    resultado = parseInt(numero1) * parseInt(numero2);
    alert(resultado)
}
else if (operacion == 'divi' && numero2 == 0) {
    alert('no es divisible por cero')
}
else if (operacion == 'divi') {
    resultado = parseInt(numero1) / parseInt(numero2);
    alert(resultado)
}