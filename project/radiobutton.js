import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('select radio buttons', async t => {
    await t
        .click('#windows')
        .click('#macos')
        .click('#linux')
        .wait(3000);
});