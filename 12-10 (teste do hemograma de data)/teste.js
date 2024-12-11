const rl = require('readline-sync')

const datasDoador = [];

function mostrarData() {
    for (let i = 0; i < datasDoador.length; i++) {
        console.log(`${[i+1]} - ${datasDoador[i]}`)   
    }
}

function adicionarDoador() {
    const data = rl.question('Data: ').replaceAll('/', '-')
    datasDoador.push(data)
}

function exibirMenu() {
    let opcao 
    while (true) {
        opcao = rl.questionInt(`
        1 - Mostrar datas.
        2 - Adicionar datas.
        `)
        
        switch (opcao) {
            case 1:
                mostrarData()
                break;
            case 2:
                adicionarDoador()
                break;
        }
    }
}

exibirMenu()