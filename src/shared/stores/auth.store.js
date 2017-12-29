import { action, observable } from 'mobx';
import { newState } from 'mobx-state-router';

export const defaultState = newState('home');
export const signin = newState('signin');

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
