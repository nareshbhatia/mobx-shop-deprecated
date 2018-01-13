import React from 'react';
import SearchIcon from 'material-ui-icons/Search';
import { fade } from 'material-ui/styles/colorManipulator';
import { withStyles } from 'material-ui/styles';
import { action, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { newState } from 'mobx-state-router';

const styles = theme => ({
    wrapper: {
        fontFamily: theme.typography.fontFamily,
        position: 'relative',
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        borderRadius: 2,
        background: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            background: fade(theme.palette.common.white, 0.25)
        },
        '& $input': {
            transition: theme.transitions.create('width'),
            width: 200,
            '&:focus': {
                width: 250
            }
        }
    },
    search: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        font: 'inherit',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
            theme.spacing.unit
        }px ${theme.spacing.unit * 9}px`,
        border: 0,
        display: 'block',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        background: 'none',
        margin: 0, // Reset for Safari
        color: 'inherit',
        width: '100%',
        '&:focus': {
            outline: 0
        }
    }
});

/**
 * Based on Material UI:
 * https://github.com/mui-org/material-ui/blob/v1-beta/docs/src/modules/components/AppSearch.js
 */
@inject('rootStore')
@observer
class SearchInputBase extends React.Component {
    @observable searchKey = '';

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.search}>
                    <SearchIcon />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className={classes.input}
                        value={this.searchKey}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }

    @action
    handleChange = event => {
        this.searchKey = event.target.value;
    };

    handleSubmit = event => {
        event.stopPropagation();
        event.preventDefault();

        const { rootStore: { routerStore } } = this.props;
        routerStore.goTo(newState('items', {}, { q: this.searchKey }));
    };
}

export const SearchInput = withStyles(styles)(SearchInputBase);
