const readline = require("readline-sync")

let  numero = readline.question(" Digite qualquer numero : ")
let multiplicador = 1

while ( multiplicador <= 10 ) {
    
    console.log( `${numero} * ${multiplicador}  = ${numero * multiplicador}` )

    multiplicador ++

}







