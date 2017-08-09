
//Solicitando dinero
var dinero = prompt('Dinero a retirar:',' ');
//Creando matriz con los billetes/monedas disponibles
var cantidades = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 50, 100];


    document.write("<h1>Tome su dinero</h1><br>")
	document.write("<section>");

//Iniciando de mayor a menor, comparando con contado "i" si el dinero prestado es mayor a "i", de ser así repetir hasta que ya no sea mayor
//"i" al iniciar el "for" cambiará de valor según el valor actual de dinero
	for(var i=dinero;i>=cantidades[9];i-=cantidades[9]){
        document.write("<img src='../img/100.jpg'>");
        dinero -=cantidades[9]; //Restando cantidad al dinero prestado
    }
    for(var i=dinero;i>=cantidades[8];i-=cantidades[8]){
        document.write("<img src='../img/50.jpg'>");
        dinero -=cantidades[8];
    }
    for(var i=dinero;i>=cantidades[7];i-=cantidades[7]){
            document.write("<img src='../img/20.jpg'>");
            dinero -=cantidades[7];
        }
    for(var i=dinero;i>=cantidades[6];i-=cantidades[6]){
            document.write("<img src='../img/10.jpg'>");
            dinero -=cantidades[6];
        }
    for(var i=dinero;i>=cantidades[5];i-=cantidades[5]){
            document.write("<img src='../img/5.jpg'>");
            dinero -=cantidades[5];
        }
    for(var i=dinero;i>=cantidades[4];i-=cantidades[4]){
            document.write("<img src='../img/1.jpg'>");
            dinero -=cantidades[4];
        }
    for(var i=dinero;i>=cantidades[3];i-=cantidades[3]){
            document.write("<img src='../img/0.25.jpg'>");
            dinero -=cantidades[3];
        }
    for(var i=dinero;i>=cantidades[2];i-=cantidades[2]){
            document.write("<img src='../img/0.10.jpg'>");
            dinero -=cantidades[2];
        }
    for(var i=dinero;i>=cantidades[1];i-=cantidades[1]){
            document.write("<img src='../img/0.05.png'>");
            dinero -=cantidades[1];
        }
    for(var i=dinero;i>=cantidades[0];i-=cantidades[0]){
            document.write("<img src='../img/0.01.png'>");
            dinero -=cantidades[0];
        }

	document.write("</section>");
