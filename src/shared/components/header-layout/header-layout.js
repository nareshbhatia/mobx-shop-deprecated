import React from 'react';
import PropTypes from 'prop-types';
import { FullHeightVerticalContainer } from '../basics/containers';
import { Header } from './header';

export class HeaderLayout extends React.Component {
    static propTypes = {
        NavButton: PropTypes.func
    };

    render() {
        const { children, NavButton } = this.props;

        return (
            <FullHeightVerticalContainer>
                <Header NavButton={NavButton} />
                {children}
            </FullHeightVerticalContainer>
        );
    }
}
