import React from 'react';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { ItemInfo } from './item-info';
import { ItemPhoto } from './item-photo';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: theme.spacing.unit * 2,
        cursor: 'pointer'
    }
});

@observer
class ItemBase extends React.Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        itemClicked: PropTypes.func.isRequired
    };

    render() {
        const { classes, item } = this.props;

        return (
            <div
                key={item.id}
                className={classes.root}
                onClick={this.handleClick}
            >
                <ItemPhoto photo={item.photo} />
                <ItemInfo item={item} />
            </div>
        );
    }

    handleClick = () => {
        const { item, itemClicked } = this.props;
        itemClicked(item.id);
    };
}

export const Item = withStyles(styles)(ItemBase);
