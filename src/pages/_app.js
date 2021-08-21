import { createGlobalStyle, ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#23A6F0',
    textPrimary: '#252B42',
    textSecondary: '#737373',
    lightGray1: '#FAFAFA',
    success: '#2DC071',
    muted: '#BDBDBD',
    disabledElement: '#23A6F0',
    alert: '#E77C40',
    textLight: '#FFFFFF',
    backgroundLight: '#FFFFFF'
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.textSecondary};
    background-color: ${theme.colors.lightGray1};
    font-family: 'montserrat';
  }
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
