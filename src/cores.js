// Importar o módulo readline para ler a entrada do usuário
const readline = require('readline');

// Configurar o readline para usar a entrada e saída padrão
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para verificar se um número é ímpar
function isOdd(num) {
    return num % 2 !== 0;
}

// Pedir ao usuário para inserir dois números
console.log("Digite o primeiro número:");
rl.question('', (input1) => {
    console.log("Digite o segundo número:");
    rl.question('', (input2) => {
        // Converter as entradas para números inteiros
        let num1 = parseInt(input1);
        let num2 = parseInt(input2);

        // Verificar se ambos os números são pares
        if (num1 % 2 === 0 && num2 % 2 === 0) {
            console.log("Azul");
        }
        // Verificar se ambos os números são ímpares
        else if (isOdd(num1) && isOdd(num2)) {
            console.log("Laranja");
        }
        // Caso contrário, imprimir "Roxo"
        else {
            console.log("Roxo");
        }

        // Fechar a interface readline
        rl.close();
    });
});
