import { useEffect, useState } from 'react'
import api from 'src/services/api'
import styled from 'styled-components'
import LayoutContent from './LayoutContent'
import LayoutHeader from './LayoutHeader'
import SearchBar from './SearchBar'
import Content from './SearchContent'

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  overflow: hidden;
`

const List = styled.ol`
  list-style: none;
  max-height: 500px;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.dark.boxBackground};
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.dark.boxBackground};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.dark.headerBackground};
  }
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

  const closeListByClick = () => {
    setAnimes([])
  }

  useEffect(() => {
    if (search.length === 0) return
    handleGetSearch()
  }, [search])

  return (
    <StyledLayout onClick={closeListByClick}>
      <LayoutHeader />
      <SearchBar callbackSearch={setSearch} />
      <List>
        {animes &&
          animes.map((anime, index) => {
            return (
              <li>
                <Content key={index} anime={anime} />
              </li>
            )
          })}
      </List>
      <LayoutContent rank={0} />
    </StyledLayout>
  )
}

export default Layout
