const readline = require("readline-sync")

let numero = Number(readline.question("Digite um número? "))
let numero2 = Number(readline.question("Digite outro número? "))

console.log( numero + numero2 )

let time = readline.question("Que time é o teu? ")
console.log (time)
//console.log (time.toUpperCase()) // transforma a string em maiúscula
//console.log (time.toLowerCase()) //tranforma a string em minúscula

if ( time.toLowerCase === "gremio") {
    console.log("Azul e sufocado.")
} else if ( time.toLowerCase === "inter") {
    console.log("Vermelho de vergonha.")
} else if ( time.toLowerCase === "juventude") {
    console.log("Juventude só no nome.")
} else if ( time.toLowerCase === "corinthias") {
    console.log("Tua águia tá a semanas sem ser alimentada.")
} else {
    console.log("WHO?")
}







