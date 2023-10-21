//Programa probado con Node JS 16.17.1
//Elaborado por Buzo Zamora Elian
//20 de Octubre de 2023
//Ensenada B.C



var query="SELECT edad correo,sueldo FROM usuarios WHERE nombre='juan, pedro'"; 
var palabrasReservadas=["SELECT","DELETE","CREATE","UPDATE","ALTER","INSERT",",","="]; 


//Variables que utilizare después
var querySpliteado=query.split(" "); //separar por espacios el Query
let caracterVacio=" ";
var letraActual="";


for(let i=0;i<query.length;i++){ //Bucle For que recorre cada letra del Query


    if(query[i]==caracterVacio){
        console.log("Vacio caracter detectado entonces en la posicion "+i);
    }

}

//delimitador de palabras 




