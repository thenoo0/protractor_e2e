const { Calculator } = require("../pages/calculator");

describe('To jest test w protractor jasmine', function () {

	const calculator = new Calculator()

	it('Tutaj cos testuje', async function () {
		//browser.waitForAngularEnabled(false)
		//browser.get('http://www.myportal.abb.com');
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		calculator.fillValueInFirstInput(3)
		browser.sleep(3000);
	})
})