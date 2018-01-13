import { action, observable } from 'mobx';

/**
 * Item example:
 * {
 *     id: 1,
 *     department: 'electronics',
 *     manufacturer: 'Apple',
 *     name: 'Apple MacBook Pro',
 *     price: 699,
 *     photo: 'https://images.mobxshop.com/imac.jpg',
 *     isFeatured: true
 * }
 */
export class ItemStore {
    rootStore;
    @observable items = [];
    @observable selectedItem = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    setItems(items) {
        this.items = items;
    }

    @action
    setSelectedItem(item) {
        this.selectedItem = item;
    }

    selectItem = itemId => {
        return this.rootStore.adapters.catalogAdapter
            .getItem(itemId)
            .then(item => {
                this.setSelectedItem(item);
                return true;
            });
    };

    loadMatchingItems = searchKey => {
        return this.rootStore.adapters.catalogAdapter
            .getItems(searchKey)
            .then(items => {
                this.setItems(items);
                return true;
            });
    };

    loadFeaturedItems = () => {
        return this.rootStore.adapters.catalogAdapter
            .getFeaturedItems()
            .then(items => {
                this.setItems(items);
                return true;
            });
    };

    loadDepartmentItems = department => {
        return this.rootStore.adapters.catalogAdapter
            .getDepartmentItems(department)
            .then(items => {
                this.setItems(items);
                return true;
            });
    };
}
