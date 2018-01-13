import React from 'react';
import { inject } from 'mobx-react';
import { ItemList, HeaderLayout, ScrollingContent } from 'shared/components';
import { NavBar } from './navbar';

@inject('rootStore')
export class DepartmentPage extends React.Component {
    render() {
        const { rootStore } = this.props;

        return (
            <HeaderLayout>
                <NavBar rootStore={rootStore} />
                <ScrollingContent>
                    <ItemList rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
