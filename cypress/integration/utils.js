export const acceptCookies = () => {
    cy.wait(2000);
    cy.get('.button.button__primary').click();
  }