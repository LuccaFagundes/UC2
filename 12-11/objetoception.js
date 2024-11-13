

const donoDoPet = {
    nome: "Lucca",
    idade: 20,
    raca: "humana",
    pet: {
        nome:"Sempai",
        raca: "Siamês",
        idade: 2
    }
}

console.log(donoDoPet.pet.nome)

const curso = {
    nome: "Front",
    linguagens: ["Javascript", "CSS", "HTML"]
}

console.log(curso.linguagens[1])

const professoresTDS = [
    {nome: "Leonardo", uc:"2"},
    {nome: "Lucas", uc:"3"},
    {nome: "Maria", uc:"5"} 
]

const professor = {
    nome: "Leonardo",
    idade: 29,
    disciplinas: ["Algoritmos", "Banco de Dados", "Java"]
}

const novoProfessor = {
    ...professor, 
    nome: "Lucas",
    idade: 30,
    veiculo: "Carro"
}

console.log(professor,novoProfessor)


