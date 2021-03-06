var baseConfig = require('./karma.conf.js');

module.exports = function (config) {
    // Load base config
    baseConfig(config);

    // Override base config
    config.set({
        singleRun: true,
        colors:    false,
        autoWatch: false,
        reporters: ['progress', 'junit', 'coverage'],
        preprocessors:    {
            '../WebContent/js/*.js':   ['coverage']
        },
        browsers:  ['PhantomJS'],
        junitReporter: {
            outputFile: '../reports/junit/tests-xunit.xml'
        },
        coverageReporter: {
            type:   'lcov',
            dir:    'reports',
            subdir: 'coverage'
        }
    });
};