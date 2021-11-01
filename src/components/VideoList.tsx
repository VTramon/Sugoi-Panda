import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import api from 'src/services/api'
import styled from 'styled-components'
import DetailsHeader from './DetailsHeader'

const VideoBox = styled.table`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 0;
  border: 1px solid ${(props) => props.theme.dark.listLine};
  border-top: none;
  tr {
    display: flex;
    justify-content: flex-start;
    padding: 2px 10px;
  }
  tr {
    border: 1px solid ${(props) => props.theme.dark.listLine};
  }
`

const DIV = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
`

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.dark.text};
  cursor: pointer;
  padding: 5px;
`

const VideoList: React.FC = () => {
  const [video, setVideo] = useState([])

  const router = useRouter()
  const { id } = router.query

  const getVideos = async () => {
    await api.get(`https://api.jikan.moe/v3/anime/${id}/videos`).then((res) => {
      setVideo(res.data['promo'])
    })
  }

  useEffect(() => {
    getVideos()
  }, [])
  return (
    <>
      <VideoBox>
        <th>
          <DetailsHeader title={'lista de videos promocionais'} />
        </th>
        <DIV>
          {video.length !== 0 ? (
            video.map((promo, index) => {
              return (
                <A href={promo['video_url']}>
                  <tr>
                    <h4 key={`${index}+title`}>{promo['title']}</h4>
                  </tr>
                </A>
              )
            })
          ) : (
            <h4>não possui videos promocionais disponiveis</h4>
          )}
        </DIV>
      </VideoBox>
    </>
  )
}

export default VideoList
