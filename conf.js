exports.config = {
	directConnect: true,

	capabiliteis: {
		browserName: 'chrome'	
	},

	framework: 'jasmine',
	specs: ['test.spec.js'],

	jasmineNodeOpts: {
		defaultTimeoutInterval:6000
	}
}