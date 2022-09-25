// src/templates/PageTemplate.stories.tsx
import * as React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>

// Just to make the story a bit more understandable for the users
const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + Footer
    </DummyComponent>
  ),
}

export const Sticky = Template.bind({})
Sticky.args = {
  type: 'sticky-header',
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + Footer
    </DummyComponent>
  ),
}

export const Basic = Template.bind({})
Default.args = {
  type: 'basic',
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + Footer
    </DummyComponent>
  ),
}
