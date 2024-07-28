/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";

describe('Login Test', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();

    it('Login Successful', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.fiilEmail("dilekdnm@gmail.com")
            .fiilPassword("Dnm888")
            .clickLogin();
        homePage.controlAccountLogin("DD");

    })

    it('Login InCorrectPassword', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.fiilEmail("dilekdnm@gmail.com")
            .fiilPassword("asdfghjkli")
            .clickLogin()
            .passwordErrorMessage();
    })

    it('Login InCorrectEmail', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.fiilEmail("asdfadfdgfddfg@gmail.com")
            .fiilPassword("Dnm888")
            .clickLogin()
            .emailErrorMessage("E-posta adresiniz sistemimizde kayıtlı değildir. Lütfen üyelik oluşturunuz.");
    })

    it('Login EmailMaxKarakterKontrolu', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.fiilEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            .fiilPassword("Dnm888")
            .clickLogin()
            .maxEmailErrorMessage("Lütfen geçerli bir e-posta adresi giriniz");
    })

    it('Login PasswordMaxKarakterKontrolu', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.fiilEmail("dilekdnm@gmail.com")
            .fiilPassword("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            .clickLogin()
            .maxPasswordErrorMessage("E-posta adresiniz veya şifreniz hatalı. Lütfen kontrol edip, tekrar deneyiniz.");
    })

    it('Login RequiredControl', () => {
        loginPage.visit();
        homePage.clickLoginPage();
        loginPage.clickLogin()
            .requiredEmailErrorMessage("Lütfen e-posta adresi giriniz")
            .requiredPasswordErrorMessage("Şifre giriniz.");
    })

})