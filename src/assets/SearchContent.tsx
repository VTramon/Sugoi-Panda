import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 70vw;
  height: 200px;
  margin: 10px;
  background-color: ${(props) => props.theme.dark.cardBackground};
`

const Image = styled.img`
  height: 100%;
  width: 150px;
  margin: 15px;
  margin-right: 50px;
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
        <li>
          <Box>
            <Image
              key={`${props.anime.title}+imagem`}
              src={props.anime.image_url}
              alt={props.anime.title}
            />
            <p key={`${props.anime.title}+titulo`}>{props.anime.title}</p>
          </Box>
        </li>
      ) : null}
    </>
  )
}

export default Content
