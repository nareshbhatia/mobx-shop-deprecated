import { items } from './items';

// Simulate HTTP requests with a delay
const DELAY = 200;

export class CatalogAdapter {
    getItem(itemStore, id) {
        setTimeout(() => {
            const result = items.find(item => item.id === id);
            itemStore.setSelectedItem(result);
        }, DELAY);
    }

    getItems(itemStore, searchKey) {
        setTimeout(() => {
            const result = items.filter(item => this.matches(item, searchKey));
            itemStore.setItems(result);
        }, DELAY);
    }

    getFeaturedItems(itemStore) {
        setTimeout(() => {
            const result = items.filter(item => item.isFeatured);
            itemStore.setItems(result);
        }, DELAY);
    }

    getDepartmentItems(itemStore, department) {
        setTimeout(() => {
            const result = items.filter(item => item.department === department);
            itemStore.setItems(result);
        }, DELAY);
    }

    /**
     * Does the item match the specified search key?
     * @param item
     * @param searchKey
     * @returns {boolean}
     */
    matches(item, searchKey) {
        if (!searchKey) {
            return true;
        }

        const key = searchKey.toLowerCase();
        const name = item.name.toLowerCase();
        const manufacturer = item.manufacturer.toLowerCase();

        return name.includes(key) || manufacturer.includes(key);
    }
}
