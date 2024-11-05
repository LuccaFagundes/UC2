
// crie um objeto que represente um personagem que você goste
// dê um nome a ele, dê uma idade, liste poderes ou características desse personagem
// também crie um método que será algo que esse personagem faz

//acesse cada um desses atributos E o método cada um em um console.log diferente.

let personagem = {
    nome: "Sonic o ouriço",
    idade: 30, //atualmente 
    poderes: ["Super/Hiper/Ultra velocidade","Controle de chaos","Controle de matéria"],
    derrotarRobotnik: function() {
        console.log(`${Sonic.nome} tem seu rival: Dr. Ivor Robotnik, o quem ele derrota com frequencia`)
    }
}

console.log(personagem.nome)
console.log(personagem.idade)
console.log(personagem.poderes)
personagem.derrotarRobotnik


