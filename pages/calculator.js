class Calculator {

    constructor() {
        this.inputFirst = element(by.model('first'))
        this.inputSecond = element(by.model('second'))
    }
    

    fillValueInInput(inputName, value) {
        let input = element(by.model(inputName))
        input.sendKeys(value);
        this.checkValueInInput(input, value)
    }

    checkValueInInput(input, value) {
        let expectResult = value.toString()
        expect(input.getAttribute('value')).toEqual(expectResult);
    }
}

module.exports = {
    Calculator:Calculator
}