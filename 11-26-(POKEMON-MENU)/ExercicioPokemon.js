const readline = require('readline-sync')

const computador = [
    {nome:'Blaziken',tipo:['Fire','Fighting'],nivelEvolucao:3},
    {nome:'Metagross',tipo:['Metal','Psychic'],nivelEvolucao:3},
    {nome:'Lucario',tipo:'Fighting',nivelEvolucao:2},
    {nome:'Sylveon',tipo:'Fairy',nivelEvolucao:2},
    {nome:'Meowscarada',tipo:['Grass','Dark'],nivelEvolucao:3},
    {nome:'Incineroar',tipo:['Fire','Dark'],nivelEvolucao:3},
    {nome:'Inteleon',tipo:'Water',nivelEvolucao:3},
    {nome:'Cinderace',tipo:'Fire',nivelEvolucao:3},
    {nome:'Wooloo',tipo:'Normal',nivelEvolucao:1},
    {nome:'Machamp',tipo:'Fighting',nivelEvolucao:3},
    {nome:'Rapidash',tipo:'Fire',nivelEvolucao:2},
    {nome:'Gengar',tipo:['Ghost','Poison'],nivelEvolucao:3}
]

const mochila = []

function mostrarMochila() {
    if(mochila.length = 0) {
        console.log("Sua mochila não contem nenhum Pokemon.")
    }
}

function adicionarPokemon() {
    for (let i = 0; i < computador.length; i++) {
        console.log(`\n${[i+1]}.${computador[i].nome}`)   
    } console.log("\nEscolha um Pokemon para adicionar à sua mochila: ")
    // Enquanto Indice = 0 ser menor que o tamanho total de quantidade adicionar 1+
   
    const escolha = readline.questionInt("Digite o número do Pokemon: ");

    if (mochila.length < 6) {
        const pokemonEscolhido = computador[escolha - 1];
        mochila.push(pokemonEscolhido);
        console.log(`${pokemonEscolhido.nome} foi adicionado à sua mochila.`);
    } 
    
    else if (mochila.length === 6){ 
        console.log("\nVocê não pode adicionar mais que 6 pokemon à sua mochila. É contra as regras da liga pokemon.")
    } 
    
    else {
        console.log("\nMissingNo.")
    }
}

function removePokemon () {
    for (let i = 0; i < mochila.length; i++) {
        console.log(`${[i+1]}.${mochila[i].nome}`)   
        }
        const pokemonEscolhido = readline.questionInt("Digite o número do Pokemon: ");

        if (mochila.length <= 6) {
            computador.splice(pokemonEscolhido - 1,1);
            console.log(`${pokemonEscolhido.nome} foi removido de sua mochila e adicionado ao computador.`);
        } else {
        console.log("Escolha Inválida.");
    } 

}


removePokemon()








