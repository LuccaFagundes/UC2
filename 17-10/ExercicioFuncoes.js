// crie uma função que recebe um valor em horas e passa ele para segundos.


function calculaHoraParaSegundos (hora) {
    let horaEmSegundos = hora * 3600
    console.log(`Há ${horaEmSegundos} em ${hora} horas.`)
}

calculaHoraParaSegundos(24)

function mediaDeTresNotas (nota1,nota2,nota3) {
    let mediaDeTresNotas = (nota1 + nota2 + nota3) / 3
    console.log(`Sua média será entao ${mediaDeTresNotas}`)
}

mediaDeTresNotas(8,7,6)

function esteImparOuPar (numerox) {
    
    if ( numerox === 0 ) {
        console.log("Seu número é zero")
    }

    else if ( (numerox%2) === 0 )
    console.log("Seu número é par")

    else {
        console.log("Seu numero é impar")
    }
}

esteImparOuPar(5)







