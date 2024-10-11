const readline = require("readline-sync")
/*if ( time.toLowerCase === "gremio") {
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
 */

let time = readiline.question("Qual seu time? ")

switch (time.toLowerCase()) {
    case "gremio":
        console.log("O seu time é o Grêmio.")
        break

    case "inter":
         console.log("O seu time é o Inter")
    break

    default:
        console.log("O time não foi reconhecido.")

}
