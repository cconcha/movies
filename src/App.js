import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Routes from './routes'
import { global as GlobalStyle, theme } from './styles'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Routes />
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default App
