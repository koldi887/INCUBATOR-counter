import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OptionInput } from "../components";

import '../index.css'
import '../App.css'

export default {
    title: 'UI/Input',
    component: OptionInput,
    argTypes: {}
} as ComponentMeta<typeof OptionInput>;

const Template: ComponentStory<typeof OptionInput> = (args) => {
    const [value, setValue] = useState(0)

    return <OptionInput
        value={value}
        onChange={(e) => setValue(+e.target.value)}
        {...args}/>
}
export const Default = Template.bind({});
Default.args = {
    title: 'Set max value',
    type: 'number',
};