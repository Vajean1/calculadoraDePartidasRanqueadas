function saldoFinalkeadas(qtdVitorias, qtdDerrotas){
    let saldoFinal = qtdVitorias - qtdDerrotas
    return parseInt(saldoFinal)
}

function classificacaoPorVitorias(saldoFinal){
    if (saldoFinal < 10){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Ferro`)
    }
    else if (saldoFinal > 10 && saldoFinal <= 20){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Bronze`)
    }
    else if (saldoFinal > 20 && saldoFinal <= 50){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Prata`)
    }
    else if (saldoFinal > 50 && saldoFinal <=80){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Ouro`)
    }
    else if (saldoFinal > 80 && saldoFinal <= 90){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Diamante`)
    }
    else if (saldoFinal > 90 && saldoFinal <= 100){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Lendário`)
    }
    else if (saldoFinal >= 101){
        console.log(`O Herói tem saldo de ${saldoFinal} e está no nível de Imortal`)
    }
}

function main(){
    let qtdVitorias = prompt("Qual a quantidade de vitórias do seu Herói: ")
    let qtdDerrotas = prompt("Qual a quantidade de derrotas do seu Herói: ")

    classificacaoPorVitorias(saldoFinalkeadas(qtdVitorias, qtdDerrotas))
}

main()
