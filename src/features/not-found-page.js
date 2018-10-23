import React from 'react';
import Typography from '@material-ui/core/Typography';
import { HeaderLayout, ScrollingContent } from 'shared/components';

export function NotFoundPage() {
    return (
        <HeaderLayout>
            <ScrollingContent>
                <Typography variant="h6">Page Not Found</Typography>
            </ScrollingContent>
        </HeaderLayout>
    );
}
