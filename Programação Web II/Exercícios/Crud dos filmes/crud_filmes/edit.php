<?php
require 'conexao.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM filmes WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $filme = $stmt->fetch();

    if (!$filme) {
        echo "Filme não encontrado.";
        exit;
    }
} else {
    echo "ID não especificado.";
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST['nome'];
    $genero = $_POST['genero'];
    $ano = $_POST['ano'];
    $sinopse = $_POST['sinopse'];

    // Verificar se uma nova imagem foi carregada
    if ($_FILES['imagem']['name']) {
        $imagem = $_FILES['imagem']['name'];
        $caminho_imagem = 'uploads/' . basename($imagem);
        move_uploaded_file($_FILES['imagem']['tmp_name'], $caminho_imagem);
    } else {
        $caminho_imagem = $filme['imagem'];
    }

    // Atualizar no banco
    $sql = "UPDATE filmes SET nome = :nome, genero = :genero, ano = :ano, sinopse = :sinopse, imagem = :imagem WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':genero', $genero);
    $stmt->bindParam(':ano', $ano);
    $stmt->bindParam(':sinopse', $sinopse);
    $stmt->bindParam(':imagem', $caminho_imagem);
    $stmt->bindParam(':id', $id);

    if ($stmt->execute()) {
        echo "Filme atualizado com sucesso!";
    } else {
        echo "Erro ao atualizar o filme.";
    }
}
?>

<form method="POST" action="edit.php?id=<?php echo $filme['id']; ?>" enctype="multipart/form-data">
    <label>Nome do Filme:</label><br>
    <input type="text" name="nome" value="<?php echo htmlspecialchars($filme['nome']); ?>" required><br><br>

    <label>Gênero:</label><br>
    <input type="text" name="genero" value="<?php echo htmlspecialchars($filme['genero']); ?>" required><br><br>

    <label>Ano:</label><br>
    <input type="number" name="ano" value="<?php echo htmlspecialchars($filme['ano']); ?>" required><br><br>

    <label>Sinopse:</label><br>
    <textarea name="sinopse" required><?php echo htmlspecialchars($filme['sinopse']); ?></textarea><br><br>

    <label>Imagem do Filme (se quiser alterar):</label><br>
    <input type="file" name="imagem"><br><br>

    <button type="submit">Salvar alterações</button>
</form>
