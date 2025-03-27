using System;

class Program
{
    static void Main()
    {

        Console.WriteLine("Digite o primeiro numero: ");
        double num1 = double.Parse(Console.ReadLine());
        Console.WriteLine("Digite o segundo numero: ");
        double num2 = double.Parse(Console.ReadLine());

        Console.WriteLine("Digite a operacao que deseja efetuar: Adicao: 1 - Substracao: 2 - Multiplicacao: 3 - Divisao: 4.  ");
        int operacao = Convert.ToInt32(Console.ReadLine());

        switch (operacao)
        {
            case 1:
                double adicao = (num1 + num2);
                Console.WriteLine("O resultado é: " + adicao);
                break;
            case 2:
                double subtracao = (num1 - num2);
                Console.WriteLine("O resultado é: " + subtracao);
                break;
            case 3:
                double multiplicacao = (num1 * num2);
                Console.WriteLine("O resultado é: " + multiplicacao);
                break;
            case 4:
                if (num2 == 0) {
                    Console.WriteLine("O numero nao pode ser dividido por 0");
                    
                }
                else {
                        double divisao = (num1 / num2);
                        Console.WriteLine("O resultado é: " + divisao);
    
                }
                break;
            default:
                Console.WriteLine("Nao funciona");
                break;

        }

    }
}
