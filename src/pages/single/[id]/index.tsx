import { useRouter } from 'next/router'
import api from 'src/services/api'
import { useEffect, useState } from 'react'
import SingleAnime from 'src/assets/SingleAnime'
import { GetServerSideProps } from 'next'
import VideoList from 'src/components/VideoList'
import EpisodeList from 'src/components/EpisodeList'

interface AnimeProps {
  title?: string
  url?: string
  image?: string
  mal_id?: number
}

const Anime: React.FC<AnimeProps> = () => {
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
      <SingleAnime anime={single} />
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
    </>
  )
}

export default Anime

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  return {
    props: { query },
  }
}
