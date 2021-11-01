import SingleAnime from 'src/assets/SingleAnime'
import { GetServerSideProps } from 'next'

const Anime: React.FC = () => {
  return (
    <>
      <SingleAnime />
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
