import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

interface EpisodeListProps {
  episode: {
    title: string
    episode: string
    url: string
    image_url: string
  }
}

const EpisodeList: React.FC<EpisodeListProps> = (props) => {
  return (
    <StyledLink href={props.episode.url}>
      <a>
        <img src={props.episode.image_url} alt={props.episode.episode} />
        <h4>{props.episode.title}</h4>
        <h5>{props.episode.episode}</h5>
      </a>
    </StyledLink>
  )
}

export default EpisodeList
