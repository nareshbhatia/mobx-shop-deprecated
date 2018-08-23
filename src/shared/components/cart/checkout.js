import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { ResultPanel } from 'shared/components';
import { Result } from 'shared/stores';
import { CurrencyUtils } from 'shared/utils';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 2
    },
    orderTotal: {
        fontSize: 18,
        marginBottom: theme.spacing.unit * 2
    }
});

@observer
class CheckoutBase extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    @observable
    result = new Result();

    render() {
        const {
            classes,
            rootStore: { cartStore }
        } = this.props;
        const { total: orderTotal } = cartStore;

        return (
            <div className={classes.root}>
                <div className={classes.orderTotal}>
                    Order Total: {CurrencyUtils.toString(orderTotal, 'USD')}
                </div>

                <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handlePlaceOrder}
                >
                    Place Order
                </Button>

                <ResultPanel result={this.result} />
            </div>
        );
    }

    handlePlaceOrder = () => {
        const {
            rootStore: { cartStore }
        } = this.props;
        cartStore.clearCart();
        this.result.set({
            code: null,
            message:
                'Order placed. We’ll send a confirmation when your items ship.'
        });
    };
}

export const Checkout = withStyles(styles)(CheckoutBase);
