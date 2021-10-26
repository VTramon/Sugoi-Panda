import styled from 'styled-components'

const Box = styled.a`
  display: flex;
  gap: 10;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 270px;
  cursor: pointer;
  text-decoration: none;
`

const Image = styled.img`
  width: 130px;
  height: 210px;
  display: flex;
  object-fit: cover;
  height: 80%;
  border-radius: 5px;
`

const Text = styled.p`
  display: flex;
  height: 20px;
  width: fit-content;
  text-decoration: none;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.dark.text};
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
      {props.anime.title && props.anime.image_url && props.anime.rank <= 18 ? (
        <Box href="#">
          <Image
            key={`${props.anime.rank}+imagem`}
            src={props.anime.image_url}
            alt={props.anime.title}
          />
          <Text key={`${props.anime.rank}+titulo`}>{props.anime.title}</Text>
        </Box>
      ) : null}
    </>
  )
}

export default TopRecommendations
