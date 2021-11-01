import Image from 'next/image'
import Panda from '../public/images/panda.svg'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 8vh;
  background: ${(props) => props.theme.dark.layoutHeaderBackground};
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  color: ${(props) => props.theme.dark.text};
  text-decoration: none;
`

const Label = styled.label`
  cursor: pointer;
`

const LayoutHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Logo href="/">
        <Image height={70} src={Panda} alt="sugoi panda" />
        <Label>Sugoi Panda</Label>
      </Logo>
    </StyledHeader>
  )
}

export default LayoutHeader
