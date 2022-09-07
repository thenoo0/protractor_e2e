class Calculator {

    constructor() {
        this.pageTitle = element(by.css('h3'))
        this.inputFirst = element(by.model('first'))
        this.inputSecond = element(by.model('second'))
        this.goButton = element(by.cssContainingText('button', 'Go!'))
        this.result = $('h2.ng-binding')
        this.operatorInput = element(by.model('operator'))
        this.historyTableTitle = element(by.css('h4'))
        this.historyColumnNames = element.all(by.css('table th'))
        this.firstTableRow = element.all(by.css('table tbody tr')).first()
        this.lastOperationTime = element.all(by.css('table tbody tr td')).get(0)
        this.lastOperationExpression = element.all(by.css('table tbody tr td')).get(1)
        this.lastOperationResult = element.all(by.css('table tbody tr td')).get(2)
        this.operator = element(by.model('operator'))
    }


    fillValues(firstValue, secondValue, operator) {

        this.inputFirst.sendKeys(firstValue);
        this.inputSecond.sendKeys(secondValue);

        expect(this.inputFirst.getAttribute('value')).toEqual(firstValue.toString());
        expect(this.inputSecond.getAttribute('value')).toEqual(secondValue.toString());

        element(by.cssContainingText('option', operator)).click()

    }

    checkPageTitle() {
        expect(this.pageTitle.getText()).toEqual('Super Calculator')
    }

    async checkHistoryTable() {
        const expectedColumnName = ['Time', 'Expression', 'Result']
        expect(this.historyTableTitle.getText()).toEqual('History')
        expect(this.historyColumnNames.count()).toEqual(3)
        this.historyColumnNames.getText().then(function ($columns) {
            console.log('\n')
            for (let i = 0; i < $columns.length; i++) {
                console.log('checking ' + $columns[i])
                expect($columns[i]).toEqual(expectedColumnName[i])
            }
        })
    }

    getResult() {
        this.goButton.click()
    }

    checkResult(number) {
        expect(this.result.getText()).toEqual(number.toString())
        expect(this.firstTableRow.isDisplayed()).toBe(true)
        expect(this.lastOperationExpression.isDisplayed()).toBe(true)
        expect(this.lastOperationTime.isDisplayed()).toBe(true)
        expect(this.lastOperationResult.isDisplayed()).toBe(true)
        expect(this.lastOperationResult.getText()).toEqual(number.toString())
    }


}

module.exports = {
    Calculator: Calculator
}