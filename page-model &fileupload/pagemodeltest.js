import page from './page-model';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Text typing basics', async t => {
    await t
        .typeText(page.nameInput, 'Peter')
        .typeText(page.nameInput, 'Paker', { replace: true })
        .typeText(page.nameInput, 'r', { caretPos: 2 })
        .expect(page.nameInput.value).eql('Parker');
});

test('Click check boxes and then verify their state', async t => {
    for (const feature of page.featureList) {
        await t
            .click(feature.label)
            .expect(feature.checkbox.checked).ok();
    }
});


test('select dropdown list', async t => {

      await t
              .click(page.interfaceSelect)
             // .click(page.interfaceSelectOption)
              .click(page.selectoption0)
             // .click(page.interfaceSelectOption);
             .click(page.interfaceSelect)
             .click(page.selectoption0)
             .click(page.interfaceSelect)
             .click(page.selectoption1)
             .click(page.interfaceSelect)
             .click(page.selectoption2);


});

test('click submit button', async t => {

    await t
           .click(page.submitButton);

});