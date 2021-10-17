function ocultar(){
    var hide = document.getElementsByClassName("div_resultado");
    for(var i = 0; i < hide.length; i++)
    document.getElementsByClassName("div_resultado")[i].style.display = "none";
}

//Calculadora
var boton_calculadora = document.getElementById("calculadora");
boton_calculadora.addEventListener("click",function(){
    ocultar();
    document.getElementById("div_calculadora").style.display = "block";
});
//variables para operación
var savefirst;
var savesecond;
var operation;

function calculadora() {
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var sum = document.getElementById("suma");
    var rest = document.getElementById("resta");
    var multi = document.getElementById("multiplicacion");
    var divi = document.getElementById("division");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("resetear");
    var resultadocalculado = document.getElementById("resultadocalculado");

    uno.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "1";
    }
    dos.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "2";
    }
    tres.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "3";
    }
    cuatro.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "4";
    }
    cinco.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "5";
    }
    seis.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "6";
    }
    siete.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "7";
    }
    ocho.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "8";
    }
    nueve.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "9";
    }
    cero.onclick = function(e){
        resultadocalculado.innerText = resultadocalculado.innerText + "0";
    }
    reset.onclick = function(e){
        borrar();
    }
    sum.onclick = function(e){
        savefirst = resultadocalculado.innerText;
        operation = "+"
        wipe();
    }
    rest.onclick = function(e){
        savefirst = resultadocalculado.innerText;
        operation = "-";
        wipe();
    }
    multi.onclick = function(e){
        savefirst = resultadocalculado.innerText;
        operation = "x";
        wipe();
    }
    divi.onclick = function(e){
        savefirst = resultadocalculado.innerText;
        operation = "/";
        wipe();
    }
    igual.onclick = function(e){
        savesecond = resultadocalculado.innerText;
        total();
    }
}
//limpia la "pantalla"
function wipe(){
    resultadocalculado.innerText = " ";
}
//Botón C, borra lo que muestra la pantalla y vuelve a cero las variables que tengan que ver con las operaciones
function borrar(){
    resultadocalculado.innerText = " ";
    savefirst = 0;
    savesecond = 0;
    operation = " ";
}
function total(){
    var respuesta = 0;
    if(operation == "+") {
        respuesta = parseInt(savefirst) + parseInt(savesecond);
    }
    else if(operation == "-") {
        respuesta = parseInt(savefirst) - parseInt(savesecond);
    }
    else if(operation == "x") {
        respuesta = parseInt(savefirst) * parseInt(savesecond);
    }
    else if(operation == "/"){
        respuesta = parseInt(savefirst) / parseInt(savesecond);
    }
    borrar();
    resultadocalculado.innerText = respuesta;
}
//Contador
var boton_contador = document.getElementById("counter");
boton_contador.addEventListener("click",function(){
    ocultar();
    document.getElementById("div_contador").style.display = "block";
});
function contador(){
    var contar = document.getElementById("inputcontador").value;
    document.getElementById("resultadocontador").innerText = contar.length;
}
var botoncontar = document.getElementById("botoncontador");
botoncontar.addEventListener("click",function(){
    contador();
});

//Sumatoria
var boton_sumatoria = document.getElementById("sumatoria");
boton_sumatoria.addEventListener("click",function(){
    ocultar();
    document.getElementById("div_sumatoria").style.display = "block";
});

function sumatoria(){
    var num = document.getElementById("inputsumatoria").value;
    var res = 0;
    for(i = 1; i <= num; i++) {
        res = res + i;
    }
    document.getElementById("resultadosumatoria").innerText = res;
}
var boton = document.getElementById("botonsumatoria");
boton.addEventListener("click",function(){
    sumatoria();
});

//Upper & Lower
var boton_mayuscula = document.getElementById("upperlower");
boton_mayuscula.addEventListener("click",function(){
    ocultar();
    document.getElementById("div_mayuminu").style.display = "block";
});
function upper(){
    var mayu = document.getElementById("inputmayuminu").value;
    document.getElementById("resultadoconversion").innerText = mayu.toUpperCase();
}
function lower(){
    var minu = document.getElementById("inputmayuminu").value;
    document.getElementById("resultadoconversion").innerText = minu.toLowerCase();
}
var botonupper = document.getElementById("botonmayu");
botonupper.addEventListener("click",function(){
    upper();
});
var botonlower = document.getElementById("botonminu");
botonlower.addEventListener("click",function(){
    lower();
});