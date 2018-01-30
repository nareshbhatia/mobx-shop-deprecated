import React, { Component } from 'react';
import blue from 'material-ui/colors/blue';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { RootStore } from 'shared/stores';
import { history } from 'shared/utils';
import { Shell } from './shell';

const palette = {
    primary: {
        main: blue[500]
    },
    secondary: {
        main: pink.A400
    },
    error: {
        main: red.A400
    },
    // Initialize background to white (default is #fafafa)
    // This allows pictures with white background blend in.
    background: {
        default: '#ffffff'
    }
};

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

class App extends Component {
    render() {
        const theme = createMuiTheme({ palette });

        return (
            <MuiThemeProvider theme={theme}>
                <Provider rootStore={rootStore}>
                    <Shell />
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
