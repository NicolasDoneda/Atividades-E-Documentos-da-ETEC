<?php
require 'conexao.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "DELETE FROM filmes WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo "Filme excluído com sucesso!";
    } else {
        echo "Erro ao excluir o filme.";
    }
} else {
    echo "ID não especificado.";
}
?>
