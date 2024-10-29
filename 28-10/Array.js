// Arrays são listas de elementos

const listaDeCompras = []; // Este é um array vazio

const listaDeNomes = ["Leo", "Vitoria", "Nala", "Margot", "Simba"] // Array com strings

const listaDeNumeros = [10, 15, 35, 99, 2] // Array com números

const listaDeBooleanas = [true,false,true] // Array de Booleanas

// Imprime tudo o que tem dentro do array
console.log(listaDeNomes)
console.log(listaDeCompras)

// Adiciona um item ao final do array
listaDeCompras.push("Pão")
listaDeCompras.push("Nata")
listaDeCompras.push("Iogurte")
console.log(listaDeCompras)

// Remove o último item do array
listaDeCompras.pop()
console.log(listaDeCompras)

// Exibe o item de acordo com sua posição no array
console.log(listaDeNomes[0]) //Leo
console.log(listaDeNumeros[3]) //99
console.log(listaDeBooleanas[3]) //Undefined

// Troca o valor de um elemento no array no acordo com sua posição/índice

console.log("Array antes da troca: ", listaDeNumeros)
listaDeNumeros[3] = 100
console.log("Aray depois da troca: ", listaDeNumeros)

// Propriedade length
// Mostra o tamanho do array
console.log(listaDeNomes.length)
console.log(listaDeBooleanas.length)



// Método includes
// Verifica se um array tem ou não um determinado elemento (retorna true ou false)
const seriesBoas = ["Game of Thrones", "Breaking Bad", "Shogun"]
console.log(seriesBoas.includes("Game of Thrones")) // true
console.log(seriesBoas.includes("la Casa de Papel")) // false

// Método Splice
// Remove n elementos a partir da posição I do array
const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]

letras.splice(2,2,"Z") // O primeiro parametro diz a partir de qual índice começa a remover. O segundo parâmetro diz QUANTOS ele remove
console.log(letras)



