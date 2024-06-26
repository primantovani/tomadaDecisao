// variáveis:

let number_1;
let number_2;
let number_3;
let menor;
let soma; 

// Inicialização das variáveis:

menor = 99999999999999999999;
soma = 0;

// Leitura dos números:

number_1 = parseFloat(prompt("Digite o primeiro número:"));
number_2 = parseFloat(prompt("Digite o segundo número:"));
number_3 = parseFloat(prompt("Digite o terceiro número:"));

// Determinação do menor número:

if (number_1 < menor) {
    menor = number_1;
}

if (number_2 < menor) {
    menor = number_2;
}

if (number_3 < menor) {
    menor = number_3;
}

// Cálculo da soma dos dois maiores números

if (number_1 !== menor){
    soma += number_1;
}

if (number_2 !== menor){
    soma += number_2;
}

if (number_3 !== menor){
    soma += number_3;
}

// Resultado

console.log("O menor número é:", menor);
console.log("A soma dos 2 maiores números é:", soma);


 

