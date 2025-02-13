Cypress.Commands.add('visitApp', () => {
  cy.visit(Cypress.config('baseUrl'));
});

Cypress.Commands.add('fillForm', (nome, email, emailConfirmacao, senha) => {
  cy.get('[data-testid=nome-input]').should('be.visible').type(nome);
  cy.get('[data-testid=email-input]').should('be.visible').type(email);
  cy.get('[data-testid=email-confirmacao-input]').should('be.visible').type(emailConfirmacao);
  cy.get('[data-testid=senha-input]').should('be.visible').type(senha);
});

Cypress.Commands.add('submitForm', () => {
  cy.get('[data-testid=submit-button]').should('be.visible').click();
});

Cypress.Commands.add('checkErrorMessage', (field, message) => {
  cy.get(`[data-testid=${field}-error]`).should('contain', message);
});

Cypress.Commands.add('checkSuccessMessage', (message) => {
  cy.get('[data-testid=success-message]').should('contain', message);
});