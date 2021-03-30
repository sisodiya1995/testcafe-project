import { Role, Selector } from 'testcafe';

const registeredUser = Role('https://www.facebook.com/', async t => {
    await t
        .typeText('#email', '9721118048')
        .typeText('#pass', '609030')
        .click('._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy');
});

fixture `My Fixture`
    .page `https://www.facebook.com/`;

test('My Test', async t => {
    await t
        .useRole(registeredUser)
        .wait(4000)
        //.expect(Selector('._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy').visible).ok()
        .useRole(Role.anonymous())
        .wait(3000);



});