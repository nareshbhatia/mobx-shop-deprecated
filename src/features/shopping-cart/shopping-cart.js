import React from 'react';
import { inject } from 'mobx-react';
import { Cart, HeaderLayout, ScrollingContent } from 'shared/components';

@inject('rootStore')
export class ShoppingCart extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <HeaderLayout>
                <ScrollingContent>
                    <Cart rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
