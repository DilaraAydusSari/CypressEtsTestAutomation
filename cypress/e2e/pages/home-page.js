class HomePage {

    clickLoginPage() {
        cy.get("[data-icon='circle-user']").click();
        return this;
    }

    controlAccountLogin(value) {
        //cy.get("[class='css-sjwpic'] p").should("be.visible");
        cy.get("[class='css-sjwpic'] p").should('have.text', value);
        return this;
    }

}

export default HomePage;