import { newState, RouterStore } from 'mobx-state-router';
import { CatalogAdapter } from 'shared/adapters';
import { AuthStore } from './auth.store';
import { CartStore } from './cart.store';
import { ItemStore } from './item.store';
import { routes } from './routes';

const notFound = newState('notFound');

export class RootStore {
    authStore = new AuthStore(this);
    cartStore = new CartStore(this);
    itemStore = new ItemStore(this);
    routerStore = new RouterStore(this, routes, notFound);

    // Adapters for use by all stores
    adapters = {
        catalogAdapter: new CatalogAdapter()
    };
}
