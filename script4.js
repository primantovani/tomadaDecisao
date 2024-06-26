// variáveis 

   let idade;
   let risco;

// inicio

    idade = parseFloat(prompt("Informe a idade do segurado: "));
    console.log (idade);

    risco = prompt("Informe a categoria de risco do segurado (B, M ou A) ");
    console.log (risco);

    if (idade > 16 && idade < 21) {
        switch (risco) {
            case "B":
                console.log("Categoria de risco 1");
                break;
            case "M":
                console.log("Categoria de risco 2");
                break;
            case "A":
                console.log("Categoria de risco 3");
                break;
            default:
                console.log("Risco desconhecido");
        }

    } else if (idade > 20 && idade < 25) {
            switch (risco) {
                case "B":
                    console.log("Categoria de risco 2");
                    break;
                case "M":
                    console.log("Categoria de risco 3");
                    break;
                case "A":
                    console.log("Categoria de risco 4");
                    break;
                default:
                    console.log("Risco desconhecido");
            }
    } else if (idade > 24 && idade < 35) {
            switch (risco) {
                case "B":
                    console.log("Categoria de risco 3");
                    break;
                case "M":
                    console.log("Categoria de risco 4");
                    break;
                case "A":
                    console.log("Categoria de risco 5");
                    break;
                default:
                    console.log("Risco desconhecido");
            }
} else {
    console.log("Idade fora dos intervalos especificados");
}

    
    




//    se (idade>16)e (idade<21) ENTÃO

//       escolha (risco)
//       caso "B"
//          escreval ("Categoria de risco 1")
//       caso "M"
//          escreval ("Categoria de risco 2")
//       caso "A"
//          escreval ("Categoria de risco 3")
//       fimescolha

//    senao

//       se (idade>20)e (idade<25) ENTÃO

//          escolha (risco)
//          caso "B"
//             escreval ("Categoria de risco 2")
//          caso "M"
//             escreval ("Categoria de risco 3")
//          caso "A"
//             escreval ("Categoria de risco 4")
//          fimescolha

//       senao

//          se (idade>24)e (idade<35) ENTÃO

//             escolha (risco)
//             caso "B"
//                escreval ("Categoria de risco 3")
//             caso "M"
//                escreval ("Categoria de risco 4")
//             caso "A"
//                escreval ("Categoria de risco 5")
//             fimescolha

//          senao

//             se (idade>34)e (idade<65) ENTÃO

//                escolha (risco)
//                caso "B"
//                   escreval ("Categoria de risco 4")
//                caso "M"
//                   escreval ("Categoria de risco 5")
//                caso "A"
//                   escreval ("Categoria de risco 6")
//                fimescolha
//             senao

//                se (idade>65)e (idade<71) ENTÃO

//                   escolha (risco)
//                   caso "B"
//                      escreval ("Categoria de risco 7")
//                   caso "M"
//                      escreval ("Categoria de risco 8")
//                   caso "A"
//                      escreval ("Categoria de risco 9")
//                   fimescolha

//                fimse
//             fimse
//          fimse
//       fimse
//    fimse
// fimalgoritmo