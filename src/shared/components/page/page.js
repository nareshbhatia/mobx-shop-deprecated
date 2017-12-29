import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Header, HeaderNavButton } from 'shared/components';
import PropTypes from 'prop-types';

const styles = {
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }
};

class PageBase extends React.Component {
    static propTypes = {
        navButton: PropTypes.number.isRequired
    };

    static defaultProps = {
        navButton: HeaderNavButton.home
    };

    render() {
        const { classes, children, navButton } = this.props;

        return (
            <div className={classes.root}>
                <Header navButton={navButton} />
                {children}
            </div>
        );
    }
}

export const Page = withStyles(styles)(PageBase);
