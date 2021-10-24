import { FormEvent, useState } from 'react'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.dark.headerBackground};
`

export interface HeaderProps {
  children?: any
  callbackSearch: Function
}
const Header: React.FC<HeaderProps> = ({ callbackSearch }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    callbackSearch(search)
    return
  }

  return (
    <StyledHeader>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
          placeholder="qual anime deseja buscar?"
        />
      </Form>
    </StyledHeader>
  )
}

export default Header
