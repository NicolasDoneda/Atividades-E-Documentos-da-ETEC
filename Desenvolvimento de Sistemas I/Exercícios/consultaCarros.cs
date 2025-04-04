using System;
class Program {
    
  static void Main() {

    
      
    string [] modeloCarro = {"Suv", "Sedan", "Hatch"};
    string [] suvCarro = {"T-Cross","Tracker","Creta"};
    string [] sedanCarro = {"Corolla","Onix Plus 1.0 MT","Cronos"};
    string [] hatchCarro = {"Polo","Onix","HB20"};

    Console.WriteLine("=========Consulta de carros=========");
    Console.WriteLine("Selecione uma das opções abaixo:\n 1 - SUV \n 2 - Sedan \n 3 - Hatch");
    int escolha = Convert.ToInt32(Console.ReadLine());
    
    switch (escolha){
        case 1:
        foreach(string carro in suvCarro){
            Console.WriteLine(carro);
        }
        break;
        case 2:
        foreach(string carro in sedanCarro){
            Console.WriteLine(carro);
        }
        break;
        case 3: 
        foreach(string carro in hatchCarro){
            Console.WriteLine(carro);
        }
        break;

        default:
        Console.WriteLine("Digite um número válido da lista.");
        break;
        
    }


    
    
  }
  
}
