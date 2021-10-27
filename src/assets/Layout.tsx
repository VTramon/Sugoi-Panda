import { useEffect, useState } from 'react'
import Header from 'src/components/Header'
import api from 'src/services/api'
import styled from 'styled-components'
import LayoutHeader from './LayoutHeader'
import Content from './SearchContent'
import TopRecommendations from './TopRecommendations'

const AnimeBox = styled.section`
  display: flex;
  flex-flow: row wrap;
  /* align-content: space-evenly;
  justify-content: space-evenly; */
  justify-content: center;
  align-items: center;
  align-content: stretch;
  width: 80vw;
  height: 550px;
  margin: 0 0 50px 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.dark.boxBackground};
`

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface LayoutProps {
  rank: number
  title?: string
  image_url?: string
}

const Layout: React.FC<LayoutProps> = () => {
  const [search, setSearch] = useState('')
  const [animes, setAnimes] = useState<LayoutProps[]>([])
  const [topAnimes, setTopAnimes] = useState<LayoutProps[]>([])
  const [topMangas, setTopMangas] = useState<LayoutProps[]>([])

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
        setTopMangas(response.data['top'])
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
    <StyledLayout>
      <LayoutHeader callbackSearch={setSearch} />
      {!!animes &&
        animes.map((anime, index) => {
          return <Content key={index} anime={anime} />
        })}
      <Header title="Top animes" />
      <AnimeBox>
        {!!topAnimes &&
          topAnimes.map((topAnimes, index) => {
            return <TopRecommendations anime={topAnimes} key={index} />
          })}
      </AnimeBox>

      <Header title="Top mangas" />
      <AnimeBox>
        {!!topMangas &&
          topMangas.map((topMangas, index) => {
            return <TopRecommendations anime={topMangas} key={index} />
          })}
      </AnimeBox>
    </StyledLayout>
  )
}

export default Layout
