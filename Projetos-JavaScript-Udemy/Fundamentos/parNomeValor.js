//par nome/valor
const saudacao = "Opa" //contexto léxico 1

function exec() {
    const saudacao = "Olá" //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "João",
    idade: 20,
    peso: 75,
    endereco: {
        logradouro: "Rua exemplo",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)