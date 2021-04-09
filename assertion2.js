import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Check assertion test', async t => {
    const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

    await t
           // .click(selectBasedOnText)
            .click('#remote-testing')
            .expect('#remote-testing'.checked).ok
           // .click('#reusing-js-code')
           //.expect('#reusing-js-code'.checked).ok
            // .pressKey('space');


});