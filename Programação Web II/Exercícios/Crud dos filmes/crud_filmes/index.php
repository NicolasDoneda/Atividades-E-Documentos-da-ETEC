<?php
require 'conexao.php';

$sql = "SELECT * FROM filmes";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$filmes = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Filmes</title>
    <script>
        // Função para confirmar a exclusão
        function confirmarExclusao() {
            return confirm("Tem certeza de que deseja excluir este filme?");
        }
    </script>
</head>
<body>

<h1>Lista de Filmes</h1>

<?php foreach ($filmes as $filme): ?>
    <div>
        <h3><?php echo htmlspecialchars($filme['nome']); ?></h3>
        <p><strong>Gênero:</strong> <?php echo htmlspecialchars($filme['genero']); ?></p>
        <p><strong>Ano:</strong> <?php echo htmlspecialchars($filme['ano']); ?></p>
        <p><strong>Sinopse:</strong> <?php echo htmlspecialchars($filme['sinopse']); ?></p>
        <img src="<?php echo htmlspecialchars($filme['imagem']); ?>" alt="Imagem do filme" width="200">
        
        <!-- Links para editar e deletar -->
        <br><br>
        <a href="edit.php?id=<?php echo $filme['id']; ?>">Editar</a> |
        <a href="delete.php?id=<?php echo $filme['id']; ?>" onclick="return confirmarExclusao();">Deletar</a>
    </div>
    <hr>
<?php endforeach; ?>

</body>
</html>
