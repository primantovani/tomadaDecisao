// ordenação de números 

// Variáveis

let number_1;
let number_2;
let number_3;
let number_4;
let number_5;

// Leitura dos números:

number_1 = parseFloat(prompt("Digite o primeiro número:"));
number_2 = parseFloat(prompt("Digite o segundo número:"));
number_3 = parseFloat(prompt("Digite o terceiro número"));
number_4 = parseFloat(prompt("Digite o quarto número"));
number_5 = parseFloat(prompt("Digite o quinto número"));

// Sequência

let numbers = [number_1, number_2, number_3, number_4, number_5];

// ordernar os números em ordem crescente - Função de comparação 
numbers.sort((a, b) => a-b);

// exibir os números em ordem crescente
console.log("Os números em ordem crescente são:", numbers.join(","));







