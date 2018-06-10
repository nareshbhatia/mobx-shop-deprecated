import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    root: {
        width: 120
    },
    photo: {
        display: 'block',
        width: '100%',
        height: 'auto'
    }
};

function ItemPhotoBase({ classes, photo }) {
    return (
        <div className={classes.root}>
            <img className={classes.photo} src={photo} />
        </div>
    );
}

ItemPhotoBase.propTypes = {
    photo: PropTypes.string.isRequired
};

export const ItemPhoto = withStyles(styles)(ItemPhotoBase);
