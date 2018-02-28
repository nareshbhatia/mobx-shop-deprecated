import { action, observable } from 'mobx';

export class AppStore {
    rootStore;
    @observable paletteType = 'light';

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    toggleTheme = () => {
        this.paletteType = this.paletteType === 'light' ? 'dark' : 'light';
    };
}
