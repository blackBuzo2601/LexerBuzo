//Programa probado con Node JS 16.17.1
//Elaborado por Buzo Zamora Elian
//20 de Octubre de 2023, Ensenada B.C

var query="SELECT edad correo,sueldo FROM usuarios WHERE nombre= 'juan,pedro'"; 
                            //NOTA: Si 'Juan y pedro' tienen un espacio entre ellos,
                            //la consola imprime los valores separados correctamente.
                            //ejemplo: 'Juan, pedro'. 
                            //Pero si están como 'Juan,pedro', los imprime raro pues
                            //y es lo que me falta corregir

//INICIALIZACION DE VARIABLES
var querySpliteado=query.split(" "); //separar por espacios el Query
var letra=""; 
var palabraActual="";
var formarPalabra="";
var subtexto=""; 
var bandera=0;
const caracterVacio=" ";

const caracteresDiferentes=",=" //Otros caracters que va a evaluar
const posicionUltimaLetra=query.length-1;
const ultimaLetra=query[posicionUltimaLetra]; //ultimo caracter del query

//QuerySpliteado: es un arreglo con todos los elementos de Query separados por el " "  bien.
for(let i=0;i<querySpliteado.length;i++){ //Bucle For General que itera por cada elemento del Query
    
    bandera=0; //reiniciar bandera
    palabraActual=querySpliteado[i]; //Trabajar con cada palabra desde posicion 0

    for(let k=0;k<palabraActual.length;k++){
        letra=palabraActual[k];
        if(caracteresDiferentes.includes(letra)){
            console.log(letra);
            subtexto=palabraActual.split(letra);
            for(let e=0;e<subtexto.length;e++){ 
                console.log(subtexto[e]); //imprimir los elementos de palabra separados por el caracter
            }
            bandera=1;
        }
    }//fin sub for

    if(bandera==0){ //si bandera vale 1, significa que ya se imprimió la palabra con el caracter especial
        console.log(palabraActual);
    }

}//fin for general  
