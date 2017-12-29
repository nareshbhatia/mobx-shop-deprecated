import { newState } from 'mobx-state-router';

const checkForUserSignedIn = (fromState, toState, routerStore) => {
    const { rootStore: { authStore } } = routerStore;
    if (authStore.user) {
        return Promise.resolve({ fromState, toState });
    } else {
        authStore.setSignInRedirect(toState);
        return Promise.reject({
            fromState: fromState,
            toState: newState('signin')
        });
    }
};

export const routes = [
    {
        name: 'home',
        pattern: '/',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            return itemStore
                .loadFeaturedItems()
                .then(() => ({ fromState, toState }));
        }
    },
    {
        name: 'checkout',
        pattern: '/checkout',
        onBeforeEnter: checkForUserSignedIn
    },
    {
        name: 'departments',
        pattern: '/departments/:id',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            return itemStore
            .loadDepartmentItems(toState.params.id)
            .then(() => ({ fromState, toState }));
        }
    },
    {
        name: 'items',
        pattern: '/items/:id',
        onEnter: (fromState, toState, routerStore) => {
            const { rootStore: { itemStore } } = routerStore;
            return itemStore
                .selectItem(toState.params.id)
                .then(() => ({ fromState, toState }));
        }
    },
    { name: 'notFound', pattern: '/not-found' },
    {
        name: 'profile',
        pattern: '/profile',
        onBeforeEnter: checkForUserSignedIn
    },
    { name: 'shoppingCart', pattern: '/shopping-cart' },
    { name: 'signin', pattern: '/signin' }
];
