class Calculator {

    constructor() {
        this.inputFirst = element(by.model('first'))
    }
    

    fillValueInFirstInput(value) {
        this.inputFirst.sendKeys(value);
        this.checkValueInFirsInput(value);
    }

    checkValueInFirsInput(value) {
        let expectResult = value.toString()
        expect(this.inputFirst.getAttribute('value')).toEqual(expectResult);

    }
}

module.exports = {
    Calculator:Calculator
}