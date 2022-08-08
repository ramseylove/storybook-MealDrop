
import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme } from '../src/styles/theme'

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme]