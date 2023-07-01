import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { PreviewBar } from './components/PreviewBar'
import { FileEditor } from './components/FileEditor'
import { MarkdownContextProvider } from './contexts/MarkdownContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MarkdownContextProvider>
        <Header />
        <PreviewBar />
        <FileEditor />
      </MarkdownContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
