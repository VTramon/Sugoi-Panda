interface AnimeProps {
  anime: {
    title?: string
    url?: string
    image_url?: string
    mal_id?: number
  }
}

const SingleAnime: React.FC<AnimeProps> = (props) => {
  return (
    <div>
      <h1>{props.anime.title}</h1>
      <img src={props.anime.image_url} alt={props.anime.title} />
      <h2>Id = {props.anime.mal_id}</h2>
      <h2>Url = {props.anime.url}</h2>
    </div>
  )
}

export default SingleAnime
