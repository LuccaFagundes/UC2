const readline = require("readline-sync")

/* Usando switch case, peça para o usuário inserir um número
 Caso o número for 1, imprima "Você escolheu Red Dead Redemption II"
 Caso o número for 2, imprima "Você escolheu The Elder Scrolls V: Skyrim"
 Caso o número for 3, imprima "Você escolheu Minceraft"

 */

 let numero = readline.questionInt("Escolha um número? ")

 switch (numero) {
    case 1:
        console.log("Seu Pokemon será o Vaporeon.")
        break

    case 2:
        console.log("Seu Pokemon será o Jolteon.")
        break

    case 3:
        console.log("Seu Pokemon será o Flareon.")
        break

     case 4:
         console.log("Seu Pokemon será o Espeon.")
       break

    case 5:
    console.log("Seu Pokemon será o Umbreon.")
    break

    case 6:
    console.log("Seu Pokemon será o Leafeon.")
    break

    case 7:
    console.log("Seu Pokemon será o Glaceon.")
    break

    case 8:
     console.log("Seu Pokemon será o Sylveon.")
    break

    default:
        console.log("O seu Pokemon será o Eevee")
        break


 }


 









