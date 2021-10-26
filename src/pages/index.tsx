import { useEffect, useState } from 'react'
import Content, { ContentProps } from 'src/assets/SearchContent'
import Header from 'src/assets/Header'
import api from 'src/services/api'
import theme from 'src/styles/themes'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../globalStyle'
import TopAnimes from 'src/assets/TopAnimes'

const AnimeBox = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 500px;
  overflow: hidden;
  background-color: ${(props) => props.theme.dark.boxBackground};
`
interface HomeProps extends ContentProps {
  rank: number
  title?: string
  image_url?: string
}

const Home: React.FC<HomeProps> = () => {
  const [search, setSearch] = useState('')
  const [animes, setAnimes] = useState<HomeProps[]>([])
  const [topAnimes, setTopAnimes] = useState<HomeProps[]>([])
  const [topMangas, setTopMangas] = useState<HomeProps[]>([])

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
        setTopAnimes(response.data['top'])
      }
    })
  }

  const getInitialTopMangas = async () => {
    await api.get(`top/manga/1`).then((response) => {
      if (response.status === 200) {
        // setTopMangas(response.data['top'])
      }
    })
  }

  useEffect(() => {
    if (search.length === 0) return
    handleGetSearch()
  }, [search])

  useEffect(() => {
    getInitialTopAnimes()
    getInitialTopMangas()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header callbackSearch={setSearch} />
      {!!animes &&
        animes.map((anime, index) => {
          return <Content anime={anime} key={index} />
        })}
      <AnimeBox>
        {!!topAnimes &&
          topAnimes.map((topAnimes, index) => {
            return <TopAnimes anime={topAnimes} key={index} />
          })}
      </AnimeBox>

      {!!topMangas &&
        topMangas.map((topMangas) => {
          return <Content anime={topMangas} />
        })}
    </ThemeProvider>
  )
}

export default Home
