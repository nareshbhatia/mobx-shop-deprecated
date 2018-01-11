import React from 'react';
import { inject } from 'mobx-react';
import { Checkout, Page, ScrollingContent } from 'shared/components';

@inject('rootStore')
export class CheckoutPage extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <Page>
                <ScrollingContent>
                    <Checkout rootStore={rootStore} />
                </ScrollingContent>
            </Page>
        );
    }
}
