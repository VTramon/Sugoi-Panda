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

const LayoutHeader: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>
        <Image height={70} src={Panda} alt="sugoi panda" />
        <label>Sugoi Panda</label>
      </Logo>
    </StyledHeader>
  )
}

export default LayoutHeader
