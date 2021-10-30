import Link from 'next/link'

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
    <Link href={props.episode.url}>
      <a>
        <img src={props.episode.image_url} alt={props.episode.episode} />
        <h4>{props.episode.title}</h4>
        <h5>{props.episode.episode}</h5>
      </a>
    </Link>
  )
}

export default EpisodeList
