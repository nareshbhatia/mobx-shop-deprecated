import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import Apps from 'material-ui-icons/Apps';
import { inject } from 'mobx-react';
import { newState } from 'mobx-state-router';
import PropTypes from 'prop-types';
import { history } from 'shared/utils';
import { HeaderMenu } from './header-menu';

export const HeaderNavButton = {
    home: 0,
    back: 1
};

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    navButton: {
        marginLeft: -12
    },
    title: {
        flex: 1,
        fontSize: 18
    }
};

@inject('rootStore')
class HeaderBase extends React.Component {
    static propTypes = {
        navButton: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        navButton: HeaderNavButton.home,
        title: 'MobX Shop'
    };

    render() {
        const { rootStore, navButton, title, classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    {navButton === HeaderNavButton.home ? (
                        <IconButton
                            className={classes.navButton}
                            color="contrast"
                            onClick={this.handleHomeClicked}
                            aria-label="Home"
                        >
                            <Apps />
                        </IconButton>
                    ) : (
                        <IconButton
                            className={classes.navButton}
                            color="contrast"
                            onClick={history.goBack}
                            aria-label="Back"
                        >
                            <ArrowBack />
                        </IconButton>
                    )}

                    <Typography
                        type="title"
                        color="inherit"
                        className={classes.title}
                    >
                        {title}
                    </Typography>

                    <Button
                        color="contrast"
                        onClick={this.handleDepartmentsClicked}
                    >
                        Departments
                    </Button>
                    <IconButton
                        color="contrast"
                        onClick={this.handleCartClicked}
                    >
                        <ShoppingCart />
                    </IconButton>
                    <HeaderMenu rootStore={rootStore} />
                </Toolbar>
            </AppBar>
        );
    }

    handleHomeClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('home'));
    };

    handleDepartmentsClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('departments', { id: 'electronics' }));
    };

    handleCartClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('shoppingCart'));
    };
}

export const Header = withStyles(styles)(HeaderBase);
