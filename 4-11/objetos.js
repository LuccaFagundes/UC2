
let pessoa = {
    // Atributo/Propriedade
    // Nós não usamos LET nem CONST
    // Nós usamos ':' ao invés de '='
    nome: "Lucca",
    idade: 20,
    CPF: 99999999999,
    filmesFavoritos: ["Senhor dos Aneis", "Interestelar", "Star Wars"],
    trabalhar: function() {
        console.log(`${pessoa.nome} está trabalhando. Ele não vê a hora de chegar em casa e jogar.`)
    }
}

console.log(pessoa)

// para acessar um dos atributos, fazemos assim:
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos[0])

// para trocar o valor de um dos atributos, fazemos assim:
pessoa.idade = 30
console.log(pessoa.idade)

pessoa.altura = 1.70
console.log(pessoa.altura)

console.log(pessoa)

pessoa.trabalhar() // Aqui eu chamo/executo o método 


