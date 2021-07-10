import user from '../fixtures/UserDetails.json'
import { acceptCookies } from '../integration/utils'

describe('Douglas Login Tests', () => {
    beforeEach(() => {
        
      cy.visit('/');
    })
  
    it('Login with Valid Credentials', () => {
        acceptCookies();
        //click on Login option
        cy.get('.button.button__with-icon--transparent.account-flyout__button--main').click();
        cy.url().should('eq', Cypress.config().baseUrl+'/de/login');
        cy.login(user.ValidUsers[0].email,user.ValidUsers[0].password);
        //To check if login was sucessful
        cy.get('.account-flyout__status.icon.icon--SVG_19.icon--color-success').should("be.visible");
    })

    it('Login with Invalid credentials', () => {
        acceptCookies();
        //click on Login option
        cy.get('.button.button__with-icon--transparent.account-flyout__button--main').click();
        cy.url().should('eq', Cypress.config().baseUrl+'/de/login');
        cy.login(user.InvalidUsers[0].email,user.InvalidUsers[0].password);

        //Check for Invalid credentials error
        cy.get('.alert.alert--error').should("be.visible").and("contain", "Falsche Zugangsdaten");
    })

    it('Login with password not meeting password standards', () => {
        acceptCookies();
        //click on Login option
        cy.get('.button.button__with-icon--transparent.account-flyout__button--main').click();
        cy.url().should('eq', Cypress.config().baseUrl+'/de/login');
        cy.login(user.InvalidUsers[1].email,user.InvalidUsers[1].password);

        //Check for password standards not meeting error
        cy.get('.alert.alert--error').should("be.visible").and("contain", "Bitte überprüfe deine Angaben");
    })

    it("Check for Mandatory fields", function () {
        acceptCookies();
        //click on Login option
        cy.get('.button.button__with-icon--transparent.account-flyout__button--main').click();  

        //Check for Email Mandatory error
        cy.get('form[id="loginForm"]').find('[name="email"]').type("First").clear().blur();
        cy.get('.input__container.login__email').should("be.visible").and("contain", "Pflichtfeld");

        //Check for Password Mandatory error
        cy.get('form[id="loginForm"]').find('[name="password"]').type("Last").clear().blur();
        cy.get('.input__container.login__password').should("be.visible").and("contain", "Pflichtfeld");

        //Check for Password standards
        cy.get('form[id="loginForm"]').find('[name="password"]').type("Last");
        cy.get('.input__container.login__password').should("be.visible").and("contain", "Dein Passwort muss mindestens 6 Zeichen enthalten");
        
    
      });
})