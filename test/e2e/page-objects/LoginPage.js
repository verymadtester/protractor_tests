var LoginPage = function() {
    this.loginSection = element(by.xpath('//*[contains(@class, "login-section")]'));
    this.username = element(by.xpath('//*[@name="username"]'));
    this.forgotPassLink = element(by.xpath('//*[contains(@class, "login-form__forgot-password")]'));

    this.goToForgotPass = function() {
        this.username.click();
        this.username.sendKeys('test');
        this.forgotPassLink.click();
    };
};

module.exports = LoginPage;