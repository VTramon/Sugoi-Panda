import { useEffect, useState } from 'react'
import Content, { ContentProps } from 'src/assets/SearchContent'
import Header from 'src/assets/Header'
import api from 'src/services/api'
import theme from 'src/styles/themes'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../globalStyle'

interface HomeProps extends ContentProps {
  title?: string
  image_url?: string
}

const Home: React.FC<HomeProps> = () => {
  const [search, setSearch] = useState('')
  const [animes, setAnimes] = useState<HomeProps[]>([])

  const handleGetSearch = async () => {
    await api.get(`search/anime?q=${search}&limit=20`).then((response) => {
      if (response.status === 200) {
        setAnimes(response.data['results'])
      }
    })
  }
  const getInitialTopAnimes = async () => {
    await api.get(`top/anime/1`).then((response) => {
      if (response.status === 200) {
        console.log(response.data['top'])
      }
    })
  }

  useEffect(() => {
    if (search.length === 0) return
    handleGetSearch()
  }, [search])

  useEffect(() => {
    getInitialTopAnimes()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header callbackSearch={setSearch} />
      {!!animes &&
        animes.map((anime) => {
          return <Content anime={anime} />
        })}
    </ThemeProvider>
  )
}

export default Home
