const { hasUncaughtExceptionCaptureCallback } = require("process");

describe('To jest test w protractor jasmine', function () {
	it('Tutaj cos testuje', async function () {
		//browser.waitForAngularEnabled(false)
		//browser.get('http://www.myportal.abb.com');
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		var inputFirst = element(by.model('first'))
		inputFirst.sendKeys(2);
		expect(inputFirst.getAttribute('value')).toEqual('2')
		browser.sleep(3000);
	})
})