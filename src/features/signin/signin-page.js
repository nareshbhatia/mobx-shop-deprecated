import React from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { RouterLink } from 'mobx-state-router';
import { HeaderLayout, ScrollingContent } from 'shared/components';

const styles = theme => ({
    root: {
        width: 320,
        margin: 'auto'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonBar: {
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 4
    },
    footer: {
        padding: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    link: {
        margin: theme.spacing.unit
    }
});

@inject('rootStore')
@observer
class SigninPageBase extends React.Component {
    @observable
    credentials = {
        email: '',
        password: ''
    };

    render() {
        const { classes } = this.props;
        return (
            <HeaderLayout>
                <ScrollingContent>
                    <div className={classes.root}>
                        <form
                            onSubmit={this.handleSubmit}
                            className={classes.form}
                        >
                            <TextField
                                value={this.credentials.email}
                                name="email"
                                label="Email"
                                margin="normal"
                                fullWidth
                                onChange={this.handleEmailChange}
                            />
                            <TextField
                                value={this.credentials.password}
                                name="password"
                                label="Password"
                                type="password"
                                margin="normal"
                                helperText="Password is ignored"
                                fullWidth
                                onChange={this.handlePasswordChange}
                            />
                            <div className={classes.buttonBar}>
                                <Button
                                    variant="raised"
                                    color="primary"
                                    type="submit"
                                >
                                    Sign In
                                </Button>
                            </div>
                        </form>
                    </div>
                </ScrollingContent>
                <div className={classes.footer}>
                    <RouterLink className={classes.link} routeName="home">
                        Home
                    </RouterLink>
                    <RouterLink
                        className={classes.link}
                        routeName="shoppingCart"
                    >
                        Cart
                    </RouterLink>
                </div>
            </HeaderLayout>
        );
    }

    @action
    handleEmailChange = event => {
        this.credentials.email = event.target.value;
    };

    @action
    handlePasswordChange = event => {
        this.credentials.password = event.target.value;
    };

    @action
    handleSubmit = event => {
        const {
            rootStore: { authStore }
        } = this.props;

        event.stopPropagation();
        event.preventDefault();

        const { email } = this.credentials;
        if (email.length > 0) {
            authStore.setUser({ email });
        }
    };
}

export const SigninPage = withStyles(styles)(SigninPageBase);
