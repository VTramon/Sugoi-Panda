import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import AnimeDetails from 'src/components/AmineDetails'
import EpisodeList from 'src/components/EpisodeList'
import VideoList from 'src/components/VideoList'
import api from 'src/services/api'
import styled from 'styled-components'
import LayoutHeader from './LayoutHeader'

const SingleContent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  width: 65vw;
`

const SingleAnime: React.FC = (props) => {
  const [single, setSingle] = useState({})
  const [promo, setPromo] = useState([])
  const [ep, setEp] = useState([])

  const router = useRouter()
  const { id } = router.query

  const getVideos = async () => {
    await api.get(`https://api.jikan.moe/v3/anime/${id}/videos`).then((res) => {
      setPromo(res.data['promo'])
      setEp(res.data['episodes'])
    })
  }

  const onLoad = async () => {
    await api.get(`https://api.jikan.moe/v3/anime/${id}`).then((res) => {
      setSingle(res.data)
    })
  }

  useEffect(() => {
    onLoad()
    getVideos()
  }, [])

  return (
    <>
      <LayoutHeader />
      <SingleContent>
        <div>
          <AnimeDetails anime={single}>{props.children}</AnimeDetails>
          {promo
            ? promo.map((promo, index) => {
                return <VideoList episodes={promo} key={index} />
              })
            : null}
          {ep
            ? ep.map((ep, index) => {
                return <EpisodeList episode={ep} key={index} />
              })
            : null}
        </div>
      </SingleContent>
    </>
  )
}

export default SingleAnime
