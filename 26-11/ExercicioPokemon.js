const readline = require('readline-sync')

const computador = [
    {nome:'Blaziken',tipo:'Fire/Fighting',nivelEvoluçao:3},
    {nome:'Metagross',tipo:'Metal/Psychic',nivelEvoluçao:3},
    {nome:'Lucario',tipo:'Fighting',nivelEvoluçao:2},
    {nome:'Sylveon',tipo:'Fairy',nivelEvoluçao:2},
    {nome:'Meowscarada',tipo:'Grass/Dark',nivelEvoluçao:3},
    {nome:'Incineroar',tipo:'Fire/Dark',nivelEvoluçao:3},
    {nome:'Inteleon',tipo:'Water',nivelEvoluçao:3},
    {nome:'Cinderace',tipo:'Fire',nivelEvoluçao:3},
    {nome:'Wooloo',tipo:'Normal',nivelEvoluçao:1}
]

const mochila = []


function adicionarPokemon() {
    console.log("Escolha um Pokemon para adicionar à sua mochila: ")

    for (let i = 0; i < computador.length; i++) {
        console.log(`${[i+1]}.${computador[i].nome}`)
    }

    const escolha = readlineSync.questionInt("Digite o número do Pokemon: ");

    if (escolha <= 6) {
        const pokemonEscolhido = computador[escolha - 1];
        mochila.push(pokemonEscolhido);
        console.log(`${pokemonEscolhido.nome} foi adicionado à sua mochila.`);
    } else {
        console.log("Escolha Inválida.");
    }
}