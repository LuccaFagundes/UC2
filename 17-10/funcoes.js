/*

const base1 = 10
const altura1 = 3
const area1 = base1 * altura1

console.log(area1)

const base2 = 5
const altura2 = 2
const area2 = base2 * altura2

console.log(area2)

*/

// funções executam uma determinada tarefa que criamos ela para fazer
// primeiro precisamos criar a função, e depois de criada, precisamos executá-la/chamá-la/invocá-la

// para criar uma função, usamoas a palavra reservada "function"
// depois dela, precisamos dar um nome para a função. O melhor é que seja um nome bem descritivo, seguindo o padrão camelCase
//depois do nome, abrimos e fechamos parênteses. É aqui que colocamos as "variáveis" que vamos ver dentro do nosso código da função. Chamamos elas de parâmetros/argumentos.
// depois dos parênteses, abrimos e fechamos chaves. DICA: dê um enter entre as chaves. Dentro das chaves e onde vamos criar o código que a função vai executar.


function calculaAreaRetangulo (base,altura) {

    const area1 = base * altura;
    console.log(area1);
}

calculaAreaRetangulo(10,3)
calculaAreaRetangulo(5,2)
calculaAreaRetangulo(60,30)

function frase(nome, idade, altura) {
    console.log(`Olá ${nome}, você tem ${idade} anos e tem ${altura} de altura.`)
}

frase("Lucca", 20, 1.67)


function calculaSoma(num1,num2){
    let soma = num1 + num2
    return soma
}

let numero = calculaSoma(5,7)

console.log(numero + 10)

function converteCelsius(tempC){
    let tempF = (tempC * 1.8) + 32
    return {tempC, tempF}
}

const {tempC,tempF} = converteCelsius(30)

console.log(tempC)



