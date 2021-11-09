function verificar(){
    var guardarcorreo = localStorage.getItem("correo");
    var guardarcontra = localStorage.getItem("contra");

    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if(usuario == guardarcorreo && contraseña == guardarcontra && usuario != ""){
        alert("Welcome to facebook baby!!!");
    } else {
        alert("Invalid email and/or password")
    }
}
$(document).ready(function(){
    $("#botoncrear").click(function(){
        $(".acceso").hide();
        $(".registro").show();
    });
    $("#botonentrar").click(function(){
        $(".registro").hide();
        $(".acceso").show();
    });

    $("#botonentrar").click(function(){
        var correo = document.getElementById("correo").value;
        var contra = document.getElementById("contra").value;
        localStorage.setItem("correo",correo);
        localStorage.setItem("contra",contra);
    });
    $("#botoningresar").click(function(){
        document.getElementById("usuario").value="";
        document.getElementById("contraseña").value="";
    });
    
//Checkbox del género
    $("input[type=checkbox]").on("click", function(){
        var parent = $(this).parent().attr("id");
        $("#"+parent+" input[type=checkbox]").prop("checked",false);
        $(this).prop("checked", true);
    });

});

