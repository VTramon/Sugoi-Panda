import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Panda from '../public/images/panda.svg'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.dark.layoutHeaderBackground};
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

export interface LayoutHeaderProps {
  children?: any
  callbackSearch: Function
}
const LayoutHeader: React.FC<LayoutHeaderProps> = ({ callbackSearch }) => {
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

export default LayoutHeader
