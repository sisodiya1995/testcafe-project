import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`
    .beforeEach(async t => {
                     await t
                              .maximizeWindow()
                              .setTestSpeed(0.1)
                             .setPageLoadTimeout(0);

    });



test('Type Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe');
});


test('Type Text test', async t => {
    await t
        .typeText('#developer-name', 'akash singh');
});