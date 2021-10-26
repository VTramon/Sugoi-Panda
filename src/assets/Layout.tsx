import { useEffect, useState } from 'react'
import api from 'src/services/api'
import styled from 'styled-components'
import Header from './Header'
import Content from './SearchContent'
import TopRecommendations from './TopRecommendations'

const AnimeBox = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 500px;
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
      <Header callbackSearch={setSearch} />
      {!!animes &&
        animes.map((anime, index) => {
          return <Content key={index} anime={anime} />
        })}
      <AnimeBox>
        {!!topAnimes &&
          topAnimes.map((topAnimes, index) => {
            return <TopRecommendations anime={topAnimes} key={index} />
          })}
      </AnimeBox>

      <AnimeBox>
        {!!topMangas &&
          topMangas.map((topMangas) => {
            return <TopRecommendations anime={topMangas} />
          })}
      </AnimeBox>
    </StyledLayout>
  )
}

export default Layout
