import user from '../fixtures/UserDetails.json'
import { acceptCookies } from '../integration/utils'

describe('Reset Password Test', () => {
    beforeEach(() => {
        
      cy.visit('/');
    })
  
    it('Reset Password', () => {
        acceptCookies();

        cy.get('.button.button__with-icon--transparent.account-flyout__button--main').click();
        //click on Reset Password
        cy.get('.login__link').click();
        cy.wait(1000);
        cy.get('form[id="forgotPasswordForm"]').find('[name="forgotPasswordEmail"]').type(user.ValidUsers[0].email);
        cy.get('.button.button__primary.forgot-password__button').click();

        //Check confirmation for sending password reset link in the email
        cy.get('.modal-header__title-container').should("be.visible").and("contain", "Bitte gib hier die E-Mail-Adresse ein, mit der du dein Douglas-Konto erstellt hast. Wir schicken dir dann umgehen einen Link zu, mit dem du ein neues Passwort erstellen kannst.");
        cy.get('.button.button__primary.forgot-password__button').click();

        cy.get('.login-box__title').should("be.visible").and("contain","Ich bin bereits Douglas-Kunde");
    })
})