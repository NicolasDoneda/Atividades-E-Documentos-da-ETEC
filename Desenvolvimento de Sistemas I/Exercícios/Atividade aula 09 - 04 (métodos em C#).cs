using System;


class Program
{



    static void Main()
    {


//-------------------------------------------------------------------------//
        static int SomarTresNumeros(int num1, int num2, int num3)
        {
            return num1 + num2 + num3;

        }
//-------------------------------------------------------------------------//
        void Saudacao (string nome)
        {
            Console.WriteLine("Olá, "+ nome+ "! Bem-Vindo.");
        }
//-------------------------------------------------------------------------//

        static string EhMultiploDeCinco(int numero)
        {
            if (numero % 5 == 0)
            {
                return "Sim";
            }
            else
            {
                return "Não";
            }
        }
//-------------------------------------------------------------------------//

        Console.WriteLine("Digite os três números para serem somados: ");
        int n1 = Convert.ToInt32(Console.ReadLine());
        int n2 = Convert.ToInt32(Console.ReadLine());
        int n3 = Convert.ToInt32(Console.ReadLine());


        int resultado = SomarTresNumeros(n1, n2, n3);
        Console.WriteLine("O resultado é: \n" + resultado);

        Saudacao("joao");

        Console.WriteLine("Digite um número para verificar se é múltiplo de 5: ");
        int numeroParaVerificar = Convert.ToInt32(Console.ReadLine());
        string resposta = EhMultiploDeCinco(numeroParaVerificar);
        Console.WriteLine("O número " + numeroParaVerificar + " é múltiplo de 5? \n" + resposta);
    }
}
