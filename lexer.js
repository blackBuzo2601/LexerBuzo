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


/*
for(let i=0;i<querySpliteado.length;i++){ //Bucle For General que recorre cada separacion del query
    palabraActual=querySpliteado[i];

    for(let j=0;j<palabraActual.length;j++){
        letra=palabraActual[j];
        
    


    


}//fin for general  */


var textoConComas= querySpliteado[2];
var prueba=querySpliteado[2].length;
var subtexto="";
for(let j=0;j<prueba;j++){ 
    letra=textoConComas[j];
    formarPalabra=formarPalabra+letra;
    if(caracteresDiferentes.includes(letra)){
        subtexto=textoConComas.split(letra);
        console.log(subtexto[0]);
        console.log(subtexto[1]);
    }
}
