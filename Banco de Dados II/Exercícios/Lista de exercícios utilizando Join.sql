
-- EXERCÍCIO DE CONSULTAS 17-04-25 --

-- CONSULTA 1
SELECT l.titulo, v.preco_unitario AS preço, v.quantidade
FROM livros l
JOIN vendas v ON v.livro_id = l.id
ORDER BY quantidade DESC;

-- CONSULTA 2
SELECT l.titulo, SUM(v.quantidade * v.preco_unitario) AS faturamento
FROM livros l
JOIN vendas v ON v.livro_id = l.id
GROUP BY l.titulo
ORDER BY faturamento DESC;

-- CONSULTA 3
SELECT l.titulo, v.quantidade, YEAR(v.data_venda) AS ano
FROM vendas v
JOIN livros l ON v.livro_id = l.id
WHERE YEAR(v.data_venda) = 2023
ORDER BY quantidade DESC;

-- CONSULTA 4
SELECT l.titulo, SUM(v.quantidade * v.preco_unitario) AS faturamento, YEAR(v.data_venda) AS ano
FROM livros l 
JOIN vendas v ON v.livro_id = l.id
WHERE YEAR(v.data_venda) = 2023
GROUP BY l.titulo
ORDER BY faturamento DESC;


