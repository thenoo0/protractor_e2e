const { Calculator } = require("../pages/calculator");

describe('Testing calculator page', function () {

	const calculator = new Calculator()

	beforeAll(function () {
		//browser.waitForAngularEnabled(false)
		//browser.get('http://www.myportal.abb.com');

		browser.get('https://juliemr.github.io/protractor-demo/');
	})


	it('Fill first input', async function () {
		calculator.fillValueInInput('first', 3)
	})

	it('Fill second input', function () {
		calculator.fillValueInInput('second', 10)
		browser.sleep(3000);
	})

})