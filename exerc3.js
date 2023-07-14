console.log("Exercício 3")

let prompt = require("prompt-sync")();

let numero1 = parseFloat(prompt("Informe um número: "))
let numero2 = parseFloat(prompt("Informe um segundo número: "))
let numero3 = parseFloat(prompt("Informe um terceiro número: "))

if(numero1 < numero2 && numero2 < numero3) {
    console.log("Os números informados estão em ordem crescente")
} else {
    console.log("Os números informados não estão em ordem crescente")
}