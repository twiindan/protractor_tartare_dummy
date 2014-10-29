/**
 * Created by eyeos on 6/30/14.
 */
// An example configuration file.
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 20000,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: {
        'browserName': 'chrome'
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;

    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    framework: 'mocha',

    suites: {
      login: 'tests/login/*.js'
    },

    //specs: ['tests/files/filesDesktopApp_tests.js'],
    //specs: ['tests/files/files_tests.js'],
    //specs: ['tests/login/login_tests.js'],
    //specs: ['login_with_mocha.js'],

    // Options to be passed to mocha-node.
    mochaOpts: {
        //reporter: 'spec',
        reporter: ('tartare/gherkin'),
        slow: 3000,
        enableTimeouts: false
    }
};


