import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import api from 'src/services/api'
import styled from 'styled-components'
import DetailsHeader from './DetailsHeader'

const EpBox = styled.table`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 0;
  border: 1px solid ${(props) => props.theme.dark.listLine};
  border-top: none;
  tr {
    display: flex;
    justify-content: space-around;
    padding: 2px 10px;
  }
  tr {
    border: 1px solid ${(props) => props.theme.dark.listLine};
  }
`
const Td4 = styled.td`
  width: 70%;
`

const Td5 = styled.td`
  width: 30%;
`

const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.dark.text};
  padding: 5px;
  cursor: pointer;
  width: 100%;
`

const H5 = styled.h5`
  text-decoration: none;
  color: ${(props) => props.theme.dark.text};
  width: 100%;
`
const H4 = styled.h4`
  text-decoration: none;
  color: ${(props) => props.theme.dark.text};
  width: 100%;
`

const DIV = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 10px;
`

const EpisodeList: React.FC = () => {
  const [ep, setEp] = useState([])

  const router = useRouter()
  const { id } = router.query

  const getVideos = async () => {
    await api.get(`https://api.jikan.moe/v3/anime/${id}/videos`).then((res) => {
      setEp(res.data['episodes'])
    })
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
      <EpBox>
        <th>
          <DetailsHeader title={'Lista de Episodios'} />
        </th>
        <DIV>
          {ep.length !== 0 ? (
            ep.map((ep, index) => {
              return (
                <A key={`${index}+link`} href={ep['url']} target="_blank">
                  <tr>
                    <Td4>
                      <H4 key={`${index}+title`}>{ep['title']}</H4>
                    </Td4>
                    <Td5>
                      <H5 key={`${index}+episode`}>{ep['episode']}</H5>
                    </Td5>
                  </tr>
                </A>
              )
            })
          ) : (
            <h4>não possui episodios disponiveis</h4>
          )}
        </DIV>
      </EpBox>
    </>
  )
}

export default EpisodeList
