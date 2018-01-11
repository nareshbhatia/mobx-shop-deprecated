import React from 'react';
import { inject } from 'mobx-react';
import { Cart, Page, ScrollingContent } from 'shared/components';

@inject('rootStore')
export class ShoppingCart extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <Page>
                <ScrollingContent>
                    <Cart rootStore={rootStore} />
                </ScrollingContent>
            </Page>
        );
    }
}
