var usuario = new Object();

usuario.nombres= new Array();
usuario.apellidos= new Array();
usuario.correo= new Array();
usuario.direccion= new Array();
usuario.pregunta= new Array();
usuario.respuesta= new Array();
usuario.dui= new Array();
usuario.NIT= new Array();
usuario.celular= new Array();
usuario.fecha= new Array();
usuario.user= new Array();
usuario.contra = new Array();

//AGREGE NUEVOs CAMPOS PARA EL BALANCE
usuario.estado = new Array(); 
usuario.monto = new Array();
usuario.balance = new Array();
usuario.cuentas = new Array();
usuario.posicion_actual = 0;



var cont = 0;

function iniciar(){

//Evento click
    var respuesta_actual = "";
	document.frmlogin.btningresar.onclick = function(){
        
		usuario.login();

    };

	
    document.frmregistro.btnregistro.onclick=function(){
        

        //MODIFICACION START HERE!!!!
       //superhiperultra dimension neptunial arroz con frijoles if!!!
        if((usuario.validacion(frmregistro.txtnombre))==true){
            if((usuario.validacion(frmregistro.txtapellido))==true){
                if ((usuario.validacion(frmregistro.txtcorreo))==true){
                    if((usuario.validacion(frmregistro.txtusername))==true){
                        if ((usuario.validacion(frmregistro.txtcontra))==true){
                            if((usuario.validacion(frmregistro.txtdirec))==true){
                                if ((usuario.validacion(frmregistro.txtrespuesta))==true){
                                    if ((usuario.validacion(frmregistro.txtdui))==true){
                                        if ((usuario.validacion(frmregistro.txtnit))==true){
                                            if((usuario.validacion(frmregistro.txtcelular))==true){
                                                if ((usuario.validacion(frmregistro.txtdate))==true){
                                                    usuario.registrar();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
        //MODIFICACION END HERE!!!!!
        
    };
    
    document.getElementById("linkregistro").onclick=function(){
        
        document.getElementById("registro").style.display="block";
        document.getElementById("login").style.display="none";
    }

    document.getElementById("linkcontra").onclick=function(){
        document.getElementById("recuperacion").style.display="block";
        document.getElementById("login").style.display="none";

        document.getElementById("btnsiguiente").style.display="block";
        document.getElementById("btnresponder").style.display="none";
        document.getElementById("us").style.display="block";
        document.getElementById("pr").style.display="none";
        document.getElementById("res").style.display="none";
     }

     document.getElementById("btnsiguiente").onclick=function(){
        var usuario_actual1 = "";
        var pregunta_actual = "";
        var validar1 = 0;
        for(var i=0;i<=cont;){
            if(usuario.user[i] == document.getElementById('txtrecu_user').value){
                usuario_actual1 = usuario.user[i];
                pregunta_actual = usuario.pregunta[i];
                respuesta_actual = usuario.respuesta[i];
                validar1 = 1;
            }
            i++;
        }
            //validar
            if (validar1==1) { 
            document.getElementById("btnsiguiente").style.display="none";
            document.getElementById("btnresponder").style.display="block";
            document.getElementById("us").style.display="none";
            document.getElementById("pr").style.display="block";
            document.getElementById("res").style.display="block";
            document.getElementById("us").value="";
            document.getElementById("txtpregunta").innerHTML=pregunta_actual;
            }else{
            alert("El usuario ingresado no existe");
        }
     }
     document.getElementById("regresar").onclick=function(){
        document.getElementById("registro").style.display="none";
        document.getElementById("login").style.display="block"; 
     }

     document.getElementById("regresar1").onclick=function(){
        document.getElementById("recuperacion").style.display="none";
        document.getElementById("login").style.display="block";
     }

     document.getElementById("btnresponder").onclick=function(){
        
        if(respuesta_actual == document.getElementById("txtrespuesta2").value){
            document.getElementById("mostrar").style.display = "block";
            usuario.recuperacion();
        }
        
     }
      document.getElementById("acep").onclick=function(){
            document.getElementById("mostrar").style.display = "none";
            document.getElementById("recuperacion").style.display = "none";
            document.getElementById("login").style.display = "block"; 
     }
     document.getElementById("btnfinalizar").onclick=function(){
            document.getElementById("datos").style.display= "none";
            document.getElementById("folo").style.display= "block";
     }

     document.getElementById("linkcuenta").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("cuentas").style.display="block";

     }

     document.getElementById("linkingreso").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("ingresos").style.display="block";

     }
     document.getElementById("linkgasto").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("gastos").style.display="block";

     }
     document.getElementById("linkestadistica").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("estadistica").style.display="block";

     }
     document.getElementById("linkajuste").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="block";

     }

     document.getElementById("regresarcuenta").onclick=function(){
        document.getElementById("cuentas").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresaringreso").onclick=function(){
        document.getElementById("ingresos").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresargasto").onclick=function(){
        document.getElementById("gastos").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresarestadistica").onclick=function(){
        document.getElementById("estadistica").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("regresarconfig").onclick=function(){
        document.getElementById("configuracion").style.display="none";
        document.getElementById("menu").style.display="block";
    }

    document.getElementById("minicio").onclick=function(){
        document.getElementById("menu").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
    }

    document.getElementById("mcuenta").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("cuentas").style.display="block";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
    }

    document.getElementById("mingresos").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("ingresos").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
       
    }

    document.getElementById("mgastos").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("gastos").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("estadistica").style.display="none";
        document.getElementById("configuracion").style.display="none";
    }

    document.getElementById("mestadistica").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("estadistica").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("configuracion").style.display="none";
    }

    document.getElementById("majuste").onclick=function(){
        document.getElementById("menu").style.display="none";
        document.getElementById("configuracion").style.display="block";
        document.getElementById("cuentas").style.display="none";
        document.getElementById("ingresos").style.display="none";
        document.getElementById("gastos").style.display="none";
        document.getElementById("estadistica").style.display="none";
    }

    //BOTON CERRRAR SESSION
    document.getElementById("msalir").onclick=function(){
        document.getElementById("folo").style.display="none";
        document.getElementById("login").style.display="block";       
    }


    //navegacion de los submenus condiguracion
    document.getElementById("imgconfig").onclick=function(){
        document.getElementById("configuracion").style.display="none";
        document.getElementById("tipo_pago").style.display="block";
    }
    document.getElementById("imgbalance").onclick=function(){
        document.getElementById("configuracion").style.display="none";
        document.getElementById("balance").style.display="block";
    }

    document.getElementById("regresarsubconfig").onclick=function(){
        document.getElementById("tipo_pago").style.display="none";
        document.getElementById("balance").style.display="none";
        document.getElementById("configuracion").style.display="block";
    }
    // ***************************************//
 }


usuario.login = function(){
    
    if(document.getElementById('txtuser').value!="" & document.getElementById('txtpassword').value!=""){

    var usuario_actual = "";
    var validar = 0;   

    for(var i=0;i<=cont;){

        if(usuario.user[i] == document.getElementById('txtuser').value & usuario.contra[i] == document.getElementById('txtpassword').value){

        usuario_actual = usuario.user[i];

        //MODIFICACION PARA BALANCE EMPIEZA AQUI!
        usuario.posicion_actual= i; //guardo la posicion del usuario para usarla en el balance
        if (usuario.estado[i]==true){
            document.getElementById("datos").style.display="block";
            document.getElementById("login").style.display="none";
            usuario.estado[i]==false;

        }else{
            //aqui se muestra de una vez el menú principal
             document.getElementById("folo").style.display="block";
            document.getElementById("login").style.display="none";
        }
        

        validar = 1;
        i = cont;

        }
        i++;
        //MODIFICACION PARA PALANCE TERMINA AQUI!
    }

    if (validar == 1) {
        

    }else{
        alert("Usuario o contraseña incorrecta")
    }
        
    }else{
        alert("Debe completar todos los campos");
    }
}

usuario.recuperacion = function(){
    var validar2 = 0;
    var correo_actual, contra_actual;

    for(var i=0;i<=cont;){

        if(usuario.user[i] == document.getElementById('txtrecu_user').value){

            correo_actual = usuario.correo[i];

            contra_actual = usuario.contra[i];

            validar2 = 1;

        }

        i++;
    }


    if (validar2 == 1) {
        document.getElementById("mcontra").innerHTML = contra_actual;
    }
}



usuario.registrar = function(){
    var nombres = document.getElementById('txtnombre').value;
    var apellidos= document.getElementById('txtapellido').value;
    var correo= document.getElementById('txtcorreo').value;
    var direccion= document.getElementById('txtdirec').value;
    var pregunta= document.getElementById('slcpregunta').value;
    var respuesta= document.getElementById('txtrespuesta').value;
    var dui= document.getElementById('txtdui').value;
    var NIT= document.getElementById('txtnit').value;
    var celular= document.getElementById('txtcelular').value;
    var fecha= document.getElementById('txtdate').value;  
    var user= document.getElementById('txtusername').value;
    var contra = document.getElementById('txtcontra').value;
    
    var re = "//";
    

    if(nombres!="" && apellidos!="" && correo!="" && direccion!="" && pregunta!="" && respuesta!="" && dui!="" && NIT!="" && celular!="" && user!="" && contra!=""){
        
        

        usuario.nombres[cont]= nombres;
        usuario.apellidos[cont]= apellidos;
        usuario.correo[cont]= correo;
        usuario.direccion[cont]= direccion;
        usuario.pregunta[cont]= pregunta;
        usuario.respuesta[cont]= respuesta;
        usuario.dui[cont]= dui;
        usuario.NIT[cont]= NIT;
        usuario.celular[cont]= celular;
        usuario.fecha[cont]= fecha;
        usuario.estado[cont]=true; //Agrego esta asignacion para el balance
        usuario.user[cont] = document.getElementById('txtusername').value;
        usuario.contra[cont] = document.getElementById('txtcontra').value;
        
        cont += 1;

        alert("Usuario registrado exitosamente");

        document.getElementById("login").style.display="block";
        document.getElementById("registro").style.display="none";
        
    }else{

        alert("Debe completar todos los campos");

    }   

}

//FUNCIONONES PARA BALANCE
usuario.nuevacuentas=function(){
    
}
usuario.calculo_balance=function(){
    var montoinicio = document.getElementById("txtmontoI").value;
    var posicion_user = usuario.posicion_actual;

    for (var i = 0; i <= posicion_user; i++) {
        usuario.balance[i] = new Array;
    }

    for (var i = 0; i <= cont; i++) {

        if (usuario.balance[i]=posicion_user) {

        usuario.cuentas[i] = new Array;

        

        }

    }

    usuario.cuentas[i][j] = montoinicio;



}

usuario.validacion=function(campo){
    var validacion = null;
    var valido = false;
    switch(campo.id){
        case "txtnombre":
            validacion = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Nombre inválido, ingrese solo letras");
               
            }
            return valido;
        break;
        
        case "txtapellido":
            validacion = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(validacion.test(campo.value)){
            valido = true;
            
        }
            if(valido==true){
                
            }else{
                alert("Apellido Invalido, ingrese solo letras");
                }
                return valido;
        break;
        
         case "txtcorreo":
            validacion = /^(\S)+(@hotmail.com|@yahoo.com|@gmail.com)$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("correo Invalido, debe terminar en @hotmail.com, @yahoo.com o @gmail.com");}
            return valido;
        break;
        
         case "txtusername":
            validacion = /(\S)(\w)+/;

        if(validacion.test(campo.value)){
            
        }
          
        for(var i=0;i<=cont;){
            if (usuario.user[i]==campo.value){
                alert("Nombre de usuario no disponible");
                return valido;
            }else{
                valido=true;
            }
            i++;
        }
          if(valido==true){
                
            }else{
                alert("Usuario invalido, debe llenar el campo");}
            return valido;
        break;

        case "txtcontra":
        
            validacion = /[A-Z]+[a-z]+[\$\_\-\&]+(\d)+/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                if(campo.value.length <8){//VALIDACION DE CONTRASEÑA
                    alert("Contraseña debe contener minimo 8 caracteres!");
                    valido=false;
                    return valido;
                }
            }else{
                alert("contraseña Invalido, debe contener al menos: 1 mayuscula, 1 minuscula, 1 numero y 1 simbolo ($, &, -, _)");}
            return valido;
        break;

        case "txtdirec":
        
            validacion = /(\w)+(\,)(\w)+(\,)(\w)+(\,)(\w)+(\,)(\w)+/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                return valido;
            }else{
                alert("La direccion debe ir separada por 4 comas ','");}
            return valido;
        break;

        case "txtrespuesta":
            validacion = /(\S)(\w)+/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Debe colocar una respuesta");}
                return valido;
        break;
        
        case "txtdui":
            validacion = /(\d){8}-(\d){1}/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Dui Invalido, formato del Dui es: ########-#");}
                return valido;
        break;

        case "txtnit":
            validacion = /^(\d){4}-(\d){6}-(\d){3}-(\d){1}$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("NIT Invalido, formato del NIT es ####-######-###-#");}
                return valido;
        break;

        case "txtcelular":
            validacion = /^(\d){4}-(\d){4}$/;
        if(validacion.test(campo.value)){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Celular Invalido, formato del celular es: ####-####");}
                return valido;
        break;
        
         case "txtdate":
            var fecha = new Date(campo.value);
            var anionac = fecha.getFullYear();
            var hoy = new Date()
            var anio = hoy.getFullYear();

            
        if((anio - anionac)>18){
            valido = true;
        }
            if(valido==true){
                
            }else{
                alert("Este programa es solo para mayores de 18 años");}
                return valido;
        break;           
    }  
}


if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}


