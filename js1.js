$(document).ready(function(){

    $("#enviar").click(function(event){
        event.preventDefault();
        var valor1 = Number($("#var1").val());
        var valor2 = Number($("#var2").val());
        var operacion = $("#op").val();

        if(operacion== "+"){
        var res = valor1 + valor2;
        alert("El resultado es: "+ res);
        }
        else if(operacion=="-"){
        var res = valor1 - valor2;
        alert("El resultado es: "+ res);
        }
        else if(operacion == "*"){
        var res = valor1 * valor2;
        alert("El resultado es: "+ res);
        } 
        else if(operacion == "/"){
            if(valor2 == 0){
                alert("No se puede dividir entre 0");
            } else{
               var res = valor1 / valor2;
               alert("El resultado es: "+ res); 
            }
        } else{
            alert("No se identifica el operador que ingreso");
        }
    })
})