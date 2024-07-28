class LoginPage{

    visit() {
        cy.visit("https://www.etstur.com/");
        return this;
    }

    fiilEmail(value) {
        cy.get("[name='email']").type(value, {delay:300});
        return this;
    }

    fiilPassword(value) {
        cy.get("[name='password']").type(value);
        return this;
    }

    clickLogin() {
        cy.get("[class='css-ye9xfp'] button").click();
        return this;
    }

    passwordErrorMessage() {
        cy.get("[data-test-id='input-info-text']").should("be.visible");
        //cy.get("[data-test-id='input-info-text']").should('have.text', value); (bunu kullanınca password...(value) yazmayı unutma!!)
        return this;
    }

    emailErrorMessage(value) {
        cy.get("[data-test-id='input-info-text']").should('have.text', value);
        return this;
    }

    maxEmailErrorMessage(value) {
        cy.get("[data-test-id='input-info-text']").should('have.text', value);
        return this;
    }

    maxPasswordErrorMessage(value) {
        cy.get("[data-test-id='input-info-text']").should('have.text', value);
        return this;
    }

    requiredEmailErrorMessage(value) {
        cy.get("[data-test-id='input-info-text']").first().should('have.text', value);
        return this;
    }

    requiredPasswordErrorMessage(value) {
        cy.get("[data-test-id='input-info-text']").last().should('have.text', value);
        return this;
    }

}

export default LoginPage;