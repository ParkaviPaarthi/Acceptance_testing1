process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const afterScenario = require('./hooks/after-scenario');
// const { TARGET_SERVICE } = process.env;
// const saucelabsConf = require('./wdio.conf.saucelabs');

exports.config = {
  // mocks: {},
//  gateway: {
//    LYDS: 'https://gatewaydata02.psd2.sandbox.extranet.group/cma-phase-2-test-mock/lbg/lyds',
//    HFX: 'https://gatewaydata02.psd2.sandbox.extranet.group/cma-phase-2-test-mock/lbg/hfx',
//    BOS: 'https://gatewaydata02.psd2.sandbox.extranet.group/cma-phase-2-test-mock/lbg/bos'
//  },
//
//  urls: {
//    LYDS: 'https://gatewaydata02.psd2.sandbox.extranet.group/cma-phase-2-test-mock/lbg/lyds/open-banking/v1.1',
//    HFX: 'https://gatewaydata02.psd2.sandbox.extranet.group/cma-phase-2-test-mock/lbg/hfx/open-banking/v1.1',
//    BOS: 'https://gatewaydata02.psd2.sandbox.extranet.group/cma-phase-2-test-mock/lbg/bos/open-banking/v1.1'
//  },
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    './Feature/weather.feature'
    // './features/commercial-e2e/commercial-e2e.feature'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    //
    browserName: 'chrome',
    chromeOptions: {
      // args: ['headless'
      args: ['--start-maximized', '--start-fullscreen'
      // '--disable-web-security','--disable-web-security',--test-type', 'show-fps-counter=true', '--web-security=no spec.js', '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'
      ]

    }
  }],
  // //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'verbose',
  logOutput: 'logs',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Warns when a deprecated command is used
  deprecationWarnings: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: `${__dirname}/screenshots`,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: null,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 40000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 50000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as properties. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // plugins: {
  //     webdrivercss: {
  //         screenshotRoot: 'my-shots',
  //         failedComparisonsRoot: 'diffs',
  //         misMatchTolerance: 0.05,
  //         screenWidth: [320,480,640,1024]
  //     },
  //     webdriverrtc: {},
  //     browserevent: {}
  // },
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['selenium-standalone'],

  seleniumArgs: {
    version: '3.8.1'
  },

  seleniumInstallArgs: {
    baseURL: 'http://nexus.sandbox.extranet.group/nexus/content/repositories/binaries/selenium',
    version: '3.8.1',
    drivers: {
      chrome: {
        baseURL: 'http://nexus.sandbox.extranet.group/nexus/content/repositories/binaries/chromedriver',
        version: '2.40'
      },
      firefox: {
        baseURL: 'http://nexus.sandbox.extranet.group/nexus/content/repositories/binaries/geckodriver',
        version: '0.20.1'
      }
    }
  },

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'cucumber',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/reporters/dot.html
  reporters: ['dot', 'spec', 'json-cucumber', 'mochawesome'],
  reporterOptions: {
    // json: {
    outputDir: `./reports/`
    // }
  },
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: [`${__dirname}/Feature/step-definitions/*.js`], // <string[]> (file/dir) require files before executing features
    backtrace: false, // <boolean> show full backtrace for errors
    compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    dryRun: false, // <boolean> invoke formatters without executing steps
    failFast: true, // <boolean> abort the run on first failure
    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    colors: true, // <boolean> disable colors in formatter output
    snippets: false, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: false, // <boolean> fail if there are any undefined or pending steps
    tags: [], // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    timeout: 100000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
  }
};
