import styled from 'styled-components'

const Box = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 270px;
  padding: 10px;
  overflow: hidden;
`

const Image = styled.img`
  object-fit: contain;
  height: 80%;
  border-radius: 5px;
`

export interface TopAnimesProps {
  anime: {
    rank: number
    title?: string
    image_url?: string
  }
}

const TopRecommendations: React.FC<TopAnimesProps> = (props) => {
  return (
    <>
      {props.anime.title && props.anime.image_url && props.anime.rank <= 12 ? (
        <Box>
          <Image
            key={`${props.anime.rank}+imagem`}
            src={props.anime.image_url}
            alt={props.anime.title}
          />
          <p key={`${props.anime.rank}+titulo`}>{props.anime.title}</p>
        </Box>
      ) : null}
    </>
  )
}

export default TopRecommendations
