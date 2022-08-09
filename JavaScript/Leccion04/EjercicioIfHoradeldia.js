let hora = 18;

let horario;

if(hora >= 6 && hora <= 11){
    horario = "Buenos dias"
}
else if(hora >= 12 && hora <= 18){
    horario = "Buenas tardes"
}
else if(hora >= 19 && hora <= 24){
    horario = "Buenas noches"
}
else if(hora >= 0 && hora <= 5){
    horario = "A mimir"
}

console.log(horario);