import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';
import { action } from "@storybook/addon-actions";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
    return <Button {...args} />
}

export const Default = Template.bind({});
Default.args = {
    title: 'inc',
    disabled: false,
    onClick:action('clicked')
};

