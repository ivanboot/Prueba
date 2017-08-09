//Capturando idioma del navegador
var  lang = navigator.language;

//Comparaciones entre el resultado obtenido, se mostrará en el idioma segun el dato capturado
 if (lang=="es"){
    document.write("<h1>Bienvenido</h1>");
}else if(lang=="en"){
    document.write("<h1>Welcome</h1>");
}else if(lang=="fr"){
    document.write("<h1>salutation</h1>");
}else if(lang=="de"){
    document.write("<h1>Grüße</h1>");
}else if(lang=="it"){
    document.write("<h1>saluti</h1>");
}