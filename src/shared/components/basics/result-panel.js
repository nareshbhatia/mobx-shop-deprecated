import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { withStyles } from 'material-ui/styles';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

const styles = theme => ({
    success: {
        fontWeight: theme.typography.fontWeightMedium
    },
    error: {
        color: theme.palette.error[500],
        fontWeight: theme.typography.fontWeightMedium
    },
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4
    }
});

@observer
class ResultPanelBase extends React.Component {
    static propTypes = {
        result: PropTypes.object.isRequired
    };

    render() {
        const { classes, result } = this.props;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={result.message && result.message.length > 0}
                autoHideDuration={10000}
                onClose={this.handleClose}
                message={
                    <span
                        className={
                            result.code ? classes.error : classes.success
                        }
                    >
                        {result.message}
                    </span>
                }
            />
        );
    }

    handleClose = () => {
        const { result } = this.props;
        result.clear();
    };
}

export const ResultPanel = withStyles(styles)(ResultPanelBase);
