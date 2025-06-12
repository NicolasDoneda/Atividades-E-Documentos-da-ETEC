CREATE DATABASE Supermercado;
USE Supermercado;

CREATE TABLE Clientes (
 ClienteID INT PRIMARY KEY AUTO_INCREMENT,
 Nome VARCHAR(100) NOT NULL,
 CPF VARCHAR(14) UNIQUE NOT NULL,
 Email VARCHAR(100),
 Telefone VARCHAR(20),
 DataCadastro DATE NOT NULL
);
CREATE TABLE Fornecedores (
 FornecedorID INT PRIMARY KEY AUTO_INCREMENT,
 Nome VARCHAR(100) NOT NULL,
 CNPJ VARCHAR(18) UNIQUE NOT NULL,
 Telefone VARCHAR(20),
 Email VARCHAR(100),
 Endereco VARCHAR(200)
);
CREATE TABLE Produtos (
 ProdutoID INT PRIMARY KEY AUTO_INCREMENT,
 Nome VARCHAR(100) NOT NULL,
 Categoria VARCHAR(50),
 Preco DECIMAL(10, 2) NOT NULL,
 QuantidadeEstoque INT NOT NULL,
 FornecedorID INT,
 FOREIGN KEY (FornecedorID) REFERENCES 
Fornecedores(FornecedorID)
);
CREATE TABLE Vendas (
 VendaID INT PRIMARY KEY AUTO_INCREMENT,
 ClienteID INT,
 DataVenda DATE NOT NULL,
 Total DECIMAL(10, 2),
 FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
CREATE TABLE ItensVenda (
 ItemVendaID INT PRIMARY KEY AUTO_INCREMENT,
 VendaID INT,
 ProdutoID INT,
 Quantidade INT,
 PrecoUnitario DECIMAL(10, 2),
 Subtotal DECIMAL(10, 2),
 FOREIGN KEY (VendaID) REFERENCES Vendas(VendaID),
 FOREIGN KEY (ProdutoID) REFERENCES Produtos(ProdutoID)
);

-- Exercício 1 --

INSERT INTO Clientes (Nome, CPF, Email, Telefone, DataCadastro)
VALUES 
('Ana Silva', '123.456.789-00', 'ana.silva@email.com', '(11) 99999-1111', '2025-06-01'),
('Carlos Pereira', '987.654.321-00', 'carlos.pereira@email.com', '(21) 98888-2222', '2025-06-02'),
('Mariana Souza', '111.222.333-44', 'mariana.souza@email.com', '(31) 97777-3333', '2025-06-03');


INSERT INTO Fornecedores (Nome, CNPJ, Telefone, Email, Endereco)
VALUES 
('Fornecedor A', '12.345.678/0001-90', '(11) 91234-5678', 'contato@fornecedora.com', 'Rua A, 123 - São Paulo'),
('Fornecedor B', '98.765.432/0001-10', '(21) 99876-5432', 'contato@fornecedorb.com', 'Av. B, 456 - Rio de Janeiro');

	INSERT INTO Produtos (Nome, Categoria, Preco, QuantidadeEstoque, FornecedorID)
VALUES 
('Arroz Tipo 1', 'Alimentos', 25.90, 100, 1),
('Feijão Carioca', 'Alimentos', 7.50, 200, 1),
('Detergente Neutro', 'Limpeza', 2.99, 150, 2),
('Sabão em Pó', 'Limpeza', 18.90, 80, 2),
('Açúcar Refinado', 'Alimentos', 4.20, 120, 1);


INSERT INTO Vendas (ClienteID, DataVenda, Total)
VALUES (1, '2025-06-10', 33.40);

INSERT INTO ItensVenda (VendaID, ProdutoID, Quantidade, PrecoUnitario, Subtotal)
VALUES 
(1, 1, 1, 25.90, 25.90),
(1, 3, 2, 2.99, 5.98),
(1, 5, 1, 4.20, 4.20);


INSERT INTO Vendas (ClienteID, DataVenda, Total)
VALUES (2, '2025-06-11', 42.80);

INSERT INTO ItensVenda (VendaID, ProdutoID, Quantidade, PrecoUnitario, Subtotal)
VALUES 
(2, 2, 2, 7.50, 15.00),
(2, 4, 1, 18.90, 18.90),
(2, 3, 3, 2.99, 8.97);


INSERT INTO Vendas (ClienteID, DataVenda, Total)
VALUES (3, '2025-06-12', 29.40);

INSERT INTO ItensVenda (VendaID, ProdutoID, Quantidade, PrecoUnitario, Subtotal)
VALUES 
(3, 5, 3, 4.20, 12.60),
(3, 2, 1, 7.50, 7.50),
(3, 3, 3, 2.99, 8.97);


-- Exercício 2 --
SELECT * FROM Produtos;

SELECT * FROM Clientes;

SELECT Nome,Email, CNPJ, Telefone, Email FROM Fornecedores;

-- Exercício 3 --
SELECT * FROM Produtos
WHERE quantidadeEstoque < 10;

SELECT * FROM Vendas
WHERE MONTH(DataVenda) = MONTH(CURDATE()) AND YEAR(DataVenda) = YEAR(CURDATE());

SELECT * FROM Clientes
WHERE Nome LIKE 'A%';

-- Exercício 4 --
SELECT p.nome AS Produto, f.nome AS Fornecedor, p.preco AS preço
FROM Produtos p
JOIN Fornecedores f ON f.FornecedorID = p.FornecedorID;

SELECT V.VendaID, C.Nome AS Cliente, V.DataVenda, V.Total
FROM Vendas V
JOIN Clientes C ON V.ClienteID = C.ClienteID;

SELECT IV.ItemVendaID, P.Nome AS Produto, IV.Quantidade, IV.PrecoUnitario, IV.Subtotal
FROM ItensVenda IV
JOIN Produtos P ON IV.ProdutoID = P.ProdutoID;

-- Exercício 5 --

SELECT P.Nome AS Produto, SUM(IV.Subtotal) AS TotalVendido
FROM ItensVenda IV
JOIN Produtos P ON IV.ProdutoID = P.ProdutoID
GROUP BY P.Nome;

SELECT C.Nome AS Cliente, SUM(V.Total) AS TotalComprado
FROM Vendas V
JOIN Clientes C ON V.ClienteID = C.ClienteID
GROUP BY C.Nome;

SELECT SUM(Total) AS TotalVendas
FROM Vendas;

-- Exercício 7 --

UPDATE Produtos
SET Preco = Preco * 1.10
WHERE Nome = 'Feijão Carioca';

-- Exercício b --
-- Primeiro excluir os produtos (se não houver restrições de venda):
DELETE FROM Produtos
WHERE FornecedorID = (SELECT FornecedorID FROM Fornecedores WHERE Nome = 'Fornecedor A');

-- Depois excluir o fornecedor:
DELETE FROM Fornecedores
WHERE Nome = 'Fornecedor A';


-- Exercício 8 --

SELECT C.Nome AS Cliente, V.DataVenda, SUM(IV.Quantidade) AS TotalItens, V.Total AS ValorTotalVenda
FROM Vendas V
JOIN Clientes C ON V.ClienteID = C.ClienteID
JOIN ItensVenda IV ON V.VendaID = IV.VendaID
GROUP BY V.VendaID, C.Nome, V.DataVenda, V.Total;





