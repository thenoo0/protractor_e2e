exports.config = {
	directConnect: true,

	capabiliteis: {
		browserName: 'chrome'
	},

	framework: 'jasmine',
	specs: ['./tests/calculator.spec.js'],

	jasmineNodeOpts: {
		defaultTimeoutInterval: 6000
	}
}