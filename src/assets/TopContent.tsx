import Link from 'next/link'
import styled from 'styled-components'

const Box = styled.a`
  display: flex;
  gap: 10;
  flex-flow: column wrap;
  border-radius: 5px;
  justify-content: flex-start;
  align-items: center;
  width: 165px;
  height: 48%;
  margin: 10px;
  cursor: pointer;
  text-decoration: none;
  background-color: ${(props) => props.theme.dark.cardBackground};
`

const Image = styled.img`
  width: 100%;
  /* height: 210px; */
  display: flex;
  object-fit: cover;
  height: 80%;
  border-radius: 5px;
`

const Text = styled.p`
  display: flex;
  height: 40px;
  width: fit-content;
  text-decoration: none;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.dark.text};
`

export interface TopAnimesProps {
  anime: {
    mal_id?: number
    rank: number
    title?: string
    image_url?: string
  }
}

const TopContent: React.FC<TopAnimesProps> = (props) => {
  return (
    <>
      {props.anime.title && props.anime.image_url && props.anime.rank <= 16 ? (
        <Link href={`/single/${props.anime.mal_id}`}>
          <Box>
            <Image
              key={`${props.anime.rank}+imagem`}
              src={props.anime.image_url}
              alt={props.anime.title}
            />
            <Text key={`${props.anime.rank}+titulo`}>{props.anime.title}</Text>
          </Box>
        </Link>
      ) : null}
    </>
  )
}

export default TopContent
