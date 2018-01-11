import React from 'react';
import { inject } from 'mobx-react';
import { Checkout, HeaderLayout, ScrollingContent } from 'shared/components';

@inject('rootStore')
export class CheckoutPage extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <HeaderLayout>
                <ScrollingContent>
                    <Checkout rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
