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
    }


    fillValueInInput(inputName, value) {
        let input = element(by.model(inputName))
        input.sendKeys(value);

        let expectResult = value.toString()
        expect(input.getAttribute('value')).toEqual(expectResult);

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


}

module.exports = {
    Calculator: Calculator
}