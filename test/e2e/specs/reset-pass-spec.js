var LoginPage = require('../page-objects/LoginPage');
var ForgotPassPage = require('../page-objects/ForgotPassPage');

describe('As a user I\'m able to reset my password from the login page', function() {

    var EC = protractor.ExpectedConditions;
    var loginPage = new LoginPage();
    var forgotPassPage = new ForgotPassPage();

    beforeAll(function() {

        browser.get('https://stable.psb-ci.fsxt.net');
        browser.wait(EC.visibilityOf(loginPage.loginSection), 10000);
        expect(loginPage.loginSection.isPresent()).toBe(true);
    });

    it('go to forgot password dialog', function() {

        loginPage.goToForgotPass();
        browser.wait(EC.visibilityOf(loginPage.username), 5000);
        expect(loginPage.username.isPresent()).toBe(true);
        expect(forgotPassPage.confirmButton.isEnabled()).toBe(false);
    });

    it('forgot password dialog flow', function() {

        loginPage.username.click();
        loginPage.username.sendKeys('test');
        forgotPassPage.confirmButton.click();

        browser.wait(EC.visibilityOf(forgotPassPage.messageSentBox), 5000);
        expect(forgotPassPage.messageSentBox.isPresent()).toBe(true);
        expect((forgotPassPage.messageSentBox.element(by.xpath('//*[contains(@class, "fs-box__title")]'))).getText()).toEqual('Сообщение электронной почты отправлено');

        forgotPassPage.backToLoginButton.click();
        browser.wait(EC.visibilityOf(loginPage.loginSection), 5000);
        expect(loginPage.loginSection.isPresent()).toBe(true);
    });

    it('go back from forgot password dialog', function() {

        loginPage.goToForgotPass();
        browser.wait(EC.visibilityOf(loginPage.username), 5000);
        expect(loginPage.username.isPresent()).toBe(true);

        forgotPassPage.backToLoginButton.click();
        browser.wait(EC.visibilityOf(loginPage.loginSection), 5000);
        expect(loginPage.loginSection.isPresent()).toBe(true);
    });
});