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

	it('Check History table elements', function () {
		calculator.checkHistoryTable()
	})

	it('Check perfoming operations', async function () {
		let first = 3
		let second = 10
		calculator.fillValueInInput('first', first)
		calculator.fillValueInInput('second', second)
		calculator.getResult()
		calculator.checkResult(first + second)

	})

	// it('Wait some time at the end', function () {
	// 	browser.sleep(3000)
	// })





})