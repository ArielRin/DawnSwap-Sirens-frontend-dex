import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Mitr', sans-serif;
  }
  body {

      // background-image: url('/images/oldbkg.gif');
  background-image: url('/images/body.png');
  background-size: cover;
  min-height: 100vh; /* required for full page background */
  justifyContent: 'center';
   alignItems: 'center';
}
`

export default GlobalStyle
