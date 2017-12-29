import React from 'react';
import Typography from 'material-ui/Typography';
import { inject } from 'mobx-react';
import { Page, PageContent } from 'shared/components';

@inject('rootStore')
export class ProfilePage extends React.Component {
    render() {
        const { rootStore: { authStore } } = this.props;
        const { user: { email } } = authStore;

        return (
            <Page>
                <PageContent>
                    <Typography type="headline">{email}</Typography>
                </PageContent>
            </Page>
        );
    }
}
