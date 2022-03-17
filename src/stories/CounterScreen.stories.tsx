import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CounterScreen } from "../components";

import '../index.css'
import '../App.css'

export default {
    title: 'UI/Screen',
    component: CounterScreen,
} as ComponentMeta<typeof CounterScreen>;

const Template: ComponentStory<typeof CounterScreen> = (args) => {
    return <CounterScreen {...args}/>;
}
export const Default = Template.bind({});
Default.args = {
    editMode:false,
    counterValue: 1,
    error: {
        min:'',
        max:''
    },
    maxValue:4
};
