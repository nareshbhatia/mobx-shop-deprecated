import { RouterState } from 'mobx-state-router';

const checkForUserSignedIn = (fromState, toState, routerStore) => {
    const { rootStore: { authStore } } = routerStore;
    if (authStore.user) {
        return Promise.resolve();
    } else {
        authStore.setSignInRedirect(toState);
        return Promise.reject(new RouterState('signin'));
    }
};

// Routes are matched from top to bottom. Make sure they are sequenced
// in the order of priority. It is generally best to sort them by pattern,
// prioritizing specific patterns over generic patterns (patterns with
// one or more parameters). For example:
//     /items
//     /items/:id
export const routes = [
    {
        name: 'home',
        pattern: '/',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            itemStore.loadFeaturedItems();
            return Promise.resolve();
        }
    },
    {
        name: 'checkout',
        pattern: '/checkout',
        beforeEnter: checkForUserSignedIn
    },
    {
        name: 'department',
        pattern: '/departments/:id',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            itemStore.loadDepartmentItems(toState.params.id);
            return Promise.resolve();
        }
    },
    {
        name: 'items',
        pattern: '/items',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            itemStore.loadMatchingItems(toState.queryParams.q);
            return Promise.resolve();
        }
    },
    {
        name: 'item',
        pattern: '/items/:id',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            itemStore.selectItem(toState.params.id);
            return Promise.resolve();
        }
    },
    { name: 'notFound', pattern: '/not-found' },
    {
        name: 'profile',
        pattern: '/profile',
        beforeEnter: checkForUserSignedIn
    },
    { name: 'shoppingCart', pattern: '/shopping-cart' },
    { name: 'signin', pattern: '/signin' }
];
