class ProductListPAge {

    // ilk seçeneği tıklatma;
    clickFirstProduct() {
        cy.get("[data-test-id='hotel_detail']").first().click();
        return this;
    }
    // sonuncu seçeneği tıklatma;
    clickLastProduct() {
        cy.get("[data-test-id='hotel_detail']").last().click();
        return this;
    }

    // istenilen sıradakine tıklatma (index 0'dan başlar);
    clickProduct(index) {
        cy.get("[data-test-id='hotel_detail']").eq(index).click();
        return this;
    }

}

export default ProductListPAge;