var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
	dest: 'target/screenshots',
	filename: 'my-report.html'
});

exports.config = {
	directConnect: true,

	capabiliteis: {
		browserName: 'chrome'
	},

	framework: 'jasmine',
	specs: ['./tests/calculator.spec.js'],

	jasmineNodeOpts: {
		defaultTimeoutInterval: 6000
	},

	// Setup the report before any tests start
	beforeLaunch: function () {
		return new Promise(function (resolve) {
			reporter.beforeLaunch(resolve);
		});
	},

	// Assign the test reporter to each running instance
	onPrepare: function () {
		jasmine.getEnv().addReporter(reporter);
	},

	// Close the report after all tests finish
	afterLaunch: function (exitCode) {
		return new Promise(function (resolve) {
			reporter.afterLaunch(resolve.bind(this, exitCode));
		});
	}
}