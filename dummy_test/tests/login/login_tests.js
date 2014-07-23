/**
 * Created by eyeos on 7/7/14.
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
require('tdaf-node-tartare')
var loginPage = require('../../pageObjects/LoginPage.js')

chai.use(chaiAsPromised);
var expect = chai.expect;

feature('Login', 'As a user', 'I want to do login in the platform', function() {

    beforeFeature.async(function(){
        loginPage.getPage();
    })

    var LoginTittle = 'Gmail'

    var dataset_incorrect_login = [{username: 'dodon', password: '123123123'},
        {username: 'dodon04', password: '123 123 123'},
        {username: 'dodon04', password: 'testing'},
        {username: 'dodon04', password: ''},
        {username: 'DODON04', password: '123123123'}
    ];

    scenario('Incorrect login', dataset_incorrect_login, function(variant){

        given.async('the username ' + variant.username + ' and password ' + variant.password, function(){

            username = variant.username;
            password = variant.password;
            loginPage.clearAllData();
        });

        when.async('I do a login', function(){
            loginPage.dologin(username, password);
        });

        then.async('I remain in login page', function(){
            expect(browser.getTitle()).to.eventually.equal(LoginTittle);
        });
    });
    var dataset_correct_login = [{username: 'qa.user', password: 'super1q2w3e4r5t6y7u8i9o0p'}];

    scenario.skip('Correct login', dataset_correct_login, function(variant){
        given.async('the username ' + variant.username + ' and password ' + variant.password, function(){

            username = variant.username;
            password = variant.password;
            loginPage.clearAllData();

        });
        when.async('I do a login', function(){
            loginPage.dologin(username, password);
        });

        then.async('I enter to eyeOS main page', function(){
            browser.sleep(1000);
            var loginAlert = 'Welcome ' + username
            var alertDialog = browser.switchTo().alert()
0
            expect(alertDialog.getText()).to.eventually.equal(loginAlert);

            alertDialog.accept();
        });
    });
});
