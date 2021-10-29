import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../globalStyle'
import Theme from '../styles/themes'

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
