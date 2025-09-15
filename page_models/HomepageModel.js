import { Selector } from 'testcafe';

class HomepageModel {
    constructor () {
        this.pageText = Selector('div.container > h3')
        }
}

export default new HomepageModel();
