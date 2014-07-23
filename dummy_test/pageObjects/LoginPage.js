/**
 * Created by eyeos on 7/8/14.
 */

var loginPage = function() {

    this.usernameTestbox = element(by.name('Email'));
    this.passwordTestbox = element(by.name('Passwd'));
    this.loginButton = element(by.id('signIn'));
    var loginURL = "http://gmail.com";

    this.getPage = function(){
        browser.get(loginURL)
    };

    this.dologin = function(usenarname, password){
        this.usernameTestbox.sendKeys(username);
        this.passwordTestbox.sendKeys(password);
        this.loginButton.click();
    };

    this.clearAllData = function(){

        this.usernameTestbox.clear();
        this.passwordTestbox.clear();

    };
}

module.exports = new loginPage();