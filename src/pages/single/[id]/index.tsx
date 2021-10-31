import SingleAnime from 'src/assets/SingleAnime'
import { GetServerSideProps } from 'next'

interface AnimeProps {
  title?: string
  url?: string
  image?: string
  mal_id?: number
}

const Anime: React.FC<AnimeProps> = (props) => {
  return (
    <>
      <SingleAnime>{props.children}</SingleAnime>
    </>
  )
}

export default Anime

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context

  return {
    props: { query },
  }
}
