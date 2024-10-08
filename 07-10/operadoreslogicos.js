// Operador "E" (AND) - Símbolo: &&
// Retorna true APENAS SE TODOS OS ENVOLVIDOS forem true
// Apenas um único false já é suficiente para retornar false
console.log(true && true)

console.log(true && true) //true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

let idade = 18
let maiorIdade = idade >= 18 //true
let temCarteira = false
let temCarro = true



// Operador OU (OR) - Símbolo: ||
//Retorna false APENAS SE TODOS OS ENVOLVIDOS forem false
//Apenas um único true já é suficiente para retornar true


console.log(true || true) //true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

let temTrabalho = true
let economiza = true
let investe = true
let herdeiro = true

console.log((temTrabalho && economiza && investe) || herdeiro)



// Operador NÃO/Negação (NOT) - Símbolo: !
// Inverte o estado - True e vice e versa para false

let ligado = true



console.log(!ligado)








