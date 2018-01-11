import React from 'react';
import Typography from 'material-ui/Typography';
import { Page, ScrollingContent } from 'shared/components';

export function NotFoundPage() {
    return (
        <Page>
            <ScrollingContent>
                <Typography type="title">Page Not Found</Typography>
            </ScrollingContent>
        </Page>
    );
}
