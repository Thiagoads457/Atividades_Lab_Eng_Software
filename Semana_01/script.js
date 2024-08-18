function verificarParImpar() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    // Verifica se o valor fornecido é um número e se é positivo
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }

    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }
}

function verificarPrimo() {
    // Solicita ao usuário um número inteiro positivo
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    // Verifica se o valor fornecido é um número e se é positivo
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
        return;
    }

    // Função para verificar se um número é primo
    function isPrimo(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Verifica se o número é primo e exibe o resultado
    if (isPrimo(numero)) {
        alert("O número " + numero + " é primo.");
    } else {
        alert("O número " + numero + " não é primo.");
    }
}