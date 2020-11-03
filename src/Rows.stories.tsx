import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import Rows from './Rows';

export default {
    title: 'Rows',
    component: Rows,
    argTypes: {
        rows: { control: 'number' },
        cells: { control: 'number' },
    },
};

const Template: Story<ComponentProps<typeof Rows>> = (args) => (
    <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
            <Rows {...args} />
        </tbody>
    </table>
);

export const Basic = Template.bind({});
Basic.args = {
    rows: 3,
    cells: 3,
};
