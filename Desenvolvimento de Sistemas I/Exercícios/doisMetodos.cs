using System;

class Program
{
    static void Main()
    {
        Saudacao();
        DestinosDosSonhos();
    }

    static void Saudacao()
    {
        Console.Write("Olá! Qual é o seu nome? ");
        string nome = Console.ReadLine();
        Console.WriteLine($"Prazer em te conhecer, {nome}!");
    }

    static void DestinosDosSonhos()
    {
        Console.WriteLine("\n Me diga três lugares que você gostaria de conhecer:");

        Console.Write("Lugar 1: ");
        string lugar1 = Console.ReadLine();

        Console.Write("Lugar 2: ");
        string lugar2 = Console.ReadLine();

        Console.Write("Lugar 3: ");
        string lugar3 = Console.ReadLine();

        Console.WriteLine($"\n Seria incrível visitar {lugar1}, {lugar2} e {lugar3}!");
    }
}
