import React from 'react';
import { inject } from 'mobx-react';
import { Checkout, Page, PageContent } from 'shared/components';

@inject('rootStore')
export class CheckoutPage extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <Page>
                <PageContent>
                    <Checkout rootStore={rootStore} />
                </PageContent>
            </Page>
        );
    }
}
