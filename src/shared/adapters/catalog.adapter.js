import { items } from './items';

export class CatalogAdapter {
    getItem(id) {
        return Promise.resolve(items.find(item => item.id === id));
    }

    getItems(searchKey) {
        return Promise.resolve(
            items.filter(item => this.matches(item, searchKey))
        );
    }

    getFeaturedItems() {
        return Promise.resolve(items.filter(item => item.isFeatured));
    }

    getDepartmentItems(department) {
        return Promise.resolve(
            items.filter(item => item.department === department)
        );
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
