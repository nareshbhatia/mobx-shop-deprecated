import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Header } from './header';

const styles = {
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
};

class HeaderLayoutBase extends React.Component {
    static propTypes = {
        NavButton: PropTypes.func
    };

    render() {
        const { classes, children, NavButton } = this.props;

        return (
            <div className={classes.root}>
                <Header NavButton={NavButton} />
                {children}
            </div>
        );
    }
}

export const HeaderLayout = withStyles(styles)(HeaderLayoutBase);
