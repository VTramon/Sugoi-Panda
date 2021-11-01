import { useEffect, useState } from 'react'
import Header from 'src/components/TopContentHeader'
import api from 'src/services/api'
import styled from 'styled-components'
import TopContent from './TopContent'

const AnimeBox = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  width: 80vw;
  height: 550px;
  margin: 0 0 50px 0;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
  background-color: ${(props) => props.theme.dark.boxBackground};
`

interface LayoutContentProps {
  rank: number
  title?: string
  image_url?: string
}

const LayoutContent: React.FC<LayoutContentProps> = () => {
  const [topAnimes, setTopAnimes] = useState<LayoutContentProps[]>([])
  const [topMangas, setTopMangas] = useState<LayoutContentProps[]>([])

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
    getInitialTopAnimes()
    getInitialTopMangas()
  }, [])

  return (
    <>
      <Header title="Top animes" />
      <AnimeBox>
        {!!topAnimes &&
          topAnimes.map((topAnimes, index) => {
            return <TopContent anime={topAnimes} key={index} />
          })}
      </AnimeBox>

      <Header title="Top mangas" />
      <AnimeBox>
        {!!topMangas &&
          topMangas.map((topMangas, index) => {
            return <TopContent anime={topMangas} key={index} />
          })}
      </AnimeBox>
    </>
  )
}

export default LayoutContent
