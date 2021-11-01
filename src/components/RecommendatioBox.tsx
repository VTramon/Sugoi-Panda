import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 20vw;
  min-height: 100vh;
  margin-right: 25px;
  border: 1px solid ${(props) => props.theme.dark.listLine};
`

const RecomendationsBox = () => {
  return (
    <Box>
      <ul>
        <li></li>
      </ul>
    </Box>
  )
}
export default RecomendationsBox
