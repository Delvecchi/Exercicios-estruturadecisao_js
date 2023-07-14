console.log("Exercício 1")

let prompt = require("prompt-sync")();

let nome_do_usuario = prompt("Informe o nome d usuário: ")
let senha = prompt("Informe a senha: ")

if(nome_do_usuario == "admin" && senha == "senha123") {
    console.log("Login bem-sucedido!")
} else {
    console.log("Login mal-sucedido")
}
