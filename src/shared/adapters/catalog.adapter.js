import { items } from './items';

export class CatalogAdapter {
    getFeaturedItems() {
        return Promise.resolve(items.filter(item => item.isFeatured));
    }

    getDepartmentItems(department) {
        return Promise.resolve(
            items.filter(item => item.department === department)
        );
    }

    getItem(id) {
        return Promise.resolve(items.find(item => item.id === id));
    }
}
