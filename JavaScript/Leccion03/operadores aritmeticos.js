let a = 3, b = 2;

let z = a + b;

console.log("Resultado de la suma: " + z);

z = a - b;

console.log("Resultado de la resta: " + z);

z = a * b;

console.log("Resultado de la multi: " + z);

z = a / b;

console.log("Resultado de la divi: " + z);

z = a % b;

console.log("El resto de la division es: " + z);

z = a ** b;
console.log("Resultado del exponente: " + z);


//Incremento 
//Pre-incremento (operador ++ antes de la variable)

z = ++a; //se le asigna el valor de (a) a z

console.log(z);
console.log(a);

//el valor de a aumenta en 1 antes de realizar la cuenta

//Post-incremento (operador ++ despues de la variable)

z = b++; //aumenta su valor en 1 la proxima vez que sea utilizado
//el valor de b se le asigna a z pero solo por la primera vez que se le asigna
console.log(b);
console.log(z);