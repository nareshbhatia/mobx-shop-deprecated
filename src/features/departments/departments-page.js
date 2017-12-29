import React from 'react';
import { inject } from 'mobx-react';
import { ItemList, Page, PageContent } from 'shared/components';
import { NavBar } from './navbar';

@inject('rootStore')
export class DepartmentsPage extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <Page>
                <NavBar rootStore={rootStore} />
                <PageContent>
                    <ItemList rootStore={rootStore} />
                </PageContent>
            </Page>
        );
    }
}
