import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AnimeDetails from 'src/components/AmineDetails'
import EpisodeList from 'src/components/EpisodeList'
import RecomendationsBox from 'src/components/RecommendatioBox'
import VideoList from 'src/components/VideoList'
import api from 'src/services/api'
import styled from 'styled-components'
import { StyledLayout } from './Layout'
import LayoutHeader from './LayoutHeader'

const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 50vw;
  margin-right: 25px;
  border: 1px solid ${(props) => props.theme.dark.listLine};
`

const SingleContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  min-height: 100vh;
  width: 100vw;
  margin-top: 50px;
`

const SingleAnime: React.FC = (props) => {
  const [single, setSingle] = useState({})

  const router = useRouter()
  const { id } = router.query

  const onLoad = async () => {
    await api.get(`https://api.jikan.moe/v3/anime/${id}`).then((res) => {
      setSingle(res.data)
    })
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <StyledLayout>
      <LayoutHeader />
      <SingleContent>
        <BoxDetails>
          <AnimeDetails anime={single}>{props.children}</AnimeDetails>
          <EpisodeList />
          <VideoList />
        </BoxDetails>
        <RecomendationsBox />
      </SingleContent>
    </StyledLayout>
  )
}

export default SingleAnime
