import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
