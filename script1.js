function verificarNumeros() {
    // Obter os valores dos camos de entrada
    let number_1 = parseFloat(document.getElementById('numero1').value);
    let number_2 = parseFloat(document.getElementById('numero2').value);
    

    // Variáveis oara os testes:

    test_1 = (number_1 % 2 === 0) && (number_2 % 2 === 0);
    test_2 = (number_1 % 2 == 1) && (number_2 % 2 == 1); 

    // Elemento para exibir o resultado
    let resultadoElement = document.getElementById('resultadoVerificar');

    // Limpar resultado se houver
   resultadoElement.innerHTML = '';

    // Saída de dados

    if (test_1) {
        resultadoElement.innerHTML = "<p class='azul'>Azul</p>";
    } else {
        if (test_2) {
            resultadoElement.innerHTML = "<p class='laranja'>Laranja</p>";
        } else {
            resultadoElement.innerHTML = "<p class='roxo'>Roxo</p>";
        }
    }
}

function somaNumeros(){

    // variáveis:
    
    let n1;
    let n2;
    let n3;
    let menor;
    let soma; 
    
    // Inicialização das variáveis:
    
    menor = 99999999999999999999;
    soma = 0;
    
    // Leitura dos números:
    
    n1 = parseFloat(document.getElementById('n1').value);
    n2 = parseFloat(document.getElementById('n2').value);
    n3 = parseFloat(document.getElementById('n3').value);
    
    // Determinação do menor número:
    
    if (n1 < menor) {
        menor = n1;
    }
    
    if (n2 < menor) {
        menor = n2;
    }
    
    if (n3 < menor) {
        menor = n3;
    }
    
    // Cálculo da soma dos dois maiores números
    
    if (n1 !== menor){
        soma += n1;
    }
    
    if (n2 !== menor){
        soma += n2;
    }
    
    if (n3 !== menor){
        soma += n3;
    }

    // Elemento para exibir o resultado
    let resultadoElement = document.getElementById('resultadoSoma');

    // Limpar resultado se houver
    resultadoElement.innerHTML = '';
    
    // Resultado
    resultadoElement.innerHTML = "<p class='menor'>O menor número é: " + menor + "</p>";
    resultadoElement.innerHTML += "<p class='soma'>A soma dos 2 maiores números é: " + soma + "</p>";

}    

 

