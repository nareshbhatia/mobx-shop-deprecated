import { RouterState, RouterStore } from 'mobx-state-router';
import { CatalogAdapter } from 'shared/adapters';
import { AppStore } from './app.store';
import { AuthStore } from './auth.store';
import { CartStore } from './cart.store';
import { ItemStore } from './item.store';
import { routes } from './routes';

const notFound = new RouterState('notFound');

export class RootStore {
    appStore = new AppStore(this);
    authStore = new AuthStore(this);
    cartStore = new CartStore(this);
    itemStore = new ItemStore(this);
    routerStore = new RouterStore(this, routes, notFound);

    // Adapters for use by all stores
    adapters = {
        catalogAdapter: new CatalogAdapter()
    };
}
