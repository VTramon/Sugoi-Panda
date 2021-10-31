import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import api from 'src/services/api'
import styled from 'styled-components'

const Details = styled.div`
  display: block;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
`

const Image = styled.img`
  display: block;
  height: 370px;
  width: 250px;
  float: left;
`

const P = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`
const Score = styled.span`
  background: ${(props) => props.theme.dark.layoutHeaderBackground};
  padding: 2px 4px;
  font-size: 1.5rem;
  font-weight: 900;
  color: #000;
  line-height: 1;
  border-radius: 6px;
  border: 1px solid #000;
  margin-right: 5px;
`

interface AnimeDetailsProps {
  anime: {
    image_url?: string
    title?: string
    title_japanese?: string
    episodes?: number
    type?: string
    source?: string
    score?: number
    synopsis?: string
    rank?: number
    aired?: {
      prop?: {
        to?: {
          year?: number
        }
      }
    }
  }
}

const AnimeDetails: React.FC<AnimeDetailsProps> = (props) => {
  const [genre, setGenre] = useState([])
  const [tema, setTema] = useState([])
  const [studios, setStudios] = useState([])

  const router = useRouter()
  const { id } = router.query

  const onLoad = async () => {
    await api.get(`https://api.jikan.moe/v3/anime/${id}`).then((res) => {
      setGenre(res.data['genres'])
      setStudios(res.data['studios'])
      setTema(res.data['themes'])
    })
  }

  useEffect(() => {
    onLoad()
  }, [])
  return (
    <Details>
      <P>
        <Image src={props.anime.image_url} alt={props.anime.title} />
        <span>{props.anime.title}</span>
      </P>
      <P>
        <span> Titulo original: {props.anime.title_japanese}</span>
      </P>
      <P>
        <span> Tipo: {props.anime.type}</span>
      </P>
      <P>
        <span> Origem: {props.anime.source}</span>
      </P>
      <P>
        <span>
          {' '}
          Tema:{' '}
          {tema
            ? tema.map((temas) => {
                return `${temas['name']}`
              })
            : 'não constão temas'}
        </span>
      </P>
      <P>
        <span>
          Generos:
          {genre
            ? genre.map((genres) => {
                return ` ${genres['name']}`
              })
            : null}
        </span>
      </P>
      <P>
        <Score>Score: {props.anime.score}</Score>
      </P>
      <P>
        <span> Data: {props.anime.aired?.prop?.to?.year}</span>
      </P>
      <P>
        <span>Episodios: {props.anime.episodes}</span>
      </P>
      <P>
        <span>
          Studios:
          {studios
            ? studios.map((studio) => {
                return ` ${studio['name']}`
              })
            : null}
        </span>
      </P>
      <P>
        <span>{props.anime.synopsis}</span>
      </P>
    </Details>
  )
}
export default AnimeDetails
