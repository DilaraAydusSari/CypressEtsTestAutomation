class MainPage {

    fiilSearch(value) {
        cy.get("[data-test-id='input']").type(value, { delay: 300 });
        return this;
    }

    clickSearch() {
        cy.get("[class='css-8v90jo']").first().click();
        return this;
    }

    clickOtel() {
        cy.get("[class='hotel-search-form  css-70p5ui'] button").click();
        return this;
    }

}

export default MainPage;