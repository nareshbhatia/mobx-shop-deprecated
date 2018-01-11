import React from 'react';
import { inject } from 'mobx-react';
import { ItemList, Page, ScrollingContent } from 'shared/components';
import { NavBar } from './navbar';

@inject('rootStore')
export class DepartmentsPage extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <Page>
                <NavBar rootStore={rootStore} />
                <ScrollingContent>
                    <ItemList rootStore={rootStore} />
                </ScrollingContent>
            </Page>
        );
    }
}
