import { Selector } from 'testcafe';

class HeaderModel {
    constructor () {
        this.roLanguageBtn = Selector('li.ro');
        }
}

export default new HeaderModel();
