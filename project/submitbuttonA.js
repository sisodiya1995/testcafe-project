import { Selector } from 'testcafe';

fixture `Example page`
    .page `http://devexpress.github.io/testcafe/example/`;

test('My test', async t => {
    const submitButtonExists = Selector('#submit-button').exists;

    await t.expect(submitButtonExists).ok();
});
