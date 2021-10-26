import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 200px;
  padding: 10px;
  margin: 100px;
`

const Image = styled.img`
  object-fit: cover;
`

export interface ContentProps {
  anime: {
    rank: number
    title?: string
    image_url?: string
  }
}

const Content: React.FC<ContentProps> = (props) => {
  return (
    <>
      {props.anime.title && props.anime.image_url ? (
        <Box>
          <Image
            key={`${props.anime.title}+imagem`}
            src={props.anime.image_url}
            alt={props.anime.title}
          />
          <p key={`${props.anime.title}+titulo`}>{props.anime.title}</p>
        </Box>
      ) : null}
    </>
  )
}

export default Content
