import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { RouterState } from 'mobx-state-router';
import PropTypes from 'prop-types';

@inject('rootStore')
@observer
export class HeaderMenu extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    @observable anchorEl = undefined;
    @observable open = false;

    render() {
        const { rootStore: { authStore } } = this.props;
        const { user } = authStore;

        return (
            <div>
                <IconButton
                    color="contrast"
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

        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(new RouterState('profile'));
    };

    @action
    onSignIn = () => {
        this.open = false;

        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(new RouterState('signin'));
    };

    @action
    onSignOut = () => {
        this.open = false;

        const { rootStore: { authStore } } = this.props;
        authStore.signOut();
    };
}
