import React from 'react';
import { observer } from 'mobx-react';
import { newState } from 'mobx-state-router';
import PropTypes from 'prop-types';
import { Item } from './item';

@observer
export class ItemList extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    render() {
        const { rootStore: { itemStore } } = this.props;

        return (
            <div>
                {itemStore.items.map(item => (
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
        routerStore.goTo(newState('items', { id: itemId }));
    };
}
