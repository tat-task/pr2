let loginpage = require('../pages/loginpage');
let homepage = require('../pages/homepage');
let pimpage = require('../pages/pimpage');

var XLSX = require('xlsx');
var workbook = XLSX.readFile('./tat-task.xlsx');
var worksheet_login = workbook.Sheets['login'];
var userName = worksheet_login['A2'];
var userPassword = worksheet_login['B2'];
var worksheet_newEmployee= workbook.Sheets['newEmployee'];
var firstName = worksheet_newEmployee['A2'];
var lastName = worksheet_newEmployee['B2'];
var driverLic = worksheet_newEmployee['C2'];
var nationality = worksheet_newEmployee['D2'];
console.log(userName);
describe('TAT task testing', function () {

    it('login', function () {
       /*  var workbook = XLSX.readFile('./tat-task.xlsx');
        var worksheet_login = workbook.Sheets['Sheet1'];
        var userName = worksheet_login['A2'];
        console.log(userName);  */
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize()
        loginpage.get('https://opensource-demo.orangehrmlive.com/index.php');

        loginpage.enterLogin(userName.v);

        loginpage.enterPassword(userPassword.v);

        loginpage.clickLogin(); 
                
        browser.sleep(5000)
        loginpage.get('https://opensource-demo.orangehrmlive.com/index.php');
        browser.sleep(5000)
        //loginpage.verifyLogin('Welcome paul');
    });

    it('homepage', function () {

        homepage.clickPIM();
        browser.sleep(5000)
        
    });

    it('pimpage', function () {

        pimpage.clickaddEmployee();
        pimpage.addfirstName(firstName.v);

        pimpage.addlastName(lastName.v);

        pimpage.clickSave();

        pimpage.clickSave();
        
        pimpage.adddriverLic(driverLic.v);
        //pimpage.addnationality(nationality.v);
       // pimpage.clickSave();
        browser.sleep(5000)
        
    });

    /* it('pimpage', function () {

        pimpage.clickaddEmployee();
        browser.sleep(5000)
        
    }); */
});
