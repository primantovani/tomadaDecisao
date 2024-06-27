document.addEventListener('DOMContentLoaded', function() {
    const menuHamburger = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.menu');

    menuHamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


function trocarPagina(pagina) {

    document.getElementById("pag1").style.display = "none";
    document.getElementById("pag2").style.display = "none";
    document.getElementById("pag3").style.display = "none";
    document.getElementById("pag4").style.display = "none";

    document.getElementById(pagina).style.display = "block";
}

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

// ordenação de números 

function sequenciaNumeros() {
    // Leitura dos números:
    let nu_1 = parseFloat(document.getElementById("nu_1").value);
    let nu_2 = parseFloat(document.getElementById("nu_2").value);
    let nu_3 = parseFloat(document.getElementById("nu_3").value);
    let nu_4 = parseFloat(document.getElementById("nu_4").value);
    let nu_5 = parseFloat(document.getElementById("nu_5").value);

    // Sequência
    let numbers = [nu_1, nu_2, nu_3, nu_4, nu_5];

    // Elemento para exibir o resultado
    let resultadoElement = document.getElementById('resultadoSequencia');

    // Limpar resultado se houver
    resultadoElement.innerHTML = '';

    // Ordenar os números em ordem crescente - Função de comparação
    numbers.sort((a, b) => a - b);

    // Exibir os números em ordem crescente
    resultadoElement.innerHTML += "<p class='numbers'>Os números em ordem crescente são: " + numbers.join(", ") + "</p>";
}

// Risco seguro saúde

function seguroSaude() {
    
    // inicio
    let idade = parseFloat(document.getElementById("idade").value);
    let risco = document.getElementById("risco").value;

    let categoriaRisco = "";
    
     if (idade > 16 && idade < 21) {
         switch (risco) {
             case "B":
                 categoriaRisco = "Categoria de risco 1";
                 break;
             case "M":
                 categoriaRisco = "Categoria de risco 2";
                 break;
             case "A":
                 categoriaRisco = "Categoria de risco 3";
                 break;
             default:
                 categoriaRisco = "Risco desconhecido";
         }
    
     } else if (idade > 20 && idade < 25) {
             switch (risco) {
                 case "B":
                     categoriaRisco = "Categoria de risco 2";
                     break;
                 case "M":
                     categoriaRisco = "Categoria de risco 3";
                     break;
                 case "A":
                     categoriaRisco = "Categoria de risco 4";
                     break;
                default:
                    categoriaRisco = "Risco desconhecido";
             }
     } else if (idade > 24 && idade < 35) {
             switch (risco) {
                 case "B":
                     categoriaRisco = "Categoria de risco 3";
                     break;
                 case "M":
                     categoriaRisco = "Categoria de risco 4";
                     break;
                 case "A":
                     categoriaRisco = "Categoria de risco 5";
                     break;
                default:
                    categoriaRisco = "Risco desconhecido";
             }
            } else if (idade > 34 && idade < 65) {
                switch (risco) {
                    case "B":
                        categoriaRisco = "Categoria de risco 4";
                        break;
                    case "M":
                        categoriaRisco = "Categoria de risco 5";
                        break;
                    case "A":
                        categoriaRisco = "Categoria de risco 6";
                        break;
                   default:
                       categoriaRisco = "Risco desconhecido";
                }
            } else if (idade > 64 && idade < 71) {
                switch (risco) {
                    case "B":
                        categoriaRisco = "Categoria de risco 7";
                        break;
                    case "M":
                        categoriaRisco = "Categoria de risco 8";
                        break;
                    case "A":
                        categoriaRisco = "Categoria de risco 9";
                        break;
                   default:
                       categoriaRisco = "Risco desconhecido";
                }

     
    }

    // Elemento para exibir o resultado
    let resultadoElement = document.getElementById('resultadoRisco');
    resultadoElement.innerText = categoriaRisco;

}








 

