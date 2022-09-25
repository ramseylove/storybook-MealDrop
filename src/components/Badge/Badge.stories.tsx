import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
} as ComponentMeta<typeof Badge> // Generic that will automatically provide args

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({}) // cloning of the template

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
}
