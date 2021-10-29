import { useRouter } from 'next/router'
import api from 'src/services/api'
import { useState } from 'react'
import SingleAnime from 'src/assets/SingleAnime'
import useSWR from 'swr'

interface AnimeProps {
  anime: {
    title?: string
    url?: string
    image?: string
    mal_id?: number
  }
}

const Anime: React.FC<AnimeProps> = () => {
  const [single, setSingle] = useState({})

  const router = useRouter()
  const { id } = router.query
  const fetcher = (url: string) =>
    api.get(url).then((res) => setSingle(res.data))

  const { error } = useSWR(`https://api.jikan.moe/v3/anime/${id}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!single) return <div>loading...</div>

  return <SingleAnime anime={single} />
}

export default Anime
