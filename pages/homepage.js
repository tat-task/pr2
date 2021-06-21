let homepage = function () {

    //define your elements to be later used in a functions
    let pimLink = element(by.id('menu_pim_viewPimModule'));

    this.clickPIM = function () {
        pimLink.click();
    };
};

module.exports = new homepage();