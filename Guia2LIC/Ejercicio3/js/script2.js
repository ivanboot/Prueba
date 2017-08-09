var fil = prompt("Ingrese la cantidad de filas");

var col = prompt("Ingrese la cantidad de columnas");

var matriz = new Array(fil);
for (i = 0; i < fil;i++){
matriz[i]=new Array(col);
}

document.write("<table id='mat'>");

for (i = 0; i<fil; i++){

	document.write("<tr>");

	for (j = 0; j<col; j++){

	document.write("<td>");

	matriz[i][j] = Math.floor(Math.random() * 100);

	document.write("<br>" + matriz[i][j] );

	document.write("</td>");

	}

	document.write("</tr>");
}

document.write("</table>");



document.write("<table id='trans'>");
    for (i = 0; i<fil; i++){

	document.write("<tr>");

	for (j = 0; j<col; j++){

	document.write("<td>");

	document.write("<br>" + matriz[j][i]);

	document.write("</td>");

	}

	document.write("</tr>");
}

document.write("</table>");

