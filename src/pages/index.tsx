import Header from 'src/assets/Header'
import theme from 'src/styles/themes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../globalStyle'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header children={'children'} Title={'header'} />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}
