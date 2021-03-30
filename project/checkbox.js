import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Click test', async t => {
    const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

    await t
        .click(selectBasedOnText)
        .click('#remote-testing')
        .click('#reusing-js-code')
        .click('#background-parallel-testing')
        .click('#continuous-integration-embedding')
        .click('#traffic-markup-analysis');









});