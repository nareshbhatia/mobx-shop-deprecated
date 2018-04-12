import React from 'react';
import AppBar from 'material-ui/AppBar';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import { RouterState } from 'mobx-state-router';
import PropTypes from 'prop-types';
import { HeaderMenu } from './header-menu';
import { CartButton, DepartmentsButton, HomeButton } from './nav-buttons';
import { SearchInput } from './search-input';

const styles = {
    title: {
        flex: 1,
        fontSize: 18
    }
};

class HeaderBase extends React.Component {
    static propTypes = {
        NavButton: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    static defaultProps = {
        NavButton: HomeButton,
        title: 'MobX Shop'
    };

    render() {
        const { classes, NavButton, title } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <NavButton />

                    <Typography
                        variant="title"
                        color="inherit"
                        className={classes.title}
                    >
                        {title}
                    </Typography>

                    <SearchInput />
                    <DepartmentsButton />
                    <CartButton />
                    <HeaderMenu />
                </Toolbar>
            </AppBar>
        );
    }

    handleCartClicked = () => {
        const {
            rootStore: { routerStore }
        } = this.props;
        routerStore.goTo(new RouterState('shoppingCart'));
    };
}

export const Header = withStyles(styles)(HeaderBase);
