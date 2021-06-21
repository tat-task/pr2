let pimpage = function () {

    //define your elements to be later used in a functions
    let addEmployee = element(by.id('menu_pim_addEmployee'));
    let firstName_input = element(by.id('firstName'));
    let lastName_input = element(by.id('lastName'));
    let driverLic_input = element(by.id('personal_txtLicenNo'));
    let nationality_input = element(by.id('personal_cmbNation'));
    let save = element(by.id('btnSave'));

    this.clickaddEmployee= function () {
        addEmployee.click();
    };

    this.addfirstName = function (firstName) {
        firstName_input.sendKeys(firstName);
    };

    this.addlastName = function (lastName) {
        lastName_input.sendKeys(lastName);
    };

    this.clickSave= function () {
        save.click();
    };

    this.adddriverLic = function (driverLic) {
        driverLic_input.sendKeys(driverLic);
    };

    /* this.addnationality = function (nationality) {
        nationality_input.sendKeys(nationality);
    }; */
    this.addnationality = function (nationality) {
        //nationality_input.click(nationality);
        //nationality_input.$('[value="Lithuanian"]').click();
        nationality_input.click();
        nationality_input.$('[value="Lithuanian"]').click();
    };

        /* element(by.css('input[name="personal[txtLicenNo]"]')).click();
    element(by.css('input[name="personal[txtLicenNo]"]')).clear().sendKeys('B546846546');
    element(by.css('input[name="personal[txtNICNo]"]')).click();
    element(by.css('input[name="personal[txtNICNo]"]')).clear().sendKeys('SSN454544654');
    element(by.css('ol:nth-of-type(4)>li:nth-of-type(1)>ul>li:nth-of-type(1)>input[name="personal[optGender]"]')).click();
    element(by.css('select[name="personal[cmbNation]"]')).click();
    element(by.css('select[name="personal[cmbNation]"]')).click();
    element(by.css('div:nth-of-type(49)>div:nth-of-type(1)')).click();
    element(by.css('ol:nth-of-type(3)>li:nth-of-type(3)')).click();
    element(by.css('input[name="personal[txtLicenNo]"]')).click();
 */
    this.clickSave= function () {
        save.click();
    };
};

module.exports = new pimpage();