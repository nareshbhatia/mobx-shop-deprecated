import React from 'react';
import { withStyles } from 'material-ui/styles';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
// import DevTools from 'mobx-react-devtools';
import {
    CheckoutPage,
    DepartmentsPage,
    HomePage,
    ItemPage,
    NotFoundPage,
    ProfilePage,
    ShoppingCart,
    SigninPage
} from 'features';

const styles = theme => ({
    '@global': {
        html: {
            height: '100%',
            boxSizing: 'border-box'
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit'
        },
        body: {
            height: '100%',
            margin: 0,
            background: '#fff',
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            color: theme.palette.text.primary,

            // Helps fonts on OSX look more consistent with other systems
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',

            // Use momentum-based scrolling on iOS devices
            WebkitOverflowScrolling: 'touch'
        },
        '#root': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }
    },
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    }
});

const viewMap = {
    checkout: <CheckoutPage />,
    departments: <DepartmentsPage />,
    home: <HomePage />,
    items: <ItemPage />,
    notFound: <NotFoundPage />,
    profile: <ProfilePage />,
    shoppingCart: <ShoppingCart />,
    signin: <SigninPage />
};

@inject('rootStore')
class ShellBase extends React.Component {
    render() {
        const { classes, rootStore: { routerStore } } = this.props;

        return (
            <div className={classes.root}>
                <RouterView routerStore={routerStore} viewMap={viewMap} />
                {/* <DevTools position={{top: 46, left: 25}} /> */}
            </div>
        );
    }
}

export const Shell = withStyles(styles)(ShellBase);
