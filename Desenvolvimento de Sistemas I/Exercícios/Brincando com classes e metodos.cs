
using System;

class Carro{
    
    public void Aceleracao(){
        
        Console.WriteLine("O veículo está acelerando");
        
    }
}
class Moto:Carro{
    
    public void Freio(){
        
        Console.WriteLine("O veículo está freando");
    }
}


class Program{
    
    static void Main(){
        
        Moto moto = new Moto();
        
        Console.WriteLine("Qual o seu veículo? ");
        string escolha = Console.ReadLine();
        if (escolha == "carro"){
            Console.WriteLine("Seu veículo é um "+escolha+"!");
            
            Console.WriteLine("Seu veículo está aumentando a velocidade? ");
            string escolha2 = Console.ReadLine();
            if(escolha2 == "sim"){
                
                moto.Aceleracao();
            }
            else{
                
                moto.Freio();
            }
        }
         else if (escolha == "moto"){
             
             Console.WriteLine("Seu veículo é uma "+escolha+"!");
             
             Console.WriteLine("Seu veículo está aumentando a velocidade?");
             string escolha3 = Console.ReadLine();
             if(escolha3 == "sim"){
                 
                 moto.Aceleracao();
                 
                 
             }
             else{
                 
                 moto.Freio();
                 
                 
             }
             
         }
        
    }
    
    
    
    
}
