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
		let operators = ['+', '-', '/', '*', '%']
		

		for (let operator of operators) {
			calculator.fillValues(first, second, operator)
			calculator.getResult()
			switch (operator) {
				case '+':
					calculator.checkResult(first + second, operator)
					break;
				case '-':
					calculator.checkResult(first - second, operator)
					break;
				case '/':
					calculator.checkResult(first / second, operator)
					break;
				case '*':
					calculator.checkResult(first * second, operator)
					break;
				case '%':
					calculator.checkResult(first % second, operator)
					break;

			}
		}


	})

	xit('Wait some time at the end', function () {
		browser.sleep(3000)
	})


some breaking changes


})
