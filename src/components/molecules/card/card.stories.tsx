import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Card} from './card';

export default {
  title: 'Molecules/Button',
  component: Card,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
