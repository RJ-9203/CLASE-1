//var ingreso = prompt("Ingrese una palabra");
//var caracteres = ingreso.length;
//(caracteres > 7) ? alert("tiene mas de 7 caracteres") : (caracteres < 7) ? alert("tiene menos de 7 caracteres") : alert("tiene 7 caracteres")

/*function machine(y) {
    var valor = parseInt(y);
    valor = price[valor-1];
    return valor
}
var opcion = prompt("Seleccione un producto \n 1. Chocolate \n 2. Hamburguesa \n 3. Gaseosa");
var prod = ["Chocolate","Hamburguesa","Gaseosa"];
var price = [1000,2000,5000];
if (valor > 4) {
    alert("No es una opción correcta, escoja 1,2 o 3");
} else machine(opcion);

var x = prompt("El total es"+" "+machine(opcion)+" "+"Con cuánto desea pagar?"); 
*/

$(document).ready(function(){
var t;
    function producto(v){
        var p = ["Chocolate","Hamburguesa","Gaseosa"];
        if (v<=3 && v>=1) {
            return p[v-1];
        } else {
            return "Opción no válida";
        }
    }

    function precios(e){
        var valor = [1000,2000,5000];
        if (e>=1 && e<=3){
            return valor[e-1];
        } else {
            return "Opción no valida";
        }
    }
    
    $("#boton").click(function(){
        t = $("#opcion").val();
        var prodseleccionado = producto(t);
        var precioseleccionado = precios(t);
        $("#mensaje").html("Usted seleccionó la opción: "+ prodseleccionado+ "Y el valor a pagar es"+precioseleccionado);
    });
    $("#pagar").click(function(){
        var plata = $("#dinero").val();
        var precio = precios(t);
        var cambio = 0;
        cambio = plata - precio;
        if (cambio>0) {
            $("#mensajefinal").html("Su cambio es: "+cambio);
        }else if (cambio<0) {
            $("#mensajefinal").html("Saldo indsuficiente, le hacen falta:  $"+cambio);
        }
    });
});
