<?php
require 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST['nome'];
    $genero = $_POST['genero'];
    $ano = $_POST['ano'];
    $sinopse = $_POST['sinopse'];

    // Processar a imagem
    $imagem = $_FILES['imagem']['name'];
    $caminho_imagem = 'uploads/' . basename($imagem);

    if (move_uploaded_file($_FILES['imagem']['tmp_name'], $caminho_imagem)) {
        // Inserir no banco de dados
        $sql = "INSERT INTO filmes (nome, genero, ano, sinopse, imagem) VALUES (:nome, :genero, :ano, :sinopse, :imagem)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':genero', $genero);
        $stmt->bindParam(':ano', $ano);
        $stmt->bindParam(':sinopse', $sinopse);
        $stmt->bindParam(':imagem', $caminho_imagem);

        if ($stmt->execute()) {
            echo "Filme cadastrado com sucesso!";
        } else {
            echo "Erro ao cadastrar o filme.";
        }
    } else {
        echo "Falha ao enviar a imagem.";
    }
}
?>

<form method="POST" action="create.php" enctype="multipart/form-data">
    <label>Nome do Filme:</label><br>
    <input type="text" name="nome" required><br><br>

    <label>Gênero:</label><br>
    <input type="text" name="genero" required><br><br>

    <label>Ano:</label><br>
    <input type="number" name="ano" required><br><br>

    <label>Sinopse:</label><br>
    <textarea name="sinopse" required></textarea><br><br>

    <label>Imagem do Filme:</label><br>
    <input type="file" name="imagem" required><br><br>

    <button type="submit">Cadastrar Filme</button>
</form>
