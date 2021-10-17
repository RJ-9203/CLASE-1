//var num = prompt("digite un número");
//var res = 0;
//let i;
//for(i = num; i > 0; i--) {
//    res = res + " " + i;
//}
//alert(res);

//funciones para cadenas de caracteres (string)
//var texto = "hello world";
//alert(texto.length);

//ejericio 1

var nombre = prompt("Ingrese su nombre y apellido");
var caracteres = nombre.length;
if(caracteres <= 15) {
    alert("Tienes un nombre corto");
}
else if(caracteres > 15 && caracteres <= 25) {
    alert("Tienes un nombre medio");
}
else if(caracteres > 25) {
    alert("Tienes un nombre bastante largo");
}

//concatenar texto

var texto1 = "hello";
var texto2 = "cómo estas?";
var resultado = texto1 + " " + texto2;
alert(resultado);

// toUpperCase() pone en mayúscula, ejemplo texto1.toUpperCase()  toLocaleLowerCase() pone en minúscula

//ejericio2 

//var texto = prompt("ingrese una palabra");
//alert(texto.toUpperCase());
//alert(texto.toLocaleLowerCase());
// funciones

//function mostrartexto(){
//    var texto = "Esta es una función";
//    alert(texto);
//}

function palabra(){
    var texto = prompt("ingrese una palabra");
    alert(texto.toUpperCase());
    alert(texto.toLocaleLowerCase());
}
palabra();

//ejercicio 3
var parametro1 = prompt("Ingrese un número");
var parametro2 = prompt("Ingrese un número");
function suma(par1,par2){
    var res = parseInt(par1) + parseInt(par2);
    alert(res);
}
suma(parametro1,parametro2);