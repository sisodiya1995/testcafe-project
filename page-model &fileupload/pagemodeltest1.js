import page from './pagemodel1';

fixture `Use a Page Model`
    .page `https://devexpress.github.io/testcafe/example`;


test('Use a Page Model', async () => {

    await page.selectFeature(0);
    await page.selectFeature(1);
    await page.selectFeature(2);
    await page.selectFeature(3);
    await page.selectoperatingsystem(0);
    await page.selectoperatingsystem(1);
    await page.selectoperatingsystem(2);
    await page.create('Command Line');
    await page.create('JavaScript API');
    await page.create('Both');
    await page.typeName('Peter');
    await page.clickSubmit();

});