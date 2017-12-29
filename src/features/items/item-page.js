import React from 'react';
import { withStyles } from 'material-ui/styles';
import { inject, observer } from 'mobx-react';
import {
    HeaderNavButton,
    ItemInfo,
    ItemOrder,
    ItemPhoto,
    Page,
    PageContent
} from 'shared/components';

const styles = theme => ({
    content: {
        flex: 1,
        overflow: 'auto',
        padding: theme.spacing.unit
    },
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
            return <div className={classes.content}>Item not found</div>;
        }

        return (
            <Page navButton={HeaderNavButton.back}>
                <PageContent>
                    <div className={classes.item}>
                        <ItemPhoto photo={item.photo} />
                        <ItemInfo item={item} />
                        <ItemOrder rootStore={rootStore} item={item} />
                    </div>
                </PageContent>
            </Page>
        );
    }
}

export const ItemPage = withStyles(styles)(ItemPageBase);
