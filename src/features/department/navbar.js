import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { observer } from 'mobx-react';
import { RouterState } from 'mobx-state-router';
import PropTypes from 'prop-types';

const styles = {
    root: {
        flex: '0 0 54px'
    }
};

@observer
class NavBarBase extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired
    };

    render() {
        const {
            classes,
            rootStore: { routerStore }
        } = this.props;
        const {
            routerState: { params }
        } = routerStore;

        return (
            <div className={classes.root}>
                <Tabs
                    value={this.tab2Value(params.id)}
                    onChange={this.onTabChange}
                >
                    <Tab label="Electronics" />
                    <Tab label="Music" />
                </Tabs>
            </div>
        );
    }

    onTabChange = (event, value) => {
        const {
            rootStore: { routerStore }
        } = this.props;
        const tab = this.value2Tab(value);
        routerStore.goTo(new RouterState('department', { id: tab }));
    };

    tab2Value(tab) {
        const map = {
            electronics: 0,
            music: 1
        };
        return map[tab];
    }

    value2Tab(value) {
        const tabs = ['electronics', 'music'];
        return tabs[value];
    }
}

export const NavBar = withStyles(styles)(NavBarBase);
