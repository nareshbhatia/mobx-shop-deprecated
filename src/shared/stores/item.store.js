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
    @observable isLoading = true;
    @observable items = [];
    @observable selectedItem = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    setItems(items) {
        this.items = items;
        this.isLoading = false;
    }

    @action
    clearItems() {
        this.items = [];
        this.isLoading = true;
    }

    @action
    setSelectedItem(item) {
        this.selectedItem = item;
        this.isLoading = false;
    }

    @action
    clearSelectedItem() {
        this.selectedItem = null;
        this.isLoading = true;
    }

    selectItem = itemId => {
        this.clearSelectedItem();
        this.rootStore.adapters.catalogAdapter.getItem(this, itemId);
    };

    loadMatchingItems = searchKey => {
        this.clearItems();
        this.rootStore.adapters.catalogAdapter.getItems(this, searchKey);
    };

    loadFeaturedItems = () => {
        this.clearItems();
        this.rootStore.adapters.catalogAdapter.getFeaturedItems(this);
    };

    loadDepartmentItems = department => {
        this.clearItems();
        this.rootStore.adapters.catalogAdapter.getDepartmentItems(
            this,
            department
        );
    };
}
