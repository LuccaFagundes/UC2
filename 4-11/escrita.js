const readline = require("readline-sync")

1

let nomeUsuario = readline.question("Digite o seu nome? ")

let emailUsuario = readline.question("Digite o seu Email? ")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)

2

const comidaFavorita = ["Pizza","Espaguete","Maionese","Brigadeiro","Sosig"]

console.log("Essas são as minhas comidas preferidas: ")

console.log(` ${comidaFavorita[0]}\n`,`${comidaFavorita[1]}\n`,`${comidaFavorita[2]}\n`,`${comidaFavorita[3]}\n`,`${comidaFavorita[4]}\n`)

let favoritaUsuario = readline.question("Qual a sua comida favorita?\n")

comidaFavorita.splice(1,1,`${favoritaUsuario}`)

console.log(comidaFavorita)

3

let listaDeTarefas = []

let tarefaUmFazer = readline.question("Diga sua primeira tarefa a fazer no dia: ")
let tarefaTwoDo = readline.question("Diga sua second tarefa a fazer no dia: ")
let tarefaDreiTun = readline.question("Diga sua dritte tarefa a fazer no dia: ")

listaDeTarefas.push(tarefaUmFazer,tarefaTwoDo,tarefaDreiTun)

console.log(listaDeTarefas)

const numeroTarefa = readline.questionInt("Qual tarefa voceê já realizou? ")

const indice = numeroTarefa - 1 
listaDeTarefas.splice(indice,1)

console.log(listaDeTarefas)










