import React from 'react';
import Typography from 'material-ui/Typography';
import { HeaderLayout, ScrollingContent } from 'shared/components';

export function NotFoundPage() {
    return (
        <HeaderLayout>
            <ScrollingContent>
                <Typography type="title">Page Not Found</Typography>
            </ScrollingContent>
        </HeaderLayout>
    );
}
