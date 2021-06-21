let loginpage = function () {

    //define your elements to be later used in a functions
    let userName_input = element(by.id('txtUsername'));
    let password_input = element(by.id('txtPassword'));
    let loginButton = element(by.id('btnLogin'));

    this.get = function (url) {
        browser.get(url);
    }

    this.enterLogin = function (username) {
        userName_input.sendKeys(username);
    };

    this.enterPassword = function (secondNo) {
        password_input.sendKeys(secondNo);
    };

    this.clickLogin = function () {
        loginButton.click();
    };

    this.clickUsername = function () {
        password_input.click();
    };
    this.verifyLogin = function (result) {
        let output = element(by.id('welcome', result));
        expect(output.getText()).toEqual(result);
    }

};

module.exports = new loginpage();