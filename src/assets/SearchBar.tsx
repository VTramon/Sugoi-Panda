import { useState, FormEvent } from 'react'
import styled from 'styled-components'

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

export interface SearchBarProps {
  children?: any
  callbackSearch: Function
}

const SearchBar: React.FC<SearchBarProps> = ({ callbackSearch }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    callbackSearch(search)
    return
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        placeholder="qual anime deseja buscar?"
      />
    </Form>
  )
}

export default SearchBar
