import { FormEvent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Panda from '../public/images/panda.svg'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.dark.headerBackground};
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`

const Form = styled.form`
  border-radius: 5px;
`

const Input = styled.input`
  margin: 50px;
  border-radius: inherit;
  height: 30px;
  width: 40vw;
  padding: 5px;
  padding-left: 20px;
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
      <Logo>
        <Image height={70} src={Panda} alt="sugoi panda" />
        <label>Sugoi Panda</label>
      </Logo>
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
