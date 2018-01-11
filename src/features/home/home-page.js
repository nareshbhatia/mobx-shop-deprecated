import React from 'react';
import Typography from 'material-ui/Typography';
import { inject } from 'mobx-react';
import { ItemList, HeaderLayout, ScrollingContent } from 'shared/components';

const styles = {
    title: {
        padding: '8px 0 0 16px',
        fontWeight: 'normal'
    }
};

@inject('rootStore')
export class HomePage extends React.Component {
    render() {
        const { rootStore } = this.props;
        return (
            <HeaderLayout>
                <ScrollingContent>
                    <Typography type="title" style={styles.title}>
                        Featured Items
                    </Typography>
                    <ItemList rootStore={rootStore} />
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
