import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 8vh;
  margin-top: 50px;
  padding-left: 50px;
  border-radius: 15px 15px 0 0;
  background: ${(props) => props.theme.dark.headerBackground};
`
interface HeaderProps {
  title: string
}
const TopContentHeader: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
      <h2>{props.title}</h2>
    </StyledHeader>
  )
}

export default TopContentHeader
