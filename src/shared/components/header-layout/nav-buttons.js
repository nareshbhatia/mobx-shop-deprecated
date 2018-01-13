import React from 'react';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { withStyles } from 'material-ui/styles';
import ArrowBack from 'material-ui-icons/ArrowBack';
import Apps from 'material-ui-icons/Apps';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import { inject } from 'mobx-react';
import { newState } from 'mobx-state-router';
import { history } from 'shared/utils';

const styles = {
    root: {
        marginLeft: -12
    }
};

/**
 * HomeButton: Navigates to home page
 */
@inject('rootStore')
class HomeButtonBase extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <IconButton
                className={classes.root}
                color="contrast"
                onClick={this.handleHomeClicked}
                aria-label="Home"
            >
                <Apps />
            </IconButton>
        );
    }

    handleHomeClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('home'));
    };
}

export const HomeButton = withStyles(styles)(HomeButtonBase);

/**
 * BackButton: Goes back
 */
class BackButtonBase extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <IconButton
                className={classes.root}
                color="contrast"
                onClick={history.goBack}
                aria-label="Back"
            >
                <ArrowBack />
            </IconButton>
        );
    }
}

export const BackButton = withStyles(styles)(BackButtonBase);

/**
 * DepartmentsButton: Navigates to Electronics department
 */
@inject('rootStore')
export class DepartmentsButton extends React.Component {
    render() {
        return (
            <Button color="contrast" onClick={this.handleDepartmentsClicked}>
                Departments
            </Button>
        );
    }

    handleDepartmentsClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('department', { id: 'electronics' }));
    };
}

/**
 * CartButton: Navigates to the shopping cart
 */
@inject('rootStore')
export class CartButton extends React.Component {
    render() {
        return (
            <IconButton color="contrast" onClick={this.handleCartClicked}>
                <ShoppingCart />
            </IconButton>
        );
    }

    handleCartClicked = () => {
        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('shoppingCart'));
    };
}
