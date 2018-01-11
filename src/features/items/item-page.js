import React from 'react';
import { withStyles } from 'material-ui/styles';
import { inject, observer } from 'mobx-react';
import {
    BackButton,
    ItemInfo,
    ItemOrder,
    ItemPhoto,
    Page,
    ScrollingContent
} from 'shared/components';

const styles = theme => ({
    item: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing.unit * 2
    }
});

@inject('rootStore')
@observer
class ItemPageBase extends React.Component {
    render() {
        const { classes, rootStore } = this.props;
        const { selectedItem: item } = rootStore.itemStore;

        if (!item) {
            return <ScrollingContent>Item not found</ScrollingContent>;
        }

        return (
            <Page NavButton={BackButton}>
                <ScrollingContent>
                    <div className={classes.item}>
                        <ItemPhoto photo={item.photo} />
                        <ItemInfo item={item} />
                        <ItemOrder rootStore={rootStore} item={item} />
                    </div>
                </ScrollingContent>
            </Page>
        );
    }
}

export const ItemPage = withStyles(styles)(ItemPageBase);
