// Trabalhando nossa lógica com matrizes 
let tabuleiro = [
    ["","",""], // Linha 1: células vazias
    ["","",""], // Linha 2: células vazias
    ["","",""], // Linha 3: células vazias
]

let vez = "O" // Começamos com o jogador "O", pq o Lucca quis :/
let jogoAtivo = true // O jogo está ativo (true significa que o jogo não terminou, que não terminou)

// Função para renderizar o tabuleiro 
function renderizarTabuleiro() {
    const tabuleiroDiv = document.getElementById("tabuleiro") // Pega o div do tabuleiro
    tabuleiroDiv.innerHTML = "" // Limpa o tabuleiro antes de renderizar novamente

    // Percorre as linhas e colunas da matriz e cria as células 
    for ( let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            const celula = document.createElement("div") // Cria uma nova div para a celula
            celula.classList.add("celula") // Adiciona a classe 'celula'
            celula.textContent = tabuleiro[i][j] // Adiciona o valor da cécula (X, O ou "")

            // Quando a célula é clicada, chama função fazerJogada()
            celula.onclick = () => fazerJogada(i, j)
            tabuleiroDiv.appendChild(celula) // Adiciona a célula ao tabuleiro
        }
    }
}

// Função para fazer uma jogada 
function fazerJogada(linha, coluna){
    // verifica se a célula está vazia e se o jogo ainda está ativo 
    if(tabuleiro[linha][coluna] === "" && jogoAtivo) {
       tabuleiro[linha][coluna] = vez // Marca a célula com o símbolo do jogador (X ou O)
       verificarVencedor() // Verifica se algum jogador venceu
       vez = vez === "X" ? "O" : "X" // Alterna entre X e O 
       renderizarTabuleiro() // Atualiza na interface 
    }
}

