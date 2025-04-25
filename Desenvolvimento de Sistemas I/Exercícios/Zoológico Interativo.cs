using System;
using System.Diagnostics;
using System.Security.Cryptography.X509Certificates;

interface IAnimal {
    void EmitirSom();
}

abstract class Animais: IAnimal { 
    
    abstract public void EmitirSom();
    public string nome;
    public Animais(string nome)
        { this.nome = nome; }

}

class Cachorro : Animais { 

    public Cachorro(string nome) : base (nome) { }
    public override void EmitirSom() {

        Console.WriteLine("O cachorro late.");
    }

}

class Gato : Animais
{

    public Gato(string nome) : base(nome) { }
    public override void EmitirSom()
    {

        Console.WriteLine(" O gato mia.");


    }
}

class Rato: Animais
{
    public Rato (string nome) : base(nome) { }
    public override void EmitirSom()
    {
        Console.WriteLine("O rato chia.");
    }



}

class Program { 

    static void Main()
    {
        string escolhaTentar;
        do
        {
            Console.WriteLine("Escolha um dos animais para saber o som, digitando seus respectivos números: \n 1 - Cachorro \n 2 - Gato \n 3 - Rato");
            int escolha = Convert.ToInt32(Console.ReadLine());
            IAnimal animal = null;

            switch (escolha)
            {
                case 1:

                    animal = new Cachorro("Cachorro");
                   
                    break;

                case 2:

                    animal = new Gato("Gato");
                   
                    break;

                case 3:

                    animal = new Rato("Rato");
                    
                    break;

                default:
                    Console.WriteLine("Animal não encontrado no sistema. Tentar novamente? (s/n) ");
                        escolhaTentar = Console.ReadLine();
                    continue;

            }
        
            if (animal != null)
            {

                animal.EmitirSom();
            }
            Console.WriteLine("Deseja escolher outro animal? (s/n)");
            escolhaTentar = Console.ReadLine();

        } while (escolhaTentar == "s");

    }

}
