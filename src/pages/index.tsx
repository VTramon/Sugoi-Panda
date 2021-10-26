import Layout from 'src/assets/Layout'
import theme from 'src/styles/themes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../globalStyle'

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout rank={0} />
    </ThemeProvider>
  )
}

export default Home
