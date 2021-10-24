import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  border: 0;
  box-sizing: border-box;
}
body{
  background: ${(props) => props.theme.dark.background};
  color: ${(props) => props.theme.dark.text};
  font:400 16px Roboto, sans-serif;  
}
`
