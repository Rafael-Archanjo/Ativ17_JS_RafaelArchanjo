var VelMax, velocidade;

VelMax = 100
velocidade = 80

if (velocidade >= VelMax + 31) {
    console.log("A multa é de R$200.")
} else if (velocidade >= VelMax + 11){
    console.log("A multa é de R$100.")
}else if (velocidade > VelMax){
    console.log("A multa é de R$50.")
} else if (VelMax >= velocidade) {
    console.log("Não possui multa.")
}

