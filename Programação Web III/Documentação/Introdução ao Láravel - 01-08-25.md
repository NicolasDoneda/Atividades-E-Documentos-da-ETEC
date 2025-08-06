Programação Web III - 01/08/2025

Framework: Laravel  
Linguagem: PHP

Laravel:
- Protege a URL, impedindo acesso direto às pastas do sistema.
- Trabalha com o padrão MVC:
  - **Model**: comunicação com o banco de dados.
  - **View**: parte visual (frontend).
  - **Controller**: lógica da aplicação (backend).

Rotas:
- Definidas no Controller, seguindo o padrão MVC.

Migration:
- Faz o versionamento do banco de dados.
- Registra todas as alterações de estrutura no banco.

Limitações do Laravel:
- Em sistemas muito grandes, pode gerar muitas rotas e comprometer o desempenho.
- Para esses casos, PHP puro pode ser mais eficiente.

CMS:
- Sistema de gerenciamento de conteúdo.
- Já vem com estrutura pronta, basta alterar o conteúdo específico.

Laravel.com → documentação oficial.

Composer:
- Gerenciador de dependências do PHP (semelhante ao npm do Node.js).
- Primeiro instala o Composer, depois o Laravel.

Comandos úteis:
- `laravel new appAula01` → cria um novo projeto Laravel.
- `cd appAula01` → entra na pasta do projeto.
- `composer run dev` → inicia o servidor de desenvolvimento.
- `php artisan key:generate` → gera a chave do `.env` se não houver.
- `php artisan migrate` → cria o banco de dados usando as migrations.

Blade:
- Sistema de templates do Laravel.
- Substitui os comandos PHP padrão por marcações simples.
- Exemplo: `@if () {}`
- Arquivos devem ter a extensão `.blade.php`

Segurança:
- Com o sistema de rotas do Laravel, o usuário só tem acesso à pasta `public/`, dificultando ataques diretos a outras partes do projeto.

Test Framework:
- **Pest** e **PHPUnit**: ferramentas de teste para aplicações PHP.

Vamos usar:
- Bootstrap + Blade
- Banco de dados: MySQL
- Migration: Sim

