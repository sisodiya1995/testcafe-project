import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Select Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe')
        .selectText('#developer-name')
        .pressKey('delete');
});