using System;

class Program
{
    static void Main()
    {
        string[] modelos = { "SUV", "Sedan", "Hatch" };
        string[,] suvCarros = {
            {"T-Cross", "Volkswagen", "11 km/L"},
            {"Tracker", "Chevrolet", "12 km/L"},
            {"Creta", "Hyundai", "10 km/L"}
        };

        string[,] sedanCarros = {
            {"Corolla", "Toyota", "13 km/L"},
            {"Onix Plus 1.0 MT", "Chevrolet", "14 km/L"},
            {"Cronos", "Fiat", "12 km/L"}
        };

        string[,] hatchCarros = {
            {"Polo", "Volkswagen", "13 km/L"},
            {"Onix", "Chevrolet", "14 km/L"},
            {"HB20", "Hyundai", "13 km/L"}
        };

        bool continuar = true;

        while (continuar)
        {
            Console.WriteLine("========= Consulta de Carros =========");
            Console.WriteLine("Selecione uma das opções abaixo:");
            Console.WriteLine("1 - SUV");
            Console.WriteLine("2 - Sedan");
            Console.WriteLine("3 - Hatch");

            int escolha = Convert.ToInt32(Console.ReadLine());
            string[,] carrosEscolhidos = new string[0, 0];

            switch (escolha)
            {
                case 1:
                    carrosEscolhidos = suvCarros;
                    break;
                case 2:
                    carrosEscolhidos = sedanCarros;
                    break;
                case 3:
                    carrosEscolhidos = hatchCarros;
                    break;
                default:
                    Console.WriteLine("Opção inválida.");
                    continue;
            }

            Console.WriteLine("Escolha o carro que deseja consultar:");
            for (int i = 0; i < carrosEscolhidos.GetLength(0); i++)
            {
                Console.WriteLine($"{i + 1} - {carrosEscolhidos[i, 0]}");
            }

            int escolhaCarro = Convert.ToInt32(Console.ReadLine());

            if (escolhaCarro >= 1 && escolhaCarro <= carrosEscolhidos.GetLength(0))
            {
                string nome = carrosEscolhidos[escolhaCarro - 1, 0];
                string marca = carrosEscolhidos[escolhaCarro - 1, 1];
                string consumo = carrosEscolhidos[escolhaCarro - 1, 2];

                Console.WriteLine($"\nInformações sobre o carro selecionado:");
                Console.WriteLine($"Modelo: {nome}");
                Console.WriteLine($"Marca: {marca}");
                Console.WriteLine($"Consumo: {consumo}\n");
            }
            else
            {
                Console.WriteLine("Carro inválido.");
            }

            Console.WriteLine("Deseja fazer outra consulta? (s/n)");
            string resposta = Console.ReadLine().ToLower();
            continuar = resposta == "s";
        }

        Console.WriteLine("Obrigado por usar a consulta de carros!");
    }
}
