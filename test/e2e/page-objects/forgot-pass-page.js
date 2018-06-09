var ForgotPassPage = function() {
    this.confirmButton = element(by.xpath('//*[@ng-click="forgotPassword()"]'));
    this.messageSentBox = element(by.xpath('//*[@class="fs-box"]'));
    this.backToLoginButton = element(by.xpath('//*[contains(@class, "back-to-login")]/button'));

};

module.exports = ForgotPassPage;