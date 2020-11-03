import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import Cell from './Cell';

export default {
    title: 'One cell',
    component: Cell,
    argTypes: {
        num: { control: 'number' },
    },
};

const Template: Story<ComponentProps<typeof Cell>> = (args) => (
    <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
            <tr>
                <Cell {...args} />
            </tr>
        </tbody>
    </table>
);

export const Basic = Template.bind({});
Basic.args = {
    num: 1,
};
