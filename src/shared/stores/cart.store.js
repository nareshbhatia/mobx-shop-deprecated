import { action, computed, observable } from 'mobx';

/**
 * OrderItem example:
 * {
 *     item: {...},
 *     qty: 2
 * }
 */
export class CartStore {
    rootStore;
    @observable orderItems = [];

    @computed
    get total() {
        return this.orderItems.reduce(
            (total, orderItem) => total + orderItem.item.price * orderItem.qty,
            0
        );
    }

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    addOrder(item, qty) {
        this.orderItems.push({ item, qty });
    }

    @action
    clearCart() {
        this.orderItems.clear();
    }
}
