const readline = require("readline-sync")

 /*
 Crie um array ocm pelos menos 5 raças de cachorro. Peça para o usuário inserir um número de 1 a 5. Imprima no terminal a raça escolhida.

 */

const racasDeCachorro = ["Pastor alemão","Golden retriever","Husky","Doggo Alemão","Lobo"]

let numeroEscolhido = readline.question("Escolha um número de 1 a 5: ")
console.log(racasDeCachorro[numeroEscolhido-1])









