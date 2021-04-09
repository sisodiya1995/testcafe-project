import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

    const selectinterface = Selector('#preferred-interface');
    const selectjavascriptapi= selectinterface.find('option');

test('drop down list-1', async t => {
    await t
        .click(selectinterface)
        .click( selectjavascriptapi.withText('Command Line'))
        .expect(selectinterface.value).eql('Command Line');
        
});


test('drop down list-2', async t => {
    await t
        .click(selectinterface)
        .click( selectjavascriptapi.withText('JavaScript API'))
        .expect( selectinterface.value).eql('JavaScript API');
});
