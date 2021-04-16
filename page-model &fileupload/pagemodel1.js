import {t, Selector } from 'testcafe';

class Page {
    constructor () {
        this.nameInput               = Selector('input').withAttribute('data-testid', 'name-input');
        this.importantFeaturesLabels = Selector('legend').withExactText('Which features are important to you:').parent().child('p').child('label');
        this.operatingsystemlabels = Selector('legend').withExactText('What is your primary Operating System:').parent().child('p').child('label');
        this.testcafelabels = Selector('legend').withExactText('Which TestCafe interface do you use:').parent().child('select').child('option');
        this.submitButton            = Selector('button').withAttribute('data-testid', 'submit-button');
    }

    async selectFeature(number) {
        await t.click(this.importantFeaturesLabels.nth(number));
    }

    async selectoperatingsystem(number) {
        await t.click(this.operatingsystemlabels.nth(number));
    }

     async create(name) {
        const dropdown = await Selector("#preferred-interface");
        const dropdownOption = dropdown.find("option");
      
        await t
        .click(dropdown)
        .click(dropdownOption.withText(name))
    
          
      }



    async clickSubmit() {
        await t.click(this.submitButton);
    }

    async typeName(name) {
        await t.typeText(this.nameInput, name);
    }
}

export default new Page();