describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Deve preencher e enviar o formulário de cadastro', () => {
    cy.fillForm('João Silva', 'joao.silva@example.com', 'joao.silva@example.com', 'Senha123');
    cy.submitForm();
    cy.checkSuccessMessage('Cadastro realizado com sucesso!');
  });

  it('Deve mostrar erros de validação para campos obrigatórios', () => {
    cy.submitForm();
    cy.checkErrorMessage('nome', 'Campo Obrigatório');
    cy.checkErrorMessage('email', 'Campo Obrigatório');
    cy.checkErrorMessage('email-confirmacao', 'Campo Obrigatório');
    cy.checkErrorMessage('senha', 'Campo Obrigatório');
  });

  it('Deve mostrar erro de validação para senha fraca', () => {
    cy.fillForm('João Silva', 'joao.silva@example.com', 'joao.silva@example.com', 'senha');
    cy.submitForm();
    cy.checkErrorMessage('senha', 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.');
  });

  it('Deve mostrar erro de validação para confirmação de e-mail', () => {
    cy.fillForm('João Silva', 'joao.silva@example.com', 'joao.silva@diferente.com', 'Senha123');
    cy.submitForm();
    cy.checkErrorMessage('email-confirmacao', 'Os e-mails devem ser iguais.');
  });
});