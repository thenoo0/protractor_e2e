exports.config = {
	directConnect: true,

	capabiliteis: {
		browserName: 'chrome'
	},

	framework: 'jasmine',
	specs: ['./tests/calculator.spec.js'],

	jasmineNodeOpts: {
		defaultTimeoutInterval: 15000
	},

	onPrepare: function () {
		var jasmineReporters = require('jasmine-reporters');
		jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
			consolidateAll: true,
			savePath: './',
			filePrefix: 'xmlresults'
		}));

		var fs = require('fs-extra');

		fs.emptyDir('screenshots/', function (err) {
			console.log(err);
		});

		jasmine.getEnv().addReporter({
			specDone: function (result) {
				if (result.status == 'failed') {
					browser.getCapabilities().then(function (caps) {
						var browserName = caps.get('browserName');

						browser.takeScreenshot().then(function (png) {
							var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
							stream.write(new Buffer(png, 'base64'));
							stream.end();
						});
					});
				}
			}
		});
	},

	//HTMLReport called once tests are finished
	onComplete: function () {
		var browserName, browserVersion;
		var capsPromise = browser.getCapabilities();

		capsPromise.then(function (caps) {
			browserName = caps.get('browserName');
			browserVersion = caps.get('version');
			platform = caps.get('platform');

			var HTMLReport = require('protractor-html-reporter-2');

			testConfig = {
				reportTitle: 'Protractor Test Execution Report',
				outputPath: './',
				outputFilename: 'ProtractorTestReport',
				screenshotPath: './screenshots',
				testBrowser: browserName,
				browserVersion: browserVersion,
				modifiedSuiteName: false,
				screenshotsOnlyOnFailure: true,
				testPlatform: platform
			};
			new HTMLReport().from('xmlresults.xml', testConfig);
		});
	}

}