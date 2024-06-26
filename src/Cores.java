import java.util.Scanner;

public class Cores {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedir ao usuário para inserir dois números
        System.out.println("Digite o primeiro número:");
        int num1 = scanner.nextInt();
        System.out.println("Digite o segundo número:");
        int num2 = scanner.nextInt();

        // Verificar se ambos os números são positivos
        if (num1 > 0 && num2 > 0) {
            System.out.println("Azul");
        }
        // Verificar se ambos os números são ímpares
        else if (num1 % 2 != 0 && num2 % 2 != 0) {
            System.out.println("Laranja");
        }
        // Caso contrário, imprimir "Roxo"
        else {
            System.out.println("Roxo");
        }

        scanner.close();
    }
}
