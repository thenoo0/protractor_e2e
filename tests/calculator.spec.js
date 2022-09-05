const { Calculator } = require("../pages/calculator");

describe('Testing calculator page', function () {

	const calculator = new Calculator()

	beforeAll(function () {
		//browser.waitForAngularEnabled(false)
		//browser.get('http://www.myportal.abb.com');

		browser.get('https://juliemr.github.io/protractor-demo/');
	})


	it('Check page title', function () {
		calculator.checkPageTitle()
	})

	it('Check perfoming operations', async function () {
		calculator.fillValueInInput('first', 3)
		calculator.fillValueInInput('second', 10)
	})

	it('Check History table elements', function () {
		calculator.checkHistoryTable()
	})

	// it('Wait some time at the end', function () {
	// 	browser.sleep(3000)
	// })





})