// ejercicio crear cuatro funciones (suma, resta, multi, divi)
//y que las mismas devuelvan con un Return el resultado de la operación
//llamar a cada una de las funciones con un alert 

function suma(a, b) {
    var res = parseInt(a) + parseInt(b);
    return res;
}
var num1 = prompt("ingrese un número");
var num2 = prompt("ingrese un número");
var respuesta = suma(num1, num2);
alert("La suma de ambos es:" + " " + respuesta);

function resta(c, d) {
    var res2 = parseInt(c) - parseInt(d);
    return res2;
}
var num3 = prompt("ingrese un número");
var num4 = prompt("ingrese un número");
var respuesta2 = resta(num3, num4);
alert("La resta de ambos es:" + " " + respuesta2);

function multi(e, f) {
    var res3 = parseInt(e) * parseInt(f);
    return res3;
}
var num5 = prompt("ingrese un número");
var num6 = prompt("ingrese un número");
var respuesta3 = multi(num5, num6);
alert("La multiplicación de ambos es:" + " " + respuesta3);

function divi(g, h) {
    var res4 = parseInt(g) / parseInt(h);
    return res4;
}

var num7 = prompt("ingrese un número");
var num8 = prompt("ingrese un número");
if (num8 == 0) {
    alert("No es posible la división por cero, escoja otro valor");
}
else if (num8 != 0) {
    var respuesta4 = divi(num7, num8);
    alert("La división de ambos es:" + " " + respuesta4);
}

//DOM ejemplo
var texto = document.getElementById("parrafo").innerText;
alert(texto);

var a = document.getElementsByClassName("parrafo2")[0].innerText;
console.log(a);

var butt = document.getElementById("button");
butt.addEventListener("click",function(){
    var input = document.getElementById("nombre").value;
    alert(input)
})