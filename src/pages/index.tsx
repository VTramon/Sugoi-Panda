import { useEffect, useState } from 'react'
import Content, { ContentProps } from 'src/assets/content'
import Header, { HeaderProps } from 'src/assets/Header'
import api from 'src/services/api'
import theme from 'src/styles/themes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../globalStyle'

interface HomeProps extends HeaderProps, ContentProps {
  title?: string
  image_url?: string
}

const Home: React.FC<HomeProps> = (props) => {
  const [search, setSearch] = useState('')
  const [animes, setAnimes] = useState<HomeProps[]>([])

  const handleGetBooks = async () => {
    await api.get(`${search}&limit=20`).then((response) => {
      if (response.status === 200) {
        setAnimes(response.data['results'])
        console.log(animes)
      }
    })
  }

  useEffect(() => {
    if (search.length === 0) return
    handleGetBooks()
    console.log(animes)
  }, [search])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header callbackSearch={setSearch} />
      {!!animes &&
        animes.map((anime) => {
          return <Content anime={anime} key={props.title} />
        })}
    </ThemeProvider>
  )
}

export default Home
