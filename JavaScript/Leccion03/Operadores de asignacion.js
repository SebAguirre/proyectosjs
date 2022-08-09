let a = 3, b = 2, c = "3";

let z = a == b; //pregunta si a es igual a b (comparacion)
//con el operador == se revisa el valor sin importar el tipo

console.log(z);

z = a === c; //revisa los valores y tambien los tipos

console.log(z); 

z = a != c; // en teoria estamos usando "==", por lo que revisa el valor sin importar el tipo 

console.log(z);

 z = a !== c; // revisa los valores y tambien los tipos

 console.log(z);

 z = a >= b;
 
 console.log(z);

 z = a <= b;

 console.log(z);

 if (a % 2 == 0){
    console.log("Es un numero par")

 }

 else{
    console.log("No es un numero par")
 }