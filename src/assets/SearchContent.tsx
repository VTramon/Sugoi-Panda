export interface ContentProps {
  anime: {
    title?: string
    image_url?: string
  }
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      {props.anime.title && props.anime.image_url ? (
        <>
          <h5 key={`${props.anime.title}+titulo`}>{props.anime.title}</h5>
          <img
            key={`${props.anime.title}+imagem`}
            src={props.anime.image_url}
            alt={props.anime.title}
          />
        </>
      ) : null}
    </>
  )
}

export default Content
