import { action, observable } from 'mobx';
import { RouterState } from 'mobx-state-router';

const defaultState = new RouterState('home');
const signin = new RouterState('signin');

export class AuthStore {
    rootStore;
    @observable user = null; // example: { email: 'jdoe@gmail.com' }

    // Where should we redirect after sign in
    @observable signInRedirect = defaultState;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    setUser(user) {
        this.user = user;
        this.rootStore.routerStore.goTo(this.signInRedirect);
    }

    @action
    clearUser() {
        this.user = null;
    }

    @action
    setSignInRedirect(routerState) {
        this.signInRedirect = routerState;
    }

    resetSignInRedirect() {
        this.setSignInRedirect(defaultState);
    }

    signOut() {
        this.clearUser();
        this.rootStore.routerStore.goTo(signin);
    }
}
