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
var letra="";
var palabraActual="";
var formarPalabra="";
var subtexto="";


for(let i=0;i<querySpliteado.length;i++){ //Bucle For General que recorre cada separacion del query
    
    palabraActual=querySpliteado[i]; //Trabajar con cada palabra desde posicion 0

    for(let k=0;k<palabraActual.length;k++){
        letra=palabraActual[k];
        formarPalabra=formarPalabra+letra;
        if(caracteresDiferentes.includes(letra)){
            console.log(letra);
            subtexto=palabraActual.split(letra);
            for(let e=0;e<subtexto.length;e++){
                console.log(subtexto[e]);
            }
        }
    }



}//fin for general  

