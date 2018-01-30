import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { CenteredContainer } from './containers';

export function BusyIndicator() {
    return (
        <CenteredContainer>
            <CircularProgress />
        </CenteredContainer>
    );
}
