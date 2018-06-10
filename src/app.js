import React, { Component } from 'react';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { observer, Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { RootStore } from 'shared/stores';
import { history } from 'shared/utils';
import { Shell } from './shell';

// Create the rootStore
const rootStore = new RootStore();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

@observer
class App extends Component {
    render() {
        const { paletteType } = rootStore.appStore;
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
            type: paletteType,
            // Initialize background to white (default is #fafafa)
            // This allows pictures with white background to blend in.
            background: {
                default: paletteType === 'light' ? '#ffffff' : '#303030'
            }
        };
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
