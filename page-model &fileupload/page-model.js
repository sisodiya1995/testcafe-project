
import { Selector } from 'testcafe';

const label = Selector('label');

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class Page {
    constructor () {
        this.nameInput = Selector('#developer-name');
        this.featureList = [
            new Feature('Support for testing on remote devices'),
           new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Easy embedding into a Continuous integration system')
        ];

        this.interfaceSelect       = Selector('#preferred-interface');
        this.interfaceSelectOption = this.interfaceSelect.find('option');
        this.selectoption0 = this.interfaceSelectOption.nth(0);
        this.selectoption1 = this.interfaceSelectOption.nth(1);
        this.selectoption2 = this.interfaceSelectOption.nth(2);
        this.submitButton          = Selector('#submit-button');
    }
}

export default new Page();