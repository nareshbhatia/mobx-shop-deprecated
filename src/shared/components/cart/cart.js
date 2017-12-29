import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { observer } from 'mobx-react';
import { newState } from 'mobx-state-router';
import PropTypes from 'prop-types';
import { ItemInfo, ItemPhoto } from 'shared/components';
import { CurrencyUtils } from 'shared/utils';

const styles = theme => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: `1px solid ${theme.palette.text.divider}`,
        padding: theme.spacing.unit * 2
    },
    col: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        textAlign: 'right'
    },
    price: {
        minWidth: 70
    },
    qty: {
        minWidth: 16
    },
    total: {
        minWidth: 75
    },
    checkout: {
        marginTop: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    orderTotal: {
        fontSize: 18,
        marginBottom: theme.spacing.unit * 2
    }
});

@observer
class CartBase extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    render() {
        const { classes, rootStore: { cartStore } } = this.props;
        const { orderItems, total: orderTotal } = cartStore;

        if (orderItems.length === 0) {
            return (
                <Typography type="title">
                    Your shopping cart is empty
                </Typography>
            );
        }

        return (
            <div>
                {orderItems.map(orderItem => {
                    const { item, qty } = orderItem;
                    const { id, price, photo } = item;
                    const total = price * qty;
                    return (
                        <div key={id} className={classes.item}>
                            <ItemPhoto photo={photo} />
                            <ItemInfo item={item} />
                            <span className={`${classes.col} ${classes.price}`}>
                                {CurrencyUtils.toString(price, 'USD')}
                            </span>
                            <span className={classes.col}>x</span>
                            <span className={`${classes.col} ${classes.qty}`}>
                                {qty}
                            </span>
                            <span className={classes.col}>=</span>
                            <span className={`${classes.col} ${classes.total}`}>
                                {CurrencyUtils.toString(total, 'USD')}
                            </span>
                        </div>
                    );
                })}
                <div className={classes.checkout}>
                    <div className={classes.orderTotal}>
                        Total: {CurrencyUtils.toString(orderTotal, 'USD')}
                    </div>
                    <Button raised color="primary" onClick={this.handleCheckoutClicked}>
                        Proceed to checkout
                    </Button>
                </div>
            </div>
        );
    }

    handleCheckoutClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('checkout'));
    }
}

export const Cart = withStyles(styles)(CartBase);
