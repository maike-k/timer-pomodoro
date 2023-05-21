import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button color="success" />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
    </ThemeProvider>
  )
}
