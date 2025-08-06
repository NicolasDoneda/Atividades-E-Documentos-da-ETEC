Banco de Dados III - 29/07/2025

Assunto: Trigger, Procedure e Jobs

Procedure:
- É um conjunto de instruções SQL armazenadas no banco.
- Usada para executar comandos repetidos ou rotinas específicas.
- Pode receber parâmetros de entrada e saída.

Trigger:
- "Gatilho" que ativa comandos automaticamente ao ocorrer um evento (INSERT, UPDATE, DELETE).
- Pode chamar uma procedure ou executar comandos diretos.
- Útil para manter integridade e automatizar ações.

Jobs:
- Tarefas agendadas que o banco executa automaticamente em horários definidos.
- Ex: gerar backups, limpar registros antigos, enviar relatórios.
- Normalmente configurados via SQL Agent (no SQL Server) ou eventos no MySQL.

Exemplo da aula:

```sql
DELIMITER //
CREATE PROCEDURE nome()
BEGIN
   -- comandos SQL
END //
DELIMITER ;
```

Comandos úteis:
- `ALTER PROCEDURE nome ...` → altera a procedure.
- `DROP PROCEDURE nome;` → apaga a procedure.

Dica:
- Para rodar procedures/triggers corretamente, sempre use o `DELIMITER` ao criar.
- `SELECT * FROM mysql.proc;` pode listar procedures no MySQL (depende da versão).

