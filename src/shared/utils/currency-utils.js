export class CurrencyUtils {
    /**
     * Returns a display string for the specified amount in the given currency.
     * @param amount
     * @param currency, e.g. 'USD'
     * @returns {string}
     */
    static toString(amount, currency) {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: currency
        });
    }
}
