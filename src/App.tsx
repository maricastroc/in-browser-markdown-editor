import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import {
  SettingsContext,
  SettingsContextProvider,
} from './contexts/SettingsContext'
import { Home } from './pages/Home'
import { ActionsContextProvider } from './contexts/ActionsContext'
import { lightTheme } from './styles/themes/light'

export function App() {
  return (
    <SettingsContextProvider>
      <InnerApp />
    </SettingsContextProvider>
  )
}

function InnerApp() {
  const { darkTheme } = useContext(SettingsContext)

  return (
    <ThemeProvider theme={darkTheme ? defaultTheme : lightTheme}>
      <ActionsContextProvider>
        <Home />
      </ActionsContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
