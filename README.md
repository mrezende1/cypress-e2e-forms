# Projeto de Testes Automatizados com Cypress

Este projeto contém testes automatizados para o formulário de cadastro de usuário utilizando Cypress.

## Estrutura do Projeto


- **cypress/e2e/form.cy.js**: Contém os testes automatizados para o formulário de cadastro de usuário.
- **cypress/support/commands.js**: Contém comandos personalizados do Cypress para reutilização em diferentes testes.
- **cypress.config.js**: Arquivo de configuração do Cypress.

## Cenários de Teste

Os seguintes cenários de teste são cobertos:

1. **Preenchimento e envio do formulário de cadastro**:
   - Preenche o formulário com dados válidos e verifica se a mensagem de sucesso é exibida.

2. **Erros de validação para campos obrigatórios**:
   - Tenta enviar o formulário sem preencher os campos e verifica se as mensagens de erro são exibidas para cada campo obrigatório.

3. **Erro de validação para senha fraca**:
   - Preenche o formulário com uma senha fraca e verifica se a mensagem de erro é exibida.

4. **Erro de validação para confirmação de e-mail**:
   - Preenche o formulário com e-mails diferentes e verifica se a mensagem de erro é exibida.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Instalação e execução

1. Instale as dependências em ambos (Automacao + Aplicacao):
    ```sh
    npm install

2. Executando os aplicacao:
obs: Necessário baixar a aplicacao no repositório https://github.com/mrezende1/aplicacao-front
    ```sh
    npm start 

2. Executando os testes:
    ```sh
    npx cypress open ou npm cypress run

## Explicação commands

    -visitApp: Visita a aplicação.

    -fillForm: Preenche o formulário de cadastro.

    -submitForm: Envia o formulário.

    -checkErrorMessage: Verifica a mensagem de erro.
    
    -checkSuccessMessage: Verifica a mensagem de sucesso.
