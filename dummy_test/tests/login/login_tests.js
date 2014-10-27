/**
 * Created by eyeos on 7/7/14.
 */

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
require('tartare')
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
	beforeScenario.async(function(){
	    console.log('executing')
            username = 'hello';
            password = 'hello';
            loginPage.clearAllData();
            loginPage.dologin(username, password);
	    console.log('finish before_scenario');
});
        given.async('the username ' + variant.username + ' and password ' + variant.password, function(){

        });

        when.async('I do a login', function(){
            
        });

        then.async('I remain in login page', function(){
            expect(browser.getTitle()).to.eventually.equal(LoginTittle);
        });
    });
    var dataset_correct_login = [{username: 'qa.user', password: 'super1q2w3e4r5t6y7u8i9o0p'}];

    scenario('Rename a file', function(){
        given.async('Exist a file with name before_test')
        and.async('Not exist the file with name file_testing')
        when.async('I rename the file with name file_testing')
        then.async('I have the file file_testing')
    });

});
