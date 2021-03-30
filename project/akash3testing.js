

fixture `My fixture`
    .page `file:///C:/Users/AKASH/Desktop/Practice/akash3.html`
    test('show all input value', async t => {
         await t
                .typeText('#mytext', 'akash')
                .wait(1000)
                .typeText('#Ltext' ,'singh')
                .wait(1000)
                .typeText('#number','9532059973')
                .wait(1000)
                .click('#show-value')
                .wait(3000)
                .selectText('#mytext')
                .pressKey('delete')
                .typeText('#mytext','vikas')
                .click('#show-value')
                .wait(3000);
    });

    
    test('take a screenshot', async t => {
        await t
               .takeScreenshot()
    });
