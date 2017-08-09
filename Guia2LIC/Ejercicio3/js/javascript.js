
   //Solicitando filas y columnas
    var filas = prompt('Número de filas',' ');
    var columnas = prompt('Número de Columnas','');
    //Definiendo espacios de la matriz
    var matriz = new Array(filas);
for (i = 0; i < filas;i++){
matriz[i]=new Array(columnas);
}
    
    
//Mostrando que tipo de matriz es
    
    document.write("<table>");

    //creación de filas
    for (i=0; i<filas;i++){
    
        document.write("<tr>");
        //creación de columnas en la fila actual
        for(j=0;j<columnas;j++){
          
            document.write("<td>");

            matriz[i][j] = Math.floor(Math.random() * 100);//Numero aleatorio entre 1 y 100

            document.write("<br>" + matriz[i][j] );

            document.write("</td>");
        }
        document.write("</tr>");
    }
    
    document.write("</table>");
    


    document.write("<table>");

    for(i=0; i<filas; i++){
        
        document.write("<tr>");
        
        for(j=0; j<columnas; j++){
            document.write("<td>");

            document.write("<br>" + matriz[j][i]);

            document.write("</td>");

        }
        
        document.write("</tr>");
    }
    document.write("</table>");
