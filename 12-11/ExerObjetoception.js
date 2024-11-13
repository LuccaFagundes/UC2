
const pessoa = {
    nome: "Lucca",
    idade: 20,
    genmusfav: "Grunge, Jungle, Breakcore, PopRocks"
}

function novoObj(obj) {
    const novaPessoa = {
        ...obj,
        comidasPreferidas: ["Peixe frito", "Pizza", "Brownies"],
        melhorAmigo: {
            nome: "Jesse",
            idade: 20
        }
    }

    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]}, ${novaPessoa.comidasPreferidas[1]} e ${novaPessoa.comidasPreferidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
}



