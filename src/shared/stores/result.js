import { action, observable } from 'mobx';

/**
 * Result of an operation.
 * If code is not null, the result is assumed to be an error and shown in red.
 *
 * Examples:
 *     1. { code: null, message: 'Item saved successfully' }
 *     2. { code: 'PERMISSION_DENIED', message: 'Permission denied' }
 */
export class Result {
    @observable code = null;
    @observable message = null;

    /**
     * Set the result with an object literal
     * @param result - { code, message }
     */
    @action
    set(result) {
        this.code = result.code;
        this.message = result.message;
    }

    @action
    clear() {
        this.code = null;
        this.message = null;
    }
}
