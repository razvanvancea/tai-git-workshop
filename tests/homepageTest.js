import Homepage from '../page_models/HomepageModel';
import Header from '../page_models/HeaderModel';
import { ClientFunction, t } from 'testcafe';

const URL = 'https://zitec.com/';

const getUrlPath = ClientFunction(() => document.location.href);

fixture('Test Suite - Homepage - test in master').page(URL).beforeEach(async t => {
    await t.maximizeWindow().expect;
});

//ZTC-1234
test('qweqweqweewq -  mare conflict ----- Switch to us language test - modificam 14 si am terminat!!!', async t => {
    await t
        .click(Header.roLanguageBtn)
        .expect(Homepage.pageText.innerText).contains('Misiunea noastră este')
        .expect(getUrlPath()).contains('ro/');
});
