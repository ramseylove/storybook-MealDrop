import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import {rootReducer, store} from '../src/app-state'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { configureStore } from '@reduxjs/toolkit'

initialize();

const withRouter: DecoratorFn = (StoryFn) => {
  return <BrowserRouter><StoryFn /></BrowserRouter>
}

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme ==='dark' ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

const withStore: DecoratorFn = (StoryFn, {parameters}) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  })
  return <StoreProvider store={store}><StoryFn /></StoreProvider>
}

// export all decorators that should be globally applied in an array
export const globalDecorators = [withTheme,withRouter, mswDecorator,withStore]