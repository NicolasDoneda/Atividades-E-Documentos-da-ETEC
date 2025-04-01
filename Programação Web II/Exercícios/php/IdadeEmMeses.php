<?php
 
 function calcularIdadeMeses($dataNascimento){
     
     $dataNascimento = DateTime::createFromFormat("d/m/Y", $dataNascimento);
     
     $dataHoje = new DateTime();
     
     $result = $dataHoje->diff($dataNascimento);
     
     $idadetoMeses = ($result->y * 12) + $result->m;
     
     return $idadetoMeses;
     
 }
 
    $dataNascimento = readline("Digite sua data de nascimento no formato dd/mm/aaaa: ");
    
    $idadeMeses = calcularIdadeMeses($dataNascimento);
    
    echo "Sua idade em meses é: $idadeMeses \n";
 
 
 
 
?>
