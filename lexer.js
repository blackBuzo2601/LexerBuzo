//Programa probado con Node JS 16.17.1


var query="SELECT edad correo,sueldo FROM usuarios WHERE nombre='juan, pedro'";
var palabrasReservadas=["SELECT","DELETE","CREATE","UPDATE","ALTER","INSERT",","];
var updatedQuery= query.split(" ");

console.log(updatedQuery);


