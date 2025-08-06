Banco de Dados III - 05/08/2025

Query 1:

```sql
CREATE DATABASE Aula02;
USE Aula02;

CREATE TABLE CLIENTES (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  cidade VARCHAR(100)
);

INSERT INTO clientes (nome, cidade)
VALUES
  ('Nicolas o Mala', 'Guarulhos'),
  ('Gustavo Perdido', 'Tijuco Preto'),
  ('Raphaela', 'Cumbica'),
  ('Bruno', 'Bom Clima');
```

Query 2 - Procedure com parâmetro de entrada:

```sql
DELIMITER //
CREATE PROCEDURE proc_listar_cidade(
  IN cidade_param VARCHAR(100)
)
BEGIN
  SELECT * FROM clientes WHERE cidade = cidade_param;
END //
DELIMITER ;
```

Explicação dos parâmetros:

- **IN**: parâmetro de entrada, recebe um valor.
- **OUT**: parâmetro de saída, retorna um valor.
- **INOUT**: entrada e saída, pode ser usado nos dois sentidos.

Query 3 - Chamando a procedure:

```sql
CALL proc_listar_cidade("Guarulhos");
```

Query 4 - Procedure com IN e OUT:

```sql
DELIMITER //
CREATE PROCEDURE proc_total_clientes(
  IN cidade_nome VARCHAR(100),
  OUT total INT
)
BEGIN
  SELECT COUNT(*) INTO total
  FROM clientes
  WHERE cidade = cidade_nome;
END //
DELIMITER ;
```

Query 5 - Executando a procedure com variável de usuário:

```sql
SET @resultado = 0;
CALL proc_total_clientes('Guarulhos', @resultado);
SELECT @resultado;
```

Observação:

- O `@` define uma **variável de usuário** no MySQL.
- Essas variáveis podem ser utilizadas para guardar valores temporários durante a sessão atual.

