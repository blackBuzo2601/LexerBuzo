//Programa probado con Node JS 16.17.1
//Elaborado por Buzo Zamora Elian
//20 de Octubre de 2023
//Ensenada B.C

var query="SELECT edad correo,sueldo FROM usuarios WHERE nombre='juan, pedro'"; 

//Variables que utilizare después
const caracterVacio=" ";
var querySpliteado=query.split(" "); //separar por espacios el Query
const caracteresDiferentes=",=*" //Otros caracters que va a evaluar
const posicionUltimaLetra=query.length-1;
const ultimaLetra=query[posicionUltimaLetra];
var letraActual="";
var palabraActual="";



for(let i=0;i<querySpliteado.length;i++){ //Bucle For que recorre cada separacion del query
    palabraActual=querySpliteado[i]; //trabajar con cada palabra

    for(let j=0;j<palabraActual.length;j++){
        
        
        
    }
    
}//fin for general
