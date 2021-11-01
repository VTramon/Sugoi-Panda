import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 45px;
  padding: 10px;
  padding-left: 20px;
  background: #505050;
  border: 1px solid ${(props) => props.theme.dark.listLine};
  border-bottom: none;
`
interface HeaderProps {
  title: string
}
const DetailsHeader: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <h2>{props.title}</h2>
    </StyledHeader>
  )
}

export default DetailsHeader
