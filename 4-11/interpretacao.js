let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // undefined

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Onze/11

let i = 0
console.log('d. ', array[i]) // 0

array[i+1] = 19
console.log('e. ', array) // 18,1

const valor = array[i+6]
console.log('f. ', valor) // 6
