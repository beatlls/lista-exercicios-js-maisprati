//Programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()

let soma = 0

for(let i = 1; i <= 5; i ++) {
    let numero = Number(prompt("Digite o " + i + "° número: "))
    soma += numero
}

console.log("A soma total é: " + soma)