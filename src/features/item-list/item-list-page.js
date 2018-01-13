import React from 'react';
import { inject } from 'mobx-react';
import { ItemList, HeaderLayout, ScrollingContent } from 'shared/components';

@inject('rootStore')
export class ItemListPage extends React.Component {
    render() {
        const { rootStore } = this.props;
        return (
            <HeaderLayout>
                <ScrollingContent>
                    <ItemList rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
