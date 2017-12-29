import React from 'react';
import Typography from 'material-ui/Typography';
import { Page, PageContent } from 'shared/components';

export function NotFoundPage() {
    return (
        <Page>
            <PageContent>
                <Typography type="title">Page Not Found</Typography>
            </PageContent>
        </Page>
    );
}
