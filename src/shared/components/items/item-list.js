import React from 'react';
import { observer } from 'mobx-react';
import { RouterState } from 'mobx-state-router';
import PropTypes from 'prop-types';
import { BusyIndicator } from 'shared/components';
import { Item } from './item';

@observer
export class ItemList extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    render() {
        const { rootStore: { itemStore } } = this.props;
        const { isLoading, items } = itemStore;

        if (isLoading) {
            return <BusyIndicator />;
        }

        return (
            <div>
                {items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        itemClicked={this.handleItemClicked}
                    />
                ))}
            </div>
        );
    }

    handleItemClicked = itemId => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(new RouterState('item', { id: itemId }));
    };
}
