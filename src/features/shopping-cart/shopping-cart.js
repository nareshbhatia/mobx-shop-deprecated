import React from 'react';
import { inject } from 'mobx-react';
import { Cart, Page, PageContent } from 'shared/components';

@inject('rootStore')
export class ShoppingCart extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <Page>
                <PageContent>
                    <Cart rootStore={rootStore} />
                </PageContent>
            </Page>
        );
    }
}
