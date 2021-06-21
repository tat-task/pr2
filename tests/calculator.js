let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7');

    });

    it('second addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('4');

        homepage.clickGo();

        homepage.verifyResult('8');

    });
});
