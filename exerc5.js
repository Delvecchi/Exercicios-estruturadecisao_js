// Exercício 5: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

console.log("Exercício 5")

let prompt = require("prompt-sync")();

let valor_total = parseFloat(prompt("Informe o valor total de sua compra: R$"))

if(valor_total > 200) {
    valor_total = valor_total * 1.2
    console.log("O valor final de sua compra de acordo com o desconto liberado é de R$" + valor_total.toFixed(2))
}else if(valor_total > 100 && valor_total <= 200) {
    valor_total = valor_total * 1.1
    console.log("O valor final de sua compra de acordo com o desconto liberado é de R$" + valor_total.toFixed(2))
}else {
    console.log("O valor final de sua compra não libera desconto")
}