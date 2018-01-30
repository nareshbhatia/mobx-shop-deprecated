import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    fullHeightVerticalContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    centeredContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: theme.spacing.unit
    },
    scrollingContent: {
        flex: 1,
        overflow: 'auto',
        padding: theme.spacing.unit
    }
});

/**
 * FullHeightVerticalContainer - parent should be flex-direction: column
 */
function FullHeightVerticalContainerBase({ classes, children }) {
    return (
        <div className={classes.fullHeightVerticalContainer}>{children}</div>
    );
}

export const FullHeightVerticalContainer = withStyles(styles)(
    FullHeightVerticalContainerBase
);

/**
 * CenteredContainer - parent should be flex-direction: column
 */
function CenteredContainerBase({ classes, children }) {
    return <div className={classes.centeredContainer}>{children}</div>;
}

export const CenteredContainer = withStyles(styles)(CenteredContainerBase);

/**
 * ScrollingContent
 */
function ScrollingContentBase({ classes, children }) {
    return <div className={classes.scrollingContent}>{children}</div>;
}

export const ScrollingContent = withStyles(styles)(ScrollingContentBase);
