import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { RouterState } from 'mobx-state-router';
import PropTypes from 'prop-types';

const styles = theme => ({
    themeLabel: {
        flex: 1
    },
    themeIcon: {
        marginLeft: theme.spacing.unit * 2
    }
});

@inject('rootStore')
@observer
class HeaderMenuBase extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    @observable anchorEl = undefined;
    @observable open = false;

    render() {
        const {
            classes,
            rootStore: { authStore }
        } = this.props;
        const { user } = authStore;

        return (
            <div>
                <IconButton
                    color="inherit"
                    onClick={this.onMenuAnchorClick}
                    aria-owns="menu"
                    aria-haspopup="true"
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="menu"
                    anchorEl={this.anchorEl}
                    open={this.open}
                    onClose={this.onClose}
                >
                    {user ? (
                        <MenuItem onClick={this.onProfileClick}>
                            {user.email}
                        </MenuItem>
                    ) : (
                        <MenuItem onClick={this.onSignIn}>Sign In</MenuItem>
                    )}

                    {user ? (
                        <MenuItem onClick={this.onSignOut}>Sign Out</MenuItem>
                    ) : null}

                    <MenuItem onClick={this.onToggleTheme}>
                        <span className={classes.themeLabel}>Toggle Theme</span>
                        <LightbulbOutline className={classes.themeIcon} />
                    </MenuItem>
                </Menu>
            </div>
        );
    }

    @action
    onMenuAnchorClick = event => {
        this.anchorEl = event.currentTarget;
        this.open = true;
    };

    @action
    onClose = () => {
        this.open = false;
    };

    @action
    onProfileClick = () => {
        this.open = false;

        const {
            rootStore: { routerStore }
        } = this.props;
        routerStore.goTo(new RouterState('profile'));
    };

    @action
    onToggleTheme = () => {
        this.open = false;

        const {
            rootStore: { appStore }
        } = this.props;
        appStore.toggleTheme();
    };

    @action
    onSignIn = () => {
        this.open = false;

        const {
            rootStore: { routerStore }
        } = this.props;
        routerStore.goTo(new RouterState('signin'));
    };

    @action
    onSignOut = () => {
        this.open = false;

        const {
            rootStore: { authStore }
        } = this.props;
        authStore.signOut();
    };
}

export const HeaderMenu = withStyles(styles)(HeaderMenuBase);
