//--DESAFIO PRATICO--//
console.log("Escolha as Opções")
console.log("Digite 1 para Ver Saldo")
console.log("Digite 2 para Fazer Saque")
console.log("Digite 3 para Fazer Depósito")
console.log("Digite 4 para Sair")
let deposito = 0
let saque = 0
let saldo = 1000
while(saldo > 0){
    let opcao = Number(prompt("Digite a opção desejada:"))
    if (opcao == 4){
        console.log("Finalizamos a operação")
        break
    }
    else if (opcao == 3){
        deposito = Number(prompt("Digite o valor do depósito:"))
        saldo = saldo + deposito
        console.log(`Saldo Atualizado de R$ ${saldo}`)
    }
    else if (opcao == 2){
        saque = Number(prompt("Digite o valor que deseja sacar:"))
        saldo = saldo - saque
        console.log(`Saldo Atualizado de R$ ${saldo}`)
    }
    else if (opcao == 1){
        console.log(`Seu saldo é R$ ${saldo}`)
    }
    else{
        console.log("Você não escolheu a opção correta")
    }
}





















