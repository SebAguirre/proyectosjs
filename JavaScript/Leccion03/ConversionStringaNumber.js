let miNumero = "18"; //si cambio este valor confirmo la accion que realizo luego

console.log(typeof miNumero);

let edad = Number(miNumero)//nos permite convertir un string a un numero

console.log(typeof edad);

console.log(edad);

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
if(edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("No puede votar")
}

}

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let resultado = (edad >= 18) ? "Puede votar" : "No puede votar"
    console.log(resultado)

}


