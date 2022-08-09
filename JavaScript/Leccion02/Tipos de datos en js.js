//Tipos de datos en JS

var nombre = "Jorge";

console.log(nombre);

nombre = 10
console.log(typeof nombre)

//typeof nos dice el tipo de dato que está almacenando en el momento esa variable
//Los tipos de variable en JS son dinámicos, por lo que una variable puede ser cambiada en cualq momento

var numero = 1000;
console.log(numero)

//Objeto

var Objeto = {
    nombre : "Jorge",
    apellido : "Perez",
    telefono : "1199228833"
}

console.log(Objeto)

//Tipo de dato booleano (true or false)
var bandera = false;

console.log(bandera)

//Definicion de funciones
function miFuncion(){}

console.log(miFuncion)

//Tipo de dato symbol

var simbolo = Symbol("Simbolo");

console.log(simbolo)

//Tipo clase es una funcion también
//Las clases son basicamente objetos, pero se emplea un constructor para usarlas

class persona{
    constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    }
}

console.log(persona);

//Tipo undefined

var x;
console.log(x)

//Tipo null
var y = null;
console.log(y);

//Arrays en js
//Un array en JS cuenta como un objeto, pero no deja de ser un array

var autos = ["BMW","Audi","Volkswagen"];

console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z)