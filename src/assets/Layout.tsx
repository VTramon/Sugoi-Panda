import { useEffect, useState } from 'react'
import api from 'src/services/api'
import styled from 'styled-components'
import LayoutContent from './LayoutContent'
import LayoutHeader from './LayoutHeader'
import SearchBar from './SearchBar'
import Content from './SearchContent'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface LayoutProps {
  rank: number
  title?: string
  image_url?: string
}

const Layout: React.FC<LayoutProps> = () => {
  const [search, setSearch] = useState('')
  const [animes, setAnimes] = useState<LayoutProps[]>([])

  const handleGetSearch = async () => {
    await api.get(`search/anime?q=${search}&limit=20`).then((response) => {
      if (response.status === 200) {
        setAnimes(response.data['results'])
      }
    })
  }

  useEffect(() => {
    if (search.length === 0) return
    handleGetSearch()
  }, [search])

  return (
    <StyledLayout>
      <LayoutHeader />
      <SearchBar callbackSearch={setSearch} />
      {!!animes &&
        animes.map((anime, index) => {
          return <Content key={index} anime={anime} />
        })}
      <LayoutContent rank={0} />
    </StyledLayout>
  )
}

export default Layout
