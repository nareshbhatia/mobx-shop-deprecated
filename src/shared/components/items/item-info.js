import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { CurrencyUtils } from 'shared/utils';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 4,
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    name: {
        fontSize: 18,
        color: theme.palette.primary[500]
    },
    price: {
        marginTop: theme.spacing.unit * 2
    }
});

function ItemInfoBase({ classes, item }) {
    return (
        <div className={classes.root}>
            <div className={classes.name}>{item.name}</div>
            <div>by {item.manufacturer}</div>
            <div className={classes.price}>
                {CurrencyUtils.toString(item.price, 'USD')}
            </div>
        </div>
    );
}

ItemInfoBase.propTypes = {
    item: PropTypes.object.isRequired
};

export const ItemInfo = withStyles(styles)(ItemInfoBase);
