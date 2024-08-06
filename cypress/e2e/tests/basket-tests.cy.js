/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import MainPage from "../pages/main-page";
import ProductListPAge from "../pages/product-list-page";

describe('Basket Test', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const mainPage = new MainPage();
    const productListPage = new ProductListPAge();

    it('Add To Product', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.fiilEmail("dilekdnm@gmail.com")
            .fiilPassword("Dnm888")
            .clickLogin();
        homePage.controlAccountLogin("DD");
        mainPage.fiilSearch("Antalya")
            .clickSearch()
            .clickOtel();
        productListPage.clickFirstProduct();

    })
})